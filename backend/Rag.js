import fs from "fs/promises";
import dotenv from "dotenv";
import { google } from "@ai-sdk/google";
import { embed, generateText } from "ai";

dotenv.config();

// --- MODELS ---
const embedModel = google.textEmbedding("gemini-embedding-001");
const genModel = google("gemini-2.5-flash");

let vectors = null;

async function loadText(filePath) {
    const text = await fs.readFile(filePath, "utf8");
    return text.split("\n").filter(Boolean);
}

// --- COSINE SIMILARITY ---
function cosine(a, b) {
    let dot = 0, magA = 0, magB = 0;
    for (let i = 0; i < a.length; i++) {
        dot += a[i] * b[i];
        magA += a[i] * a[i];
        magB += b[i] * b[i];
    }
    return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

async function initRAG() {
    if (vectors) return;

    const docs = await loadText("./about.txt");

    vectors = [];
    for (const doc of docs) {
        const { embedding } = await embed({
            model: embedModel,
            value: doc,
        });
        vectors.push({ doc, vector: embedding });
    }

    console.log("✅ RAG initialized");
}


export async function ask(question, topKCount = 5) {
    if (!vectors) {
        throw new Error("RAG not initialized. Call initRAG() first.");
    }

    const { embedding: qVector } = await embed({
        model: embedModel,
        value: question,
    });

    const scored = vectors
        .map(v => ({ ...v, score: cosine(qVector, v.vector) }))
        .sort((a, b) => b.score - a.score)
        .slice(0, topKCount);

    const context = scored.map(v => v.doc).join("\n");

    const result = await generateText({
        model: genModel,
        prompt: `
You are a personal portfolio assistant for Suhail Ameer.
Answer  using the context below very well typed understanble.

If the answer is not present, say: "I am sorry i will let him know to add these details,may be he forgotten to add."

Context:
${context}

Question: ${question}
Answer:
`,
    });

    return result.text;
}


export { initRAG };

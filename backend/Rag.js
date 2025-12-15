import fs from "fs/promises";      // async file read
import dotenv from "dotenv";
import { google } from "@ai-sdk/google";
import { embed, generateText } from "ai";

dotenv.config();

// --- MODELS ---
const embedModel = google.textEmbedding("gemini-embedding-001");
const genModel = google("gemini-2.5-flash");

// --- LOAD AND SPLIT TEXT ---
async function loadText(filePath) {
    const text = await fs.readFile(filePath, "utf8");
    // split into lines, remove empty
    return text.split("\n").filter(Boolean);
}

// --- COSINE SIMILARITY FUNCTION ---
function cosine(a, b) {
    let dot = 0, magA = 0, magB = 0;
    for (let i = 0; i < a.length; i++) {
        dot += a[i] * b[i];
        magA += a[i] * a[i];
        magB += b[i] * b[i];
    }
    return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

// --- BUILD EMBEDDINGS ---
async function buildEmbeddings(docs) {
    const vectors = [];
    for (const doc of docs) {
        const { embedding } = await embed({
            model: embedModel,
            value: doc,
        });
        vectors.push({ doc, vector: embedding });
    }
    console.log("✅ Embeddings built");
    return vectors;
}

// --- ASK FUNCTION (TOP-K RETRIEVAL + PROMPT) ---
async function ask(question, vectors, topKCount = 5) {
    // embed question
    const { embedding: qVector } = await embed({
        model: embedModel,
        value: question,
    });

    // calculate similarity scores
    const scored = vectors
        .map(v => ({ ...v, score: cosine(qVector, v.vector) }))
        .sort((a, b) => b.score - a.score)
        .slice(0, topKCount);

    // combine top K docs as context
    const context = scored.map(v => v.doc).join("\n");

    // generate answer
    const result = await generateText({
        model: genModel,
        prompt: `
You are a personal portfolio assistant for Suhail Ameer.
Answer the user's question ONLY using the context below.
If the answer is not in the context, respond: "I don’t have that information."

Context:
${context}

Question: ${question}
Answer:
    `,
    });

    console.log("\n🧠 Answer:\n", result.text);
}

// --- MAIN ---
(async () => {
    const docs = await loadText("./about.txt");  // your about.txt file
    const vectors = await buildEmbeddings(docs);

    // Test questions

    await ask("tell me about ameer suhail", vectors);
    ;
})();

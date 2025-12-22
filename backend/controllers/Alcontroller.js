import { ask, initRAG } from "../Rag.js";
import fs from "fs/promises";


await initRAG();
export const AiPostdata = async (req, res) => {

    const { message } = req.body
    console.log(message);

    if (!message || !message.trim()) {
        return res.status(400).json({ error: "Message is required" });
    }





    try {
        const answer = await ask(message);
        console.log(answer);

        return res.status(200).json({ answer: answer });

    } catch (error) {
        console.log(error);

        return res.status(500).json("ai respond failed", error)

    }
}


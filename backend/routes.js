import express from "express"
import { AiPostdata } from "./controllers/Alcontroller.js"
import nodemailer from "nodemailer"

export const Mainrouter = express.Router()
Mainrouter.post("/message/about", (req, res) => {
    const { name, email, message } = req.body

    console.log(name, email);

    if (!name || !email || !message) {
        return res.status(400).json("fill the details")
    }


    try {
        // Create a test account or replace with real credentials.
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "suhailgti12@gmail.com",
                pass: "dbif ffzu vrjp druf",
            },
        });

        // Wrap in an async IIFE so we can use await.
        (async () => {
            const info = await transporter.sendMail({
                from: `${name} <${email}>`,
                to: "suhailgti12@gmail.com",
                subject: "Hello ,",
                text: `this is ${name} i came a cross your portfolio so that i want to message you.
            ${message}  
            
            
            ${email}
            `, // plain‑text body
                html: `
       <div style="background-color:#f9fafb;padding:30px;font-family:Inter,Arial,sans-serif">
    <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;box-shadow:0 10px 25px rgba(0,0,0,0.08);overflow:hidden">

      <!-- Header -->
      <div style="background:#111827;padding:20px">
        <h2 style="color:#ffffff;margin:0;font-size:20px;letter-spacing:0.5px">
          Portfolio message
        </h2>
      </div>

      <!-- Body -->
      <div style="padding:24px;color:#374151">
        <p style="margin:0 0 12px">
          <strong>Name:</strong> ${name}
        </p>
        <p style="margin:0 0 12px">
          <strong>Email:</strong> ${email}
        </p>

        <div style="margin-top:20px">
          <p style="font-weight:600;margin-bottom:8px">Message</p>
          <p style="background:#f3f4f6;padding:14px;border-radius:8px;line-height:1.6">
            ${message}
          </p>
        </div>
      </div>

      <!-- Footer -->
      <div style="background:#f9fafb;padding:14px;text-align:center;font-size:12px;color:#6b7280">
        Sent from your portfolio contact form
      </div>

    </div>
  </div>
      `,  // HTML body
            });
            return res.status(200).json({ message: "sent mail to suhail,will replay you soon" })
            console.log("Message sent:", info.messageId);
        })();
    } catch (error) {

        return res.json(error)

    }

})

Mainrouter.post("/chat/save", AiPostdata)
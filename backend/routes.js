import express from "express"
import { AiPostdata } from "./controllers/Alcontroller.js"
import nodemailer from "nodemailer"
import { Resend } from "resend";
export const Mainrouter = express.Router()




Mainrouter.post("/message/about", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const resend = new Resend(process.env.RESENDAPI);

    await resend.emails.send({
      from: "Suhail Portfolio <contact@yourdomain.com>", // VERIFIED DOMAIN
      to: ["suhailgti12@gmail.com"], // YOU receive the mail
      reply_to: email, // user replies come here
      subject: "New message from portfolio contact form",
      text: `
You have received a new message from your portfolio.

Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
<div style="background:#f3f4f6;padding:40px;font-family:Inter,Arial,sans-serif">
  <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;
              box-shadow:0 10px 30px rgba(0,0,0,0.08);overflow:hidden">

    <div style="background:#111827;padding:24px">
      <h2 style="color:#ffffff;margin:0;font-size:20px">
        New Portfolio Message
      </h2>
      <p style="color:#d1d5db;margin-top:6px;font-size:13px">
        Someone contacted you through your portfolio
      </p>
    </div>

    <div style="padding:24px;color:#374151">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>

      <p style="margin-top:16px"><strong>Message:</strong></p>
      <div style="background:#f9fafb;border:1px solid #e5e7eb;
                  padding:16px;border-radius:8px;line-height:1.6">
        ${message}
      </div>
    </div>

    <div style="background:#f9fafb;padding:14px;text-align:center;
                font-size:12px;color:#6b7280">
      © ${new Date().getFullYear()} Suhail Portfolio
    </div>

  </div>
</div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully. I will get back to you soon.",
    });

  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({
      error: "Failed to send message. Please try again later.",
    });
  }
});


Mainrouter.post("/chat/save", AiPostdata)
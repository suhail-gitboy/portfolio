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
<div style="background-color:#f3f4f6;padding:40px;font-family:Inter,Arial,sans-serif">
  <div style="max-width:620px;margin:auto;background:#ffffff;border-radius:14px;
              box-shadow:0 20px 40px rgba(0,0,0,0.08);overflow:hidden">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#111827,#1f2933);padding:26px">
      <h2 style="color:#ffffff;margin:0;font-size:22px;font-weight:600;letter-spacing:0.6px">
        New Contact Message
      </h2>
      <p style="margin:6px 0 0;color:#d1d5db;font-size:13px">
        You’ve received a new inquiry via your portfolio
      </p>
    </div>

    <!-- Body -->
    <div style="padding:28px;color:#374151">

      <!-- Sender Info -->
      <table style="width:100%;border-collapse:collapse;margin-bottom:22px">
        <tr>
          <td style="padding:8px 0;font-size:14px;width:90px;color:#6b7280">
            Name
          </td>
          <td style="padding:8px 0;font-size:14px;font-weight:500">
            ${name}
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0;font-size:14px;color:#6b7280">
            Email
          </td>
          <td style="padding:8px 0;font-size:14px;font-weight:500">
            ${email}
          </td>
        </tr>
      </table>

      <!-- Message -->
      <div style="margin-top:10px">
        <p style="font-size:14px;font-weight:600;margin-bottom:10px;color:#111827">
          Message Details
        </p>
        <div style="background:#f9fafb;border:1px solid #e5e7eb;
                    padding:18px;border-radius:10px;
                    font-size:14px;line-height:1.7;color:#374151">
          ${message}
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div style="background:#f9fafb;padding:16px;text-align:center;
                font-size:12px;color:#6b7280">
      This message was securely sent from your portfolio contact form.
      <br />
      <span style="color:#9ca3af">© ${new Date().getFullYear()} Your Portfolio</span>
    </div>

  </div>
</div>
`
        // HTML body
      });
      return res.status(200).json("sent mail to suhail,will replay you soon")
      console.log("Message sent:", info.messageId);
    })();
  } catch (error) {

    return res.json(error)

  }

})

Mainrouter.post("/chat/save", AiPostdata)
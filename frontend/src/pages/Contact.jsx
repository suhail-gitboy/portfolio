import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MessageUpload } from "../Services/AllAiservices";
import { useState } from "react";

export default function ContactPage() {
  const [messagedetail, setMessagedetail] = useState({

    name: "",
    email: "",
    message: "",
  });
  const [loading, Setloading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessagedetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const FuncSubmitmessage = async (e) => {
    e.preventDefault();
    Setloading(true)
    const { name, email, message } = messagedetail;

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

   
    const response = await MessageUpload(messagedetail);

    if (response.status === 200) {
      alert("Message sent successfully 🚀");
      setMessagedetail({ name: "", email: "", message: "" });
      Setloading(false)
    } else {
      alert("Server error");
      console.log(response);

    }
  }

  return (
    <section className="min-h-screen bg-black text-neutral-200 font-sans flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Let’s <span className="text-violet-500">Connect</span>
            </h1>
            <p className="text-neutral-400 max-w-md">
              I’m always open to discussing new projects or opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-md">
            {[
              { label: "GitHub", value: "github.com/username", icon: <FaGithub /> },
              { label: "LinkedIn", value: "linkedin.com/in/username", icon: <FaLinkedin /> },
              { label: "Email", value: "hello@email.com", icon: <MdEmail /> },
              { label: "Twitter", value: "@username", icon: <FaTwitter /> },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 border border-neutral-800 rounded-xl p-4 hover:border-violet-600 transition"
              >
                <span className="text-violet-500 text-lg">{item.icon}</span>
                <div>
                  <p className="text-xs text-neutral-400">{item.label}</p>
                  <p className="text-sm truncate">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-1 w-24 bg-violet-600 rounded-full" />
        </div>

        {/* RIGHT SIDE – FORM */}
        <div className="bg-neutral-900/60 backdrop-blur rounded-2xl p-8 border border-neutral-800 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">
            Send a <span className="text-violet-500">Message</span>
          </h2>

          <form onSubmit={FuncSubmitmessage} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={messagedetail.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-black border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:border-violet-600 outline-none"
              />
              <input
                type="email"
                name="email"
                value={messagedetail.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="bg-black border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:border-violet-600 outline-none"
              />
            </div>

            <textarea
              rows="5"
              name="message"
              value={messagedetail.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:border-violet-600 outline-none resize-none"
            />

            <button
              type="submit"
              className="w-full bg-violet-600 text-black font-medium py-3 rounded-lg hover:bg-violet-700 transition"
            >
              {loading ? "loading..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

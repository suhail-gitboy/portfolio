import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MessageUpload } from "../Services/AllAiservices";
import { useEffect, useState } from "react";
import Footer from "../common/Footer";
import Nav from "../common/Nav";
import { Toaster, toast } from "sonner";
import { useLocation } from "react-router";

export default function ContactPage() {


  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  const [messagedetail, setMessagedetail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, Setloading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessagedetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const FuncSubmitmessage = async (e) => {
    e.preventDefault();
    Setloading(true);

    const { name, email, message } = messagedetail;

    if (!name || !email || !message) {
      toast.warning("Please fill all fields");
      Setloading(false);
      return;
    }

    const response = await MessageUpload(messagedetail);

    if (response.status === 200) {
      toast.success("Message sent successfully 🚀");
      setMessagedetail({ name: "", email: "", message: "" });
      Setloading(false);
    } else {
      alert("Server error");
      console.log(response);
      Setloading(false);
    }
  };

  return (
    <>
      <Toaster />
      <Nav />

      <section className="min-h-screen bg-black text-neutral-200 font-sans flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Let’s <span className="text-violet-700">Connect</span>
              </h1>
              <p className="text-neutral-400  font-sans max-w-md">
                I’m always open to discussing new projects or opportunities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-md">
              {[
                { label: "GitHub", value: "https://github.com/", icon: <FaGithub /> },
                { label: "LinkedIn", value: "https://www.linkedin.com/in/ameer-suhail-78aa40303/", icon: <FaLinkedin /> },
                { label: "Email", value: "mailto:suhailgti12@gmail.com", icon: <MdEmail /> },
                { label: "Instagram", value: "https://www.instagram.com/suhaiiiiiiiiiiil", icon: <FaInstagram /> },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex overflow-hidden items-center  gap-3 border border-neutral-800 rounded-xl p-4 
                             hover:border-violet-700 transition"
                >
                  <span className="text-violet-700 text-lg">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs text-neutral-400  font-sans">{item.label}</p>
                    <p className="text-sm truncate  font-sans">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-1 w-24 bg-violet-800  rounded-full" />
          </div>

          {/* RIGHT SIDE – FORM */}
          <div className="bg-neutral-950/70 backdrop-blur rounded-2xl p-8 border border-neutral-800 shadow-lg">
            <h2 className="text-2xl   font-semibold mb-6">
              Send a <span className="text-violet-700  ">Message</span>
            </h2>

            <form onSubmit={FuncSubmitmessage} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={messagedetail.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-black border border-neutral-800  font-sans rounded-lg px-4 py-3 text-sm 
                             focus:border-violet-700 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={messagedetail.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="bg-black border font-sans border-neutral-800 rounded-lg px-4 py-3 text-sm 
                             focus:border-violet-700 outline-none"
                />
              </div>

              <textarea
                rows={5}
                name="message"
                value={messagedetail.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full bg-black border  font-sans border-neutral-800 rounded-lg px-4 py-3 text-sm 
                           focus:border-violet-700 outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full bg-violet-800  font-sans text-white font-medium py-3 rounded-lg 
                           hover:bg-violet-900 transition"
              >
                {loading ? "sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

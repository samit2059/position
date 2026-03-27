import { useState, useRef, type FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import MagneticButton from "@/components/MagneticButton";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Github, Linkedin, Facebook, Send, Phone } from "lucide-react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // EmailJS credentials from your existing code
    const SERVICE_ID = "service_jxdefwn";
    const TEMPLATE_ID = "template_y7mvgnf";
    const PUBLIC_KEY = "-xXxspZe_ugkduywB";

    setSending(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      formRef.current.reset();
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or email me directly.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5 text-purple-400" />,
      label: "Email",
      value: "shresthasamit40@gmail.com",
      link: "mailto:shresthasamit40@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-400" />,
      label: "Location",
      value: "Bhaktapur, Nepal",
      link: "https://maps.app.goo.gl/5Y8q6e6q6e6q6e6q6"
    }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, label: "GitHub", link: "https://github.com/samit2059", color: "hover:text-white" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", link: "https://www.linkedin.com/in/samit-shrestha-539a0126a/", color: "hover:text-blue-400" },
    { icon: <Facebook size={20} />, label: "Facebook", link: "https://www.facebook.com/samit.shrestha.735/", color: "hover:text-sky-400" }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-neutral-950 relative overflow-hidden text-neutral-200">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] blur-3xl pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-purple-600 rounded-full" />
        <div className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-blue-600 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Let's <span className="text-purple-500">talk.</span>
            </h1>
            <p className="text-neutral-400 text-lg mb-12 max-w-md font-medium">
              Have a dedicated project in mind or just want to say hi? I'm always open to new opportunities and creative collaborations.
            </p>

            <div className="space-y-8 mb-12">
              {contactDetails.map((detail, i) => (
                <motion.a
                  key={detail.label}
                  href={detail.link}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-neutral-800 transition-all duration-300 shadow-xl">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-0.5">{detail.label}</p>
                    <p className="text-white font-semibold group-hover:text-purple-400 transition-colors">{detail.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 ${social.color} hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-white/5`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-900/40 border border-neutral-800 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl relative"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_name" className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 px-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-neutral-950/50 border border-neutral-800 text-white placeholder:text-neutral-700 focus:outline-none focus:border-purple-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 px-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-neutral-950/50 border border-neutral-800 text-white placeholder:text-neutral-700 focus:outline-none focus:border-purple-500/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 px-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl bg-neutral-950/50 border border-neutral-800 text-white placeholder:text-neutral-700 focus:outline-none focus:border-purple-500/50 transition-all resize-none"
                  placeholder="Tell me about your project or question..."
                />
              </div>

              <div className="pt-2">
                <MagneticButton>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full px-3 py-5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm uppercase tracking-[0.2em] transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-purple-600/20"
                  >
                    {sending ? (
                      "Sending Message..."
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} className="translate-y-[-1px]" />
                      </>
                    )}
                  </button>
                </MagneticButton>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
};

export default Contact;

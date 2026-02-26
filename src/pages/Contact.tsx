import { useState, useRef, type FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import MagneticButton from "@/components/MagneticButton";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Replace these with your real EmailJS credentials
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

  return (
    <main className="pt-28 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.h1
          className="font-display text-4xl sm:text-6xl font-900 text-foreground mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Let's Talk
        </motion.h1>
        <motion.p
          className="font-body text-muted-foreground text-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Have a project in mind? Drop me a message and I'll get back to you.
        </motion.p>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div>
            <label htmlFor="user_name" className="block font-body text-sm text-muted-foreground mb-2">
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-foreground/20 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block font-body text-sm text-muted-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-foreground/20 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-body text-sm text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-foreground/20 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <MagneticButton>
            <button
              type="submit"
              disabled={sending}
              className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </MagneticButton>
        </motion.form>
      </div>
    </main>
  );
};

export default Contact;

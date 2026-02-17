import { motion } from "framer-motion";
import { Phone, Mail, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Create Together</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
            Ready to elevate your brand? Reach out and let's bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <a
            href="tel:+919025542112"
            className="flex flex-col items-center gap-3 p-8 bg-card border border-border rounded-sm hover:border-primary/40 transition-colors duration-300"
          >
            <Phone className="w-6 h-6 text-primary" />
            <span className="text-sm text-muted-foreground">+91 90255 42112</span>
          </a>
          <a
            href="mailto:holpulsestudio@gmail.com"
            className="flex flex-col items-center gap-3 p-8 bg-card border border-border rounded-sm hover:border-primary/40 transition-colors duration-300"
          >
            <Mail className="w-6 h-6 text-primary" />
            <span className="text-sm text-muted-foreground">holpulsestudio@gmail.com</span>
          </a>
          <a
            href="https://instagram.com/holpulsesstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-8 bg-card border border-border rounded-sm hover:border-primary/40 transition-colors duration-300"
          >
            <Instagram className="w-6 h-6 text-primary" />
            <span className="text-sm text-muted-foreground">@HOLPULSESSTUDIO</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

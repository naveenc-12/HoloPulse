import { motion } from "framer-motion";
import { Palette, Image, FileText, Monitor, Package, Film, Video } from "lucide-react";

const services = [
  { icon: Palette, title: "Logo Design", description: "Emblems, wordmarks & pictorial logos that define your brand identity." },
  { icon: Image, title: "Poster Design", description: "Eye-catching posters that communicate your message with impact." },
  { icon: FileText, title: "Flyer Design", description: "Compelling flyers and brochures that drive engagement." },
  { icon: Monitor, title: "Web Design", description: "Modern, responsive websites that deliver seamless experiences." },
  { icon: Package, title: "Branding", description: "Complete brand packages — signage, cards, packaging & more." },
  { icon: Film, title: "Video Editing", description: "Professional video editing with transitions, effects & color grading that captivate." },
  { icon: Video, title: "Video Shoot", description: "High-quality video production for ads, events, reels & brand storytelling." },
];

const Services = () => {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Our Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 bg-card border border-border rounded-sm hover:border-primary/40 transition-colors duration-300"
            >
              <service.icon className="w-8 h-8 text-primary mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

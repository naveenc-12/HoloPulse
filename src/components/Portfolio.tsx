import { motion } from "framer-motion";
import logoGanesh from "@/assets/portfolio/logo-ganesh.jpg";
import logoVetrik from "@/assets/portfolio/logo-vetrik.jpg";
import logoPanimalar from "@/assets/portfolio/logo-panimalar.jpg";
import logoThulasi from "@/assets/portfolio/logo-thulasi.jpg";
import posters1 from "@/assets/portfolio/posters-1.jpg";
import posters2 from "@/assets/portfolio/posters-2.jpg";
import flyers from "@/assets/portfolio/flyers.jpg";
import webDesigns from "@/assets/portfolio/web-designs.jpg";
import branding1 from "@/assets/portfolio/branding-1.jpg";
import branding2 from "@/assets/portfolio/branding-2.jpg";
import brochure from "@/assets/portfolio/brochure.jpg";

const projects = [
  { src: logoGanesh, title: "Ganesh Plywoods", category: "Logo Design" },
  { src: logoVetrik, title: "Vetrik Pvt Ltd", category: "Logo Design" },
  { src: logoPanimalar, title: "Panimalar College", category: "Logo Design" },
  { src: logoThulasi, title: "Thulasi Foundation", category: "Logo Design" },
  { src: posters1, title: "Poster Designs", category: "Posters" },
  { src: posters2, title: "Poster Designs", category: "Posters" },
  { src: flyers, title: "Flyer Designs", category: "Flyers" },
  { src: webDesigns, title: "Web Designs", category: "Web" },
  { src: branding1, title: "Vibes Branding", category: "Branding" },
  { src: branding2, title: "Vibes Branding", category: "Branding" },
  { src: brochure, title: "First Step Builders", category: "Brochure" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-28 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Portfolio</h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative break-inside-avoid overflow-hidden rounded-sm"
            >
              <img
                src={project.src}
                alt={project.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-primary mb-1">{project.category}</p>
                  <h3 className="text-lg font-serif font-semibold">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

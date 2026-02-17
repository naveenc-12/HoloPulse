import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(40_55%_58%_/_0.06)_0%,_transparent_70%)]" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.4em] uppercase text-muted-foreground mb-6"
        >
          Creative Design Studio
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-gradient-gold">HoloPulse</span>
          <br />
          <span className="text-foreground">Studio</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Crafting bold identities & premium designs that elevate brands beyond the ordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex gap-4 justify-center"
        >
          <a
            href="#portfolio"
            className="px-8 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase rounded-sm hover:shadow-gold transition-shadow duration-300"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary/40 text-foreground font-medium text-sm tracking-wider uppercase rounded-sm hover:border-primary transition-colors duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-5 h-8 border border-muted-foreground/40 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

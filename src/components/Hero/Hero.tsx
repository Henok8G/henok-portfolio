import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const roles = [
  "Front-End Developer",
  "UI/UX Designer",
  "Full-Stack Developer",
  "Web Designer",
  "Problem Solver",
  "Copywriting",
  "Brand Designer",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-silver" />
      
      {/* Animated geometric pattern */}
      <div className="absolute inset-0 geometric-pattern animate-pattern-move opacity-50" />
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-silver/5 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-silver/3 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Name and title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                <span className="gradient-text">Henok Getachew</span>
                <span className="block text-muted-foreground text-2xl md:text-3xl lg:text-4xl mt-2 font-medium">
                  Web Developer & UI/UX Designer
                </span>
              </h1>
            </motion.div>

            {/* Roles grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-wrap gap-3"
            >
              {roles.map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="px-4 py-2 text-sm font-body text-muted-foreground border border-border/50 rounded-full hover:border-silver/30 hover:text-foreground transition-all duration-300 cursor-default"
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground font-body font-light max-w-xl"
            >
              "Let's make this project special and successful"
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#projects"
                className="group px-8 py-4 bg-foreground text-background font-heading font-semibold text-sm tracking-wide rounded-lg hover:bg-silver transition-all duration-300 hover:shadow-glow"
              >
                View Projects
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-border/50 text-foreground font-heading font-semibold text-sm tracking-wide rounded-lg hover:border-silver/50 hover:bg-secondary/50 transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-48 h-72 md:w-56 md:h-80 lg:w-64 lg:h-96 rounded-2xl bg-gradient-card border border-border/30 overflow-hidden gradient-border animate-subtle-float">
                <div className="absolute inset-0 geometric-pattern-alt opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground/50 font-body text-sm">Your Photo</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-silver/10 rounded-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-silver/5 rounded-xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground font-body tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const expertise = [
  "React / Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
  "Node.js",
  "UI/UX Design",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative section-spacing overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal/50" />
      <div className="absolute inset-0 geometric-pattern-alt opacity-40" />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-silver/5 rounded-full" />
      <div className="absolute bottom-20 left-20 w-48 h-48 border border-silver/5 rotate-45" />

      <div className="container relative z-10 px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm font-body text-muted-foreground tracking-widest uppercase"
              >
                About Me
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 gradient-text"
              >
                Crafting Digital
                <br />
                Experiences
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground font-body leading-relaxed"
            >
              I'm a passionate web developer and UI/UX designer with a keen eye for detail 
              and a love for creating beautiful and functional digital experiences. With expertise 
              spanning front-end development, full-stack solutions and brand design. I bring 
              ideas to life through clean code and thoughtful design.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground font-body leading-relaxed"
            >
              My approach combines technical precision with creative vision ensuring every 
              project not only looks stunning but performs flawlessly. I believe in the power 
              of minimalism and elegance in design creating interfaces that are intuitive 
              and memorable.
            </motion.p>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "1+", label: "Years Experience" },
                { number: "10+", label: "Projects Completed" },
                { number: "11+", label: "Happy Clients" },
                { number: "100%", label: "Dedication" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-6 bg-card/50 border border-border/30 rounded-xl hover:border-silver/20 transition-all duration-300"
                >
                  <span className="block font-heading text-3xl md:text-4xl font-bold gradient-text">
                    {stat.number}
                  </span>
                  <span className="text-sm text-muted-foreground font-body mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Expertise tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-body text-muted-foreground tracking-widest uppercase">
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-body bg-secondary/50 border border-border/30 rounded-full text-foreground hover:border-silver/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

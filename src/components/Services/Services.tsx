import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Globe, 
  Code, 
  Layers, 
  Palette, 
  Sparkles, 
  PenTool, 
  Figma, 
  Bot, 
  MessageSquare 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description: "Creating stunning, modern websites that captivate users and drive engagement through thoughtful design.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack development using React, Next.js, Node.js, and modern technologies for scalable solutions.",
  },
  {
    icon: Layers,
    title: "Frontend Development",
    description: "Pixel-perfect implementation with clean, maintainable code using HTML, CSS, JavaScript, and Tailwind.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design approach creating intuitive interfaces that delight and convert.",
  },
  {
    icon: Sparkles,
    title: "Branding & Identity",
    description: "Crafting memorable brand identities that communicate your unique value proposition.",
  },
  {
    icon: PenTool,
    title: "Copywriting",
    description: "Compelling content that tells your story and connects with your audience emotionally.",
  },
  {
    icon: Figma,
    title: "Figma to Web",
    description: "Seamless conversion of Figma designs into responsive, production-ready websites.",
  },
  {
    icon: Bot,
    title: "Lovable AI Expert",
    description: "Specialized expertise in leveraging Lovable AI for rapid, beautiful web development.",
  },
  {
    icon: MessageSquare,
    title: "Prompt Writing",
    description: "Expert prompt engineering for AI tools to maximize efficiency and output quality.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="relative section-spacing overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal/50" />
      <div className="absolute inset-0 geometric-pattern-alt opacity-30" />

      <div className="container relative z-10 px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body text-muted-foreground tracking-widest uppercase">
            What I Do
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 gradient-text">
            Services
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative p-8 bg-card/30 border border-border/30 rounded-2xl hover:border-silver/30 hover:bg-card/50 transition-all duration-500 hover:shadow-card"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-silver/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 bg-secondary/50 border border-border/30 rounded-xl group-hover:border-silver/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-silver group-hover:text-foreground transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

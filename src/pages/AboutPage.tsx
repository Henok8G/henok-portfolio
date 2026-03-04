import { motion } from "framer-motion";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { Link } from "react-router-dom";
import { Code, Palette, Lightbulb, Zap, ArrowRight } from "lucide-react";
import { useEffect } from "react";

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  uiux: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems", "Responsive Design"],
  tools: ["Git", "VS Code", "Node.js", "Vercel", "GitHub", "Lovable AI"],
  softSkills: ["Problem Solving", "Communication", "Collaboration", "Time Management", "Adaptability"],
  other: ["Performance Optimization", "Prompt Engineering", "Brand Strategy", "Copywriting"],
};

const tools = [
  { name: "Next.js", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Figma", icon: "🎯" },
  { name: "Git", icon: "📦" },
  { name: "Lovable AI", icon: "💜" },
  { name: "TypeScript", icon: "📘" },
];

const journey = [
  {
    year: "2025",
    title: "Lovable AI Expert",
    description: "Mastered AI-powered development tools and prompt engineering for rapid prototyping.",
    type: "Growth",
  },
  {
    year: "2025",
    title: "Full-Stack Expansion",
    description: "Extended skills to include backend development with Node.js and database management.",
    type: "Learning",
  },
  {
    year: "2025",
    title: "Freelance Journey",
    description: "Started taking on freelance projects, delivering UI/UX design and web development solutions.",
    type: "Freelance",
  },
  {
    year: "2024",
    title: "UI/UX Specialization",
    description: "Deep-dived into user experience design, learning Figma and design thinking principles.",
    type: "Design",
  },
  {
    year: "2024",
    title: "Self-Taught Beginning",
    description: "Started the journey as a self-taught developer, learning HTML, CSS, and JavaScript.",
    type: "Start",
  },
];

const specializations = [
  {
    icon: Code,
    title: "Clean Frontend Architecture",
    description: "Building scalable, maintainable codebases with modern React patterns and TypeScript.",
  },
  {
    icon: Palette,
    title: "UI/UX Clarity",
    description: "Creating intuitive interfaces that prioritize user experience and visual hierarchy.",
  },
  {
    icon: Lightbulb,
    title: "Branding Consistency",
    description: "Ensuring cohesive brand identity across all digital touchpoints and platforms.",
  },
  {
    icon: Zap,
    title: "Design to Code",
    description: "Converting Figma designs into pixel-perfect, production-ready code efficiently.",
  },
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background relative z-10">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-background to-background" />
        <div className="absolute inset-0 geometric-pattern-alt opacity-50 animate-pattern-move" />
        
        {/* Decorative elements */}
        <div className="absolute top-40 right-20 w-72 h-72 border border-silver/5 rounded-full blur-sm" />
        <div className="absolute bottom-10 left-10 w-40 h-40 border border-silver/5 rotate-45" />
        
        <div className="container relative z-10 px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-body text-muted-foreground tracking-widest uppercase"
            >
              Get to Know Me
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 gradient-text"
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto"
            >
              Designing and developing meaningful digital experiences with precision and creativity.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who I Am Section */}
      <section className="relative section-spacing overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/30" />
        
        <div className="container relative z-10 px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-sm font-body text-muted-foreground tracking-widest uppercase">
              Who I Am
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 gradient-text">
              A Creative Problem Solver
            </h2>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground font-body leading-loose">
              <p>
                I'm Henok Getachew, a web developer and UI/UX designer with a passion for creating 
                digital experiences that are both beautiful and functional. My work sits at the 
                intersection of design and technology, where I bridge the gap between creative 
                vision and technical execution.
              </p>
              <p>
                As a problem solver at heart, I approach every project with curiosity and a 
                commitment to finding elegant solutions. Whether I'm architecting a complex web 
                application or refining the user flow of a mobile interface. I believe in the 
                power of thoughtful design to transform how people interact with technology.
              </p>
              <p>
                My focus on brand-centered thinking means I don't just build products I help 
                create cohesive digital identities that resonate with users and stand out in 
                a crowded digital landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="relative section-spacing overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-20" />
        
        <div className="container relative z-10 px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-body text-muted-foreground tracking-widest uppercase">
              My Journey
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 gradient-text">
              The Path I've Taken
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-silver/30 via-silver/10 to-transparent" />
              
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-20 pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-1 w-4 h-4 bg-card border-2 border-silver/30 rounded-full" />
                  
                  <div className="p-6 bg-card/30 border border-border/30 rounded-xl hover:border-silver/20 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-body text-silver">{item.year}</span>
                      <span className="px-3 py-1 text-xs font-body bg-secondary/50 border border-border/30 rounded-full text-muted-foreground">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative section-spacing overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/50" />
        
        <div className="container relative z-10 px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-body text-muted-foreground tracking-widest uppercase">
              My Skills
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 gradient-text">
              Skills & Expertise
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, items], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="p-6 bg-card/30 border border-border/30 rounded-xl hover:border-silver/20 transition-all duration-300"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-body bg-secondary/50 border border-border/30 rounded-full text-muted-foreground hover:text-foreground hover:border-silver/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="relative section-spacing overflow-hidden">
        <div className="absolute inset-0 geometric-pattern-alt opacity-30" />
        
        <div className="container relative z-10 px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-body text-muted-foreground tracking-widest uppercase">
              My Toolbox
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 gradient-text">
              Tools & Technologies
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-6 bg-card/30 border border-border/30 rounded-xl hover:border-silver/30 hover:bg-card/50 transition-all duration-300 text-center"
              >
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </span>
                <span className="text-sm font-body text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="relative section-spacing overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/30" />
        
        <div className="container relative z-10 px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-body text-muted-foreground tracking-widest uppercase">
              What I Excel At
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 gradient-text">
              My Specializations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {specializations.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-card/30 border border-border/30 rounded-xl hover:border-silver/20 transition-all duration-300"
              >
                <div className="p-3 bg-secondary/50 border border-border/30 rounded-xl w-fit mb-4 group-hover:border-silver/20 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-silver" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-spacing overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-silver/3 rounded-full blur-3xl" />
        
        <div className="container relative z-10 px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold gradient-text">
              Let's build something meaningful together.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground font-body">
              Ready to bring your vision to life? I'd love to hear about your project.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 mt-8 px-8 py-4 bg-foreground text-background font-heading font-semibold text-sm tracking-wide rounded-xl hover:bg-silver transition-all duration-300 hover:shadow-glow"
            >
              Contact Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
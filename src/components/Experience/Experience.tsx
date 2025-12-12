import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    id: 1,
    title: "Freelance Web Developer",
    type: "Freelance",
    description: "Building custom websites and web applications for clients worldwide, focusing on React and Next.js solutions.",
    date: "2022 - Present",
    tools: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    type: "Freelance",
    description: "Creating user-centered designs and prototypes for startups and established businesses.",
    date: "2021 - Present",
    tools: ["Figma", "Adobe XD", "Prototyping"],
  },
  {
    id: 3,
    title: "E-Commerce Project",
    type: "Personal Project",
    description: "Developed a full-stack e-commerce platform with payment integration and inventory management.",
    date: "2023",
    tools: ["Next.js", "Stripe", "Supabase"],
  },
  {
    id: 4,
    title: "Brand Identity Projects",
    type: "Design Work",
    description: "Designed complete brand identities including logos, color systems, and brand guidelines.",
    date: "2022 - 2023",
    tools: ["Figma", "Illustrator", "Brand Strategy"],
  },
  {
    id: 5,
    title: "SaaS Dashboard Design",
    type: "UI/UX Work",
    description: "Designed comprehensive analytics dashboards with focus on data visualization and user experience.",
    date: "2023",
    tools: ["Figma", "Design Systems", "User Research"],
  },
  {
    id: 6,
    title: "Landing Page Specialist",
    type: "Web Development",
    description: "Created high-converting landing pages for various clients using modern web technologies.",
    date: "2021 - Present",
    tools: ["HTML/CSS", "JavaScript", "Animation"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative section-spacing overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal/50" />
      <div className="absolute inset-0 geometric-pattern opacity-20" />

      <div className="container relative z-10 px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-sm font-body text-muted-foreground tracking-widest uppercase">
              Journey
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 gradient-text">
              Experience
            </h2>
            <p className="mt-6 text-muted-foreground font-body leading-relaxed">
              A collection of my professional journey, including freelance work, 
              personal projects, and design experiences that have shaped my skills.
            </p>
          </motion.div>

          {/* Right - Timeline */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-silver/30 via-silver/10 to-transparent" />

              {/* Timeline items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-8 lg:pl-20"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 lg:left-8 top-2 w-2 h-2 -translate-x-1/2 bg-silver rounded-full" />
                    <div className="absolute left-0 lg:left-8 top-2 w-4 h-4 -translate-x-1/2 bg-silver/20 rounded-full animate-glow-pulse" />

                    {/* Content */}
                    <div className="group p-6 bg-card/30 border border-border/30 rounded-xl hover:border-silver/20 hover:bg-card/50 transition-all duration-500">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="px-3 py-1 text-xs font-body bg-secondary/50 border border-border/30 rounded-full text-muted-foreground">
                          {exp.type}
                        </span>
                        <span className="text-xs text-muted-foreground font-body">
                          {exp.date}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-body text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      {/* Tools */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

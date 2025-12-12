import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Wrench, Users, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "UI/UX",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research", "Design Systems", "Responsive Design"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "VS Code", "Node.js", "Vercel", "Supabase", "Lovable AI", "ChatGPT", "Notion"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Communication", "Problem Solving", "Team Collaboration", "Time Management", "Attention to Detail"],
  },
  {
    title: "Other",
    icon: Sparkles,
    skills: ["Copywriting", "Brand Strategy", "Prompt Engineering", "SEO Basics", "API Integration"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative section-spacing overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 geometric-pattern opacity-30" />

      <div className="container relative z-10 px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body text-muted-foreground tracking-widest uppercase">
            Expertise
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 gradient-text">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skills grid with vertical dividers */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Vertical divider */}
                {index !== 0 && (
                  <div className="hidden lg:block absolute left-0 top-0 bottom-0 vertical-line" />
                )}
                
                <div className="p-8 hover:bg-card/30 transition-all duration-500">
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-3 bg-secondary/50 border border-border/30 rounded-xl group-hover:border-silver/20 transition-all duration-300">
                    <category.icon className="w-6 h-6 text-silver" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                    {category.title}
                  </h3>

                  {/* Skills list */}
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

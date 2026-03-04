import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Booking Platform",
    category: "Web Development",
    description: "A modern booking solution with seamless checkout experience and real-time customer management.",
    link: "https://cmac-barbershop.vercel.app/",
    img: "/images/booking.png",
  },
  {
    id: 3,
    title: "Event Branding Designs",
    category: "Design",
    description: "Complete brand identity design including color palette and visual guidelines.",
    link: "https://dribbble.com/shots/26395010-Traditional-Event-In-Addis-Ababa-Ashenda-Design?utm_source=Clipboard_Shot&utm_campaign=henok-getachew&utm_content=Traditional%20Event%20In%20Addis%20Ababa%20%22Ashenda%22%20Design.&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=henok-getachew&utm_content=Traditional%20Event%20In%20Addis%20Ababa%20%22Ashenda%22%20Design.&utm_medium=Social_Share",
    img: "/images/event.png",
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Web Design",
    description: "portfolio showcasing creative work with smooth animations and interactions.",
    link: "https://henokgprotfolio.netlify.app/",
    img: "/images/portfolio.png",
  },
  {
    id: 5,
    title: "Website and Mobile App UI",
    category: "UI/UX Design",
    description: "Intuitive mobile application interface design focused on user experience and accessibility.",
    link: "https://www.figma.com/design/8qL2kgNcPiSIiThc28yQaS/Henok-s-Portfolio?node-id=0-1&t=NXD5Z0Z5ZwQGKNp7-1",
    img: "/images/uiux.png",
  },
  {
    id: 6,
    title: "Event designs",
    category: "Graphics Design",
    description: "Creative graphic designs including vibrant banners and eye-catching flyers for the Ashenda event",
    link: "https://dribbble.com/shots/26395010-Traditional-Event-In-Addis-Ababa-Ashenda-Design?utm_source=Clipboard_Shot&utm_campaign=henok-getachew&utm_content=Traditional%20Event%20In%20Addis%20Ababa%20%22Ashenda%22%20Design.&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=henok-getachew&utm_content=Traditional%20Event%20In%20Addis%20Ababa%20%22Ashenda%22%20Design.&utm_medium=Social_Share",
    img: "/images/Graphics.png",
  },
   {
    id: 7,
    title: "T-Shirt Mockup Designs",
    category: "Graphics Design",
    description: "Nevu T-shirt mockup sleek compression gym sweater: breathable, moisture-wicking fabric, targeted mesh, and a subtle Nevu wordmark.",
    link: "https://dribbble.com/shots/27025027-Nevu-T-shirt-Mockups?new_shot_upload=true&utm_source=Clipboard_Shot&utm_campaign=henok-getachew&utm_content=Nevu%20T-shirt%20Mockups&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=henok-getachew&utm_content=Nevu%20T-shirt%20Mockups&utm_medium=Social_Share",
    img: "/images/tshirt1.png",
  },
     {
    id: 8,
    title: "Attendance Managment System",
    category: "System Development",
      description: "Attendance Management System simple, owner-focused web app to easily manage employees, track attendance and control access via an intuitive dashboard.",
    link: "https://owner-dashboard-delta.vercel.app",
    img: "/images/cmac.png",
  },
    {
    id: 9,
    title: "Staff QR Code scanner",
    category: "System Development",
      description: "Staff QR Code Scanner mobile friendly web scanner integrated with the Attendance Management System staff scan daily QR codes to record attendance quickly and easily.",
    link: "https://staff-scanning-system.vercel.app",
    img: "/images/staffscanner.png",
  },
    {
    id: 10,
    title: "Stock managment web app",
    category: "System Development",
      description: "This a web app dedicated to manage the current stock in a company that works smoothly and not complicated to have access and this is private because of the company privacy.",
    link: "https://boost-stock-manager.vercel.app",
    img: "/images/Boost-stock.png",
  },
  {
    id: 11,
    title: "Store item managing web app",
    category: "Full Stack developer",
      description: "This a web app dedicated to manage the current tech items in a store that works smoothly and not complicated to have access and this is private because of the company privacy. And simplify a huge problem for most companies.",
    link: "http://tech-stock-one.vercel.app",
    img: "/images/Toe-store.png",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" ref={ref} className="relative section-spacing overflow-hidden">
      {/* Background */}


      <div className="container relative z-10 px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body text-muted-foreground tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 gradient-text">
            Selected Projects
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >

              {/* Project image */}
            <img
              src={project.img}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
              {/* Background placeholder */}
               <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 geometric-pattern-alt opacity-50" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top */}
                <div className="flex justify-between items-start">
                  <span className="text-xs font-body text-muted-foreground tracking-wider uppercase">
                    {project.category}
                  </span>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={hoveredId === project.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="p-2 bg-foreground rounded-full"
                  >
                    <ArrowUpRight className="w-4 h-4 text-background" />
                  </motion.div>
                </div>

                {/* Bottom */}
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={hoveredId === project.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm font-body text-muted-foreground"
                  >
                    {project.description}
                  </motion.p>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={hoveredId === project.id ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="inline-block mt-4 text-sm font-body text-foreground"
                  >
                    View Project →
                  </motion.span>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-silver/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Henok8G", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/henok-getachew-zerihun/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/HakiChang17258", label: "Twitter" },
  { icon: Dribbble, href: "https://dribbble.com/henok-getachew", label: "Dribbble" },
];

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-obsidian" />
      <div className="absolute inset-0 geometric-pattern-alt opacity-20" />
      
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver/20 to-transparent" />

      <div className="container relative z-10 px-6 lg:px-12">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo/Name */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-bold gradient-text"
          >
            Henok Getachew
          </motion.h3>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground font-body max-w-md"
          >
            Creating digital experiences that inspire, engage and leave lasting impressions.
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-3 border border-border/30 rounded-lg hover:border-silver/30 hover:bg-card/30 transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-silver/20 to-transparent" />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground font-body"
          >
            © {new Date().getFullYear()} Henok Getachew. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

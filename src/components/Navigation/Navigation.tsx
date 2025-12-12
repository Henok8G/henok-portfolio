import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(8, 8, 8, 0)", "rgba(8, 8, 8, 0.95)"]
  );

  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.05)"]
  );

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (value) => {
      setHasScrolled(value > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      <motion.header
        style={{ backgroundColor, borderBottomColor: borderColor }}
        className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
      >
        <nav className="container px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading text-xl font-bold gradient-text"
            >
              HG
            </motion.a>

            {/* Desktop nav */}
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex items-center gap-8"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>

            {/* CTA button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:inline-block px-6 py-2.5 bg-foreground text-background text-sm font-heading font-semibold rounded-lg hover:bg-silver transition-all duration-300"
            >
              Hire Me
            </motion.a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-lg" />
        <nav className="relative h-full flex flex-col items-center justify-center">
          <ul className="space-y-8 text-center">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-heading font-semibold text-foreground hover:gradient-text transition-all duration-300"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.a
            href="#contact"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="mt-12 px-8 py-4 bg-foreground text-background font-heading font-semibold rounded-lg"
          >
            Hire Me
          </motion.a>
        </nav>
      </motion.div>
    </>
  );
};

export default Navigation;

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useRef } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme, isTransitioning } = useTheme();
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (!btnRef.current || isTransitioning) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    toggleTheme(x, y);
  };

  return (
    <motion.button
      ref={btnRef}
      onClick={handleClick}
      className="relative w-11 h-11 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm flex items-center justify-center overflow-hidden hover:border-silver/40 transition-colors duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {/* Glow ring on hover */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-silver/10 via-silver/20 to-silver/10" />

      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Sun className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Moon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Particle burst on click */}
      {isTransitioning && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-silver"
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                x: Math.cos((i * 60 * Math.PI) / 180) * 30,
                y: Math.sin((i * 60 * Math.PI) / 180) * 30,
                scale: 0,
                opacity: 0,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ))}
        </>
      )}
    </motion.button>
  );
};

export default ThemeToggle;

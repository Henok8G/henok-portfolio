import { createContext, useContext, useState, useCallback, useRef, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (x: number, y: number) => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const toggleTheme = useCallback((x: number, y: number) => {
    if (isTransitioning) return;

    const newTheme = theme === "dark" ? "light" : "dark";
    setIsTransitioning(true);

    // Calculate the max distance from click point to any corner
    const w = window.innerWidth;
    const h = window.innerHeight;
    const maxDist = Math.sqrt(
      Math.max(x, w - x) ** 2 + Math.max(y, h - y) ** 2
    );

    // Create overlay
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      z-index: 1;
      pointer-events: none;
      background: ${newTheme === "light" ? "hsl(45, 10%, 95%)" : "hsl(0, 0%, 3%)"};
      clip-path: circle(0px at ${x}px ${y}px);
      transition: clip-path 1.2s cubic-bezier(0.25, 0.1, 0.25, 1);
    `;
    document.body.appendChild(overlay);

    // Trigger the expansion
    requestAnimationFrame(() => {
      overlay.style.clipPath = `circle(${maxDist}px at ${x}px ${y}px)`;
    });

    // Switch theme midway through animation
    setTimeout(() => {
      document.documentElement.classList.toggle("light", newTheme === "light");
      setTheme(newTheme);
    }, 600);

    // Remove overlay after animation completes
    setTimeout(() => {
      overlay.remove();
      setIsTransitioning(false);
    }, 1300);
  }, [theme, isTransitioning]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

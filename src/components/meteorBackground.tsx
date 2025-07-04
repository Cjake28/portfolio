import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";

interface MeteorProps {
  number?: number;
  className?: string;
}

export const Meteors = ({ number = 20, className }: MeteorProps) => {
  const [isDarkMode, setIsDarkMode] = useState(
    !document.documentElement.classList.contains("light")
  );

  useEffect(() => {
    const html = document.documentElement;

    const observer = new MutationObserver(() => {
      setIsDarkMode(!html.classList.contains("light"));
    });

    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  if (!isDarkMode) return null;

  const meteors = new Array(number).fill(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative w-full h-full"
    >
      {meteors.map((_, idx) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 10 + 1;
        const duration = Math.random() * 7 + 9;

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-purple-500 shadow-[0_0_0_2px_#da8bf710]",
              "before:absolute before:top-1/2 before:h-[2px] before:w-[60px] before:-translate-y-1/2 before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className
            )}
            style={{
              top: "-40px",
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};

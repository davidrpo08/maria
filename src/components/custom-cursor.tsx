"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50 });
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const addHover = () => {
      document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    window.addEventListener("mousemove", move);
    const observer = new MutationObserver(addHover);
    observer.observe(document.body, { childList: true, subtree: true });
    addHover();

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hovered ? 0 : 1 }}
          transition={{ duration: 0.15 }}
          className="h-2 w-2 rounded-full bg-[#0a0a0a]"
        />
      </motion.div>

      <motion.div
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            scale: hovered ? 2.5 : 1,
            opacity: hovered ? 0.5 : 1,
            backgroundColor: hovered ? "rgba(10,10,10,0.08)" : "rgba(10,10,10,0)",
          }}
          transition={{ duration: 0.25 }}
          className="h-9 w-9 rounded-full border border-[#0a0a0a]/30"
        />
      </motion.div>
    </>
  );
}

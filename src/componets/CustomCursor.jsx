import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = ({ cursorText, cursorVariant }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports hover
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  const isBadge = cursorVariant === "badge" || Boolean(cursorText);
  const isPointer = cursorVariant === "pointer";

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isBadge ? 1 : isPointer ? 1.4 : 1,
        width: isBadge ? 88 : isPointer ? 44 : 20,
        height: isBadge ? 88 : isPointer ? 44 : 20,
        backgroundColor: isBadge
          ? "#CDEA68"
          : isPointer
          ? "rgba(255, 255, 255, 0.15)"
          : "#FFFFFF",
      }}
      transition={{ type: "spring", damping: 22, stiffness: 300, mass: 0.6 }}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center mix-blend-difference select-none overflow-hidden ${
        isPointer ? "border border-white/40" : ""
      }`}
    >
      {isBadge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="text-black font-['Founders_Grotesk_X-Condensed'] text-xl font-bold tracking-wider uppercase select-none"
        >
          {cursorText || "VIEW"}
        </motion.span>
      )}
    </motion.div>
  );
};

import React from "react";
import { motion } from "framer-motion";

export const Marquee = ({ onCursorChange }) => {
  return (
    <section
      className="w-full bg-[#004D43] py-16 sm:py-24 rounded-tl-3xl rounded-tr-3xl overflow-hidden select-none"
      onMouseEnter={() => onCursorChange?.("pointer")}
      onMouseLeave={() => onCursorChange?.("default")}
    >
      <div className="border-t border-b border-emerald-300/30 flex whitespace-nowrap overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 14,
          }}
        >
          {/* Duplicated phrases for seamless, gap-free infinite scrolling */}
          {[1, 2, 3, 4].map((index) => (
            <h1
              key={index}
              className="text-[20vw] sm:text-[18vw] leading-[0.82] font-['Founders_Grotesk_X-Condensed'] pr-12 pt-2 uppercase font-extrabold text-white tracking-tight flex items-center"
            >
              We Are Ochi
              <span className="inline-block w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#CDEA68] ml-12" />
            </h1>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

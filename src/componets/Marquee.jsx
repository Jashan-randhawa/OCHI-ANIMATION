import React from "react";
import { motion } from "framer-motion";

export const Marquee = ({ onCursorChange }) => {
  return (
    <div
      className="w-full py-16 sm:py-24 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] overflow-hidden select-none"
      onMouseEnter={() => onCursorChange?.("pointer")}
      onMouseLeave={() => onCursorChange?.("default")}
    >
      <div className="text border-t-2 border-b-2 border-zinc-300/80 flex whitespace-nowrap overflow-hidden py-2 sm:py-4">
        <motion.div
          className="flex whitespace-nowrap flex-shrink-0"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 9,
          }}
        >
          <h1 className="text-[25vw] sm:text-[21vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase font-bold pr-16 sm:pr-24 -mb-[3vw] -mt-[1.5vw] tracking-tighter text-white">
            We Are Ochi
          </h1>
          <h1 className="text-[25vw] sm:text-[21vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase font-bold pr-16 sm:pr-24 -mb-[3vw] -mt-[1.5vw] tracking-tighter text-white">
            We Are Ochi
          </h1>
        </motion.div>

        <motion.div
          className="flex whitespace-nowrap flex-shrink-0"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 9,
          }}
        >
          <h1 className="text-[25vw] sm:text-[21vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase font-bold pr-16 sm:pr-24 -mb-[3vw] -mt-[1.5vw] tracking-tighter text-white">
            We Are Ochi
          </h1>
          <h1 className="text-[25vw] sm:text-[21vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase font-bold pr-16 sm:pr-24 -mb-[3vw] -mt-[1.5vw] tracking-tighter text-white">
            We Are Ochi
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

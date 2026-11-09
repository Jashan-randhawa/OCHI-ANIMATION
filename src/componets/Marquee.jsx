import React from "react";
import { motion } from "framer-motion";

export const Marquee = ({ onCursorChange }) => {
  return (
    <div
      className="w-full py-16 sm:py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] overflow-hidden select-none"
      onMouseEnter={() => onCursorChange?.("pointer")}
      onMouseLeave={() => onCursorChange?.("default")}
    >
      {/* Refined 1px border with generous breathing room and no clipping */}
      <div className="border-t border-b border-zinc-400/40 py-4 sm:py-6 flex whitespace-nowrap overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap flex-shrink-0 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 16,
          }}
        >
          {/* 4 identical items: translating 0% to -50% creates an infinite loop with zero collision */}
          <h1 className="text-[16vw] sm:text-[14vw] lg:text-[12vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase font-bold tracking-normal text-white pr-12 sm:pr-20">
            We Are Ochi
          </h1>
          <h1 className="text-[16vw] sm:text-[14vw] lg:text-[12vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase font-bold tracking-normal text-white pr-12 sm:pr-20">
            We Are Ochi
          </h1>
          <h1 className="text-[16vw] sm:text-[14vw] lg:text-[12vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase font-bold tracking-normal text-white pr-12 sm:pr-20">
            We Are Ochi
          </h1>
          <h1 className="text-[16vw] sm:text-[14vw] lg:text-[12vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase font-bold tracking-normal text-white pr-12 sm:pr-20">
            We Are Ochi
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

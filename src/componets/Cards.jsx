import React from "react";
import { motion } from "framer-motion";

export const Cards = () => {
  return (
    <section className="w-full py-20 px-6 sm:px-12 md:px-16 lg:px-20 bg-zinc-900 font-['Neue_Montreal']">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 w-full">
        {/* Left Big Card */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-6 h-[340px] sm:h-[420px] rounded-2xl bg-[#004D43] flex flex-col items-center justify-center relative p-8 shadow-xl group border border-emerald-900/40"
        >
          <img
            className="w-32 sm:w-40 transition-transform duration-500 group-hover:scale-110"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="Ochi Logo"
          />
          <button className="absolute px-4 sm:px-5 py-2 border border-[#CDEA68] text-[#CDEA68] rounded-full left-6 sm:left-8 bottom-6 sm:bottom-8 text-xs tracking-wider uppercase font-light group-hover:bg-[#CDEA68] group-hover:text-black transition-colors">
            &copy; 2019–2026
          </button>
        </motion.div>

        {/* Right Card 1 (Clutch) */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-3 h-[340px] sm:h-[420px] rounded-2xl bg-[#192826] flex flex-col items-center justify-center relative p-8 shadow-xl group border border-zinc-800"
        >
          <img
            className="w-28 sm:w-36 transition-transform duration-500 group-hover:scale-110"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="Clutch Rating"
          />
          <button className="absolute px-3 sm:px-4 py-2 border border-zinc-400 text-zinc-300 rounded-full left-6 sm:left-8 bottom-6 sm:bottom-8 text-[11px] sm:text-xs tracking-wider uppercase font-light group-hover:bg-white group-hover:text-black group-hover:border-white transition-colors">
            Rating 5.0 on Clutch
          </button>
        </motion.div>

        {/* Right Card 2 (Bootcamp) */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-3 h-[340px] sm:h-[420px] rounded-2xl bg-[#192826] flex flex-col items-center justify-center relative p-8 shadow-xl group border border-zinc-800"
        >
          <img
            className="w-24 sm:w-32 transition-transform duration-500 group-hover:scale-110"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="Business Bootcamp Alumni"
          />
          <button className="absolute px-3 sm:px-4 py-2 border border-zinc-400 text-zinc-300 rounded-full left-6 sm:left-8 bottom-6 sm:bottom-8 text-[11px] sm:text-xs tracking-wider uppercase font-light group-hover:bg-white group-hover:text-black group-hover:border-white transition-colors">
            Bootcamp Alumni
          </button>
        </motion.div>
      </div>
    </section>
  );
};

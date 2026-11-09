import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

export const Landingpage = () => {
  return (
    <section className="relative w-full min-h-screen bg-zinc-900 pt-28 sm:pt-36 lg:pt-40 flex flex-col justify-between overflow-hidden">
      {/* Background ambient subtle gradient */}
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-emerald-950/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Title Structure */}
      <div className="textstructure px-6 sm:px-12 md:px-16 lg:px-20 z-10">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker overflow-hidden py-0.5">
              <div className="w-fit flex items-center flex-wrap sm:flex-nowrap">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "clamp(4.5rem, 8.5vw, 9rem)", opacity: 1 }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 1.1,
                      delay: 0.2,
                    }}
                    className="mr-3 sm:mr-4 rounded-lg overflow-hidden h-[clamp(2.5rem, 5vw, 5.2rem)] bg-zinc-800 shadow-2xl relative flex-shrink-0 group"
                  >
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=80";
                      }}
                      className="w-full h-full object-cover object-center"
                      alt="Eye opening work showcase"
                    />
                  </motion.div>
                )}
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 0.9,
                    delay: index * 0.12,
                  }}
                  className="uppercase text-[13vw] sm:text-[10vw] lg:text-[7.5vw] font-['Founders_Grotesk_X-Condensed'] leading-[0.95] tracking-normal font-extrabold text-zinc-100 select-none pb-1"
                >
                  {item}
                </motion.h1>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Subtitle / IPO Bar */}
      <div className="border-t border-zinc-800/80 mt-16 sm:mt-24 lg:mt-28 py-6 sm:py-8 px-6 sm:px-12 md:px-16 lg:px-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 font-['Neue_Montreal'] z-10">
        <p className="font-light text-sm sm:text-base text-zinc-400 tracking-wide max-w-sm">
          For public and private companies
        </p>

        <p className="font-light text-sm sm:text-base text-zinc-400 tracking-wide max-w-sm">
          From first pitch to IPO presentation
        </p>

        {/* Magnetic Interactive CTA Button */}
        <div className="start flex items-center gap-3 group cursor-pointer">
          <div className="relative overflow-hidden px-6 py-2.5 border border-zinc-500/80 rounded-full font-light text-xs sm:text-sm uppercase tracking-wider text-zinc-200 transition-colors duration-500 group-hover:border-white">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black font-medium">
              Start The Project
            </span>
            {/* Liquid Fill Bubble */}
            <span className="absolute inset-0 bg-[#CDEA68] -translate-y-full rounded-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
          </div>

          {/* Interactive Arrow Button */}
          <div className="relative overflow-hidden h-10 w-10 border border-zinc-500/80 rounded-full flex items-center justify-center transition-colors duration-500 group-hover:border-white group-hover:bg-[#CDEA68]">
            <motion.div className="relative w-full h-full flex items-center justify-center text-zinc-200 group-hover:text-black transition-colors">
              <FaArrowUpLong className="rotate-45 text-sm transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4" />
              <FaArrowUpLong className="rotate-45 text-sm absolute -translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

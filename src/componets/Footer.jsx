import React, { useEffect, useState, useRef } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

export const Footer = () => {
  const [eyeRotate, setEyeRotate] = useState(0);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      setEyeRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    { name: "Instagram", url: "#" },
    { name: "Behance", url: "#" },
    { name: "Facebook", url: "#" },
    { name: "LinkedIn", url: "#" },
  ];

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="w-full min-h-screen p-6 sm:p-12 md:px-16 lg:px-20 py-16 sm:py-24 bg-zinc-950 flex flex-col justify-between font-['Founders_Grotesk_X-Condensed'] border-t border-zinc-800/80 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 w-full">
        {/* Left Column: Big Eye-Opening Title */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[16vw] sm:text-[13vw] lg:text-[8.5vw] font-bold uppercase leading-[0.92] tracking-normal text-zinc-100 block"
            >
              Eye-
            </motion.h1>

            <motion.h1
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[16vw] sm:text-[13vw] lg:text-[8.5vw] font-bold uppercase leading-[0.92] tracking-normal text-zinc-100 block mt-1 sm:mt-2"
            >
              Opening
            </motion.h1>
          </div>

          {/* Bottom Left Wordmark + Interactive Mini Eyes */}
          <div className="mt-12 lg:mt-20 flex items-center gap-6">
            <span className="text-3xl sm:text-4xl font-['Neue_Montreal'] font-bold tracking-tight text-zinc-100">
              ochi.
            </span>

            {/* Interactive Footer Mini Eyes Easter Egg */}
            <div className="flex gap-2.5 items-center">
              {[0, 1].map((idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center relative shadow-md"
                >
                  <div className="w-5 h-5 rounded-full bg-zinc-950 relative flex items-center justify-center">
                    <div
                      style={{
                        transform: `translate(-50%, -50%) rotate(${eyeRotate}deg)`,
                      }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-100 ml-0.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Presentations Title + Detailed Links */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-[16vw] sm:text-[13vw] lg:text-[8.5vw] font-bold uppercase leading-[0.92] tracking-normal text-zinc-100 block"
            >
              Presentations
            </motion.h1>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mt-10 sm:mt-16 font-['Neue_Montreal']">
            {/* Social Links */}
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-semibold">
                S:
              </p>
              <div className="flex flex-col gap-2.5">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.url}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-2 text-sm sm:text-base font-light text-zinc-300 hover:text-white transition-colors w-fit"
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#CDEA68] transition-all duration-300 group-hover:w-full" />
                    </span>
                    <FaArrowUpLong className="rotate-45 text-xs opacity-0 group-hover:opacity-100 group-hover:text-[#CDEA68] transition-all" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Locations / Contact */}
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-semibold">
                L:
              </p>
              <address className="not-italic text-sm sm:text-base font-light text-zinc-400 leading-relaxed mb-6">
                202-1965 W 4th Ave<br />
                Vancouver, Canada<br />
                <br />
                30 Chukarina St<br />
                Lviv, Ukraine
              </address>

              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-semibold">
                E:
              </p>
              <a
                href="mailto:hello@ochi.design"
                className="text-sm sm:text-base font-light text-zinc-300 hover:text-[#CDEA68] transition-colors"
              >
                hello@ochi.design
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-zinc-800/80 mt-16 sm:mt-24 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-['Neue_Montreal'] text-xs sm:text-sm text-zinc-500">
        <p>&copy; 2026 Ochi Design. All rights reserved.</p>
        <p className="hover:text-zinc-300 transition-colors cursor-pointer">
          Website by Jashan Randhawa
        </p>
      </div>
    </footer>
  );
};

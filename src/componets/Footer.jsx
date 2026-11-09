import React, { useEffect, useState, useRef } from "react";
import { FaArrowUpLong, FaCheck, FaCopy } from "react-icons/fa6";
import { motion } from "framer-motion";

export const Footer = () => {
  const [eyeRotate, setEyeRotate] = useState(0);
  const [copied, setCopied] = useState(false);
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

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@ochi.design");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const menuLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "Our Work", href: "#our-work" },
    { name: "About Us", href: "#" },
    { name: "Insights", href: "#" },
  ];

  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Behance", url: "https://behance.net" },
    { name: "Facebook", url: "https://facebook.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
  ];

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="w-full min-h-screen p-6 sm:p-12 md:px-16 lg:px-20 py-16 sm:py-24 bg-zinc-950 flex flex-col justify-between font-['Founders_Grotesk_X-Condensed'] border-t border-zinc-800/80 overflow-hidden select-none"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 w-full">
        {/* Left Column: Big Eye-Opening Title & Brand Mark */}
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

        {/* Right Column: Presentations Title + Meaningful Structured Content */}
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

          {/* Meaningful Structured 3-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 font-['Neue_Montreal']">
            {/* Column 1: M: Menu Navigation */}
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 mb-4 font-semibold flex items-center gap-2">
                <span className="text-[#CDEA68]">M:</span> Menu
              </p>
              <div className="flex flex-col gap-2.5">
                {menuLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-2 text-sm sm:text-base font-light text-zinc-300 hover:text-white transition-colors w-fit"
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#CDEA68] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: S: Socials */}
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 mb-4 font-semibold flex items-center gap-2">
                <span className="text-[#CDEA68]">S:</span> Socials
              </p>
              <div className="flex flex-col gap-2.5">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-sm sm:text-base font-light text-zinc-300 hover:text-white transition-colors w-fit"
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#CDEA68] transition-all duration-300 group-hover:w-full" />
                    </span>
                    <FaArrowUpLong className="rotate-45 text-xs opacity-40 group-hover:opacity-100 group-hover:text-[#CDEA68] transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: L: Locations & E: Inquiries */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-4 font-semibold flex items-center gap-2">
                  <span className="text-[#CDEA68]">L:</span> Locations
                </p>
                <div className="text-xs sm:text-sm font-light text-zinc-400 leading-relaxed mb-6 space-y-3">
                  <div>
                    <p className="text-zinc-200 font-normal">Vancouver, Canada</p>
                    <p className="text-zinc-500">202-1965 W 4th Ave</p>
                  </div>
                  <div>
                    <p className="text-zinc-200 font-normal">Lviv, Ukraine</p>
                    <p className="text-zinc-500">30 Chukarina St</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2 font-semibold flex items-center gap-2">
                  <span className="text-[#CDEA68]">E:</span> Inquiries
                </p>
                <button
                  onClick={copyEmail}
                  className="group flex items-center gap-2 text-xs sm:text-sm font-light px-3 py-1.5 rounded-full border border-zinc-700 hover:border-[#CDEA68] bg-zinc-900/60 hover:bg-zinc-800 transition-all text-zinc-200 w-fit cursor-pointer"
                  title="Click to copy email address"
                >
                  <span>hello@ochi.design</span>
                  {copied ? (
                    <FaCheck className="text-[#CDEA68] text-xs" />
                  ) : (
                    <FaCopy className="text-zinc-400 group-hover:text-[#CDEA68] text-xs transition-colors" />
                  )}
                </button>
                {copied && (
                  <span className="text-[11px] text-[#CDEA68] mt-1 block">
                    Copied to clipboard!
                  </span>
                )}
              </div>
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

import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export const Footer = ({ onCursorChange }) => {
  return (
    <footer id="contact" className="w-full min-h-screen p-6 sm:p-12 md:px-16 lg:px-20 py-20 bg-zinc-900 flex flex-col justify-between font-['Founders_Grotesk_X-Condensed'] border-t border-zinc-800">
      <div className="flex flex-col lg:flex-row justify-between gap-12 w-full">
        {/* Left Column: Big Eye-Opening Title */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-[15vw] lg:text-[9vw] font-extrabold uppercase leading-[0.82] tracking-tighter text-zinc-100">
              Eye-
            </h1>
            <h1 className="text-[15vw] lg:text-[9vw] font-extrabold uppercase leading-[0.82] tracking-tighter text-zinc-100">
              Opening
            </h1>
          </div>

          <div className="mt-12 lg:mt-24">
            <span className="text-3xl sm:text-4xl font-['Neue_Montreal'] font-bold tracking-tight text-zinc-100">
              ochi.
            </span>
          </div>
        </div>

        {/* Right Column: Presentations Title + Detailed Links */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <h1 className="text-[15vw] lg:text-[9vw] font-extrabold uppercase leading-[0.82] tracking-tighter text-zinc-100">
            Presentations
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12 sm:mt-16 font-['Neue_Montreal']">
            {/* Socials */}
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-semibold">
                S:
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { name: "Instagram", url: "#" },
                  { name: "Behance", url: "#" },
                  { name: "Facebook", url: "#" },
                  { name: "LinkedIn", url: "#" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    className="group flex items-center gap-2 text-base sm:text-lg font-light text-zinc-300 hover:text-white transition-colors w-fit"
                    onMouseEnter={() => onCursorChange?.("pointer")}
                    onMouseLeave={() => onCursorChange?.("default")}
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                    </span>
                    <FaArrowUpLong className="rotate-45 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Locations / Contact */}
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-semibold">
                L:
              </p>
              <address className="not-italic text-sm sm:text-base font-light text-zinc-300 leading-relaxed">
                202-1965 W 4th Ave<br />
                Vancouver, Canada<br />
                <br />
                30 Chukarina St<br />
                Lviv, Ukraine
              </address>

              <p className="text-xs uppercase tracking-widest text-zinc-500 mt-6 mb-2 font-semibold">
                E:
              </p>
              <a
                href="mailto:hello@ochi.design"
                className="text-sm sm:text-base font-light text-zinc-300 hover:text-[#CDEA68] transition-colors"
                onMouseEnter={() => onCursorChange?.("pointer")}
                onMouseLeave={() => onCursorChange?.("default")}
              >
                hello@ochi.design
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-zinc-800/80 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-['Neue_Montreal'] text-xs sm:text-sm text-zinc-500">
        <p>&copy; 2026 Ochi Design. All rights reserved.</p>
        <p className="hover:text-zinc-300 transition-colors cursor-pointer">
          Website by Jashan Randhawa
        </p>
      </div>
    </footer>
  );
};

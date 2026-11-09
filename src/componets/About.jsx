import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

export const About = ({ onCursorChange }) => {
  return (
    <section className="w-full py-16 sm:py-24 px-6 sm:px-12 md:px-16 lg:px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-zinc-950 font-['Neue_Montreal'] selection:bg-zinc-900 selection:text-white">
      {/* Main Big Statement */}
      <div className="max-w-6xl">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[4vw] font-normal leading-[1.18] tracking-tight">
          Ochi is a <span className="font-semibold underline decoration-2 underline-offset-4">strategic presentation agency</span> for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
      </div>

      {/* Expectation Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-zinc-950/20 mt-16 sm:mt-24 pt-10 text-zinc-900">
        <div className="md:col-span-4">
          <p className="text-base sm:text-lg font-medium">What you can expect:</p>
        </div>

        <div className="md:col-span-5 flex flex-col gap-6 text-sm sm:text-base font-light leading-relaxed">
          <p>
            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one person or a stadium.
          </p>
          <p>
            We believe the mix of strategy, storytelling, and award-winning design is what makes your message resonate and stay memorable long after the meeting ends.
          </p>
        </div>

        <div className="md:col-span-3 flex flex-col gap-2 font-normal text-sm sm:text-base">
          <p className="font-semibold mb-2">Connect:</p>
          {["Instagram", "Behance", "Facebook", "LinkedIn"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="hover:underline transition-all w-fit"
              onMouseEnter={() => onCursorChange?.("pointer")}
              onMouseLeave={() => onCursorChange?.("default")}
            >
              {platform}
            </a>
          ))}
        </div>
      </div>

      {/* Approach and Image Section */}
      <div className="flex flex-col lg:flex-row gap-10 w-full border-t border-zinc-950/20 pt-12 mt-16 sm:mt-20">
        {/* Left Column: Heading + CTA Button */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between items-start gap-8">
          <div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight">
              Our approach:
            </h2>
            <p className="mt-4 text-zinc-800 text-base sm:text-lg max-w-md font-light leading-relaxed">
              From discovery sessions to hyper-polished keynotes, we craft narratives that inspire action and close rounds.
            </p>
          </div>

          <button
            className="group relative overflow-hidden flex items-center gap-6 px-8 py-5 bg-zinc-900 text-white uppercase rounded-full text-xs sm:text-sm tracking-wider font-medium cursor-pointer transition-colors"
            onMouseEnter={() => onCursorChange?.("pointer")}
            onMouseLeave={() => onCursorChange?.("default")}
          >
            <span className="relative z-10 group-hover:text-zinc-950 transition-colors duration-400">
              Read More
            </span>
            <div className="relative z-10 w-2.5 h-2.5 bg-zinc-100 rounded-full group-hover:bg-zinc-950 transition-colors duration-400 group-hover:scale-150" />
            
            {/* Hover Expansion Bubble */}
            <span className="absolute inset-0 bg-white scale-y-0 origin-bottom transition-transform duration-400 ease-out group-hover:scale-y-100" />
          </button>
        </div>

        {/* Right Column: Featured Image with Hover Scale */}
        <div className="w-full lg:w-1/2 h-[350px] sm:h-[480px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl relative group bg-[#718721]">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80";
            }}
            className="w-full h-full object-cover"
            alt="Ochi Team Approach"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

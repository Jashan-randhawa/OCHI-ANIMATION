import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

export const About = () => {
  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "Behance", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];

  const highlights = [
    { number: "100+", label: "Pitches Delivered" },
    { number: "$500M+", label: "Capital Raised" },
    { number: "98%", label: "Client Win Rate" },
  ];

  return (
    <section className="w-full py-16 sm:py-24 px-6 sm:px-12 md:px-16 lg:px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-zinc-950 font-['Neue_Montreal'] selection:bg-zinc-900 selection:text-white overflow-hidden">
      {/* Main Big Statement with smooth scroll reveal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl"
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[4vw] font-normal leading-[1.18] tracking-tight">
          Ochi is a{" "}
          <span className="font-semibold underline decoration-2 underline-offset-4 decoration-zinc-950/40 hover:decoration-zinc-950 transition-colors">
            strategic presentation agency
          </span>{" "}
          for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
      </motion.div>

      {/* Expectation Breakdown Grid */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 border-t border-zinc-950/20 mt-16 sm:mt-24 pt-10 text-zinc-900"
      >
        {/* Left Column: Heading + Interactive Rotating Stamp Badge */}
        <div className="md:col-span-4 flex flex-col justify-between items-start gap-8">
          <div>
            <p className="text-base sm:text-lg font-medium text-zinc-950">
              What you can expect:
            </p>
          </div>

          {/* Interactive Rotating Agency Stamp Widget */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-zinc-950/30 flex items-center justify-center cursor-pointer group shadow-sm bg-zinc-950/[0.04]"
          >
            {/* Spinning Circular Typography */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full p-1 fill-zinc-950">
                <path
                  id="textCircle"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[10px] uppercase tracking-[0.22em] font-semibold">
                  <textPath href="#textCircle">
                    • STRATEGY • DESIGN • IMPACT • OCHI
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Inner Center Star/Arrow */}
            <div className="w-8 h-8 rounded-full bg-zinc-950 text-[#CDEA68] flex items-center justify-center group-hover:bg-[#004D43] transition-colors shadow-md">
              <FaArrowUpLong className="rotate-45 text-xs group-hover:scale-125 transition-transform" />
            </div>
          </motion.div>
        </div>

        {/* Middle Column: Detailed Storytelling Paragraphs with Interactive Cards */}
        <div className="md:col-span-5 flex flex-col gap-6 text-sm sm:text-base font-light leading-relaxed">
          <motion.div
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="p-5 rounded-2xl bg-zinc-950/[0.03] border border-zinc-950/10 hover:border-zinc-950/30 transition-all cursor-default"
          >
            <p className="text-zinc-900 font-normal">
              We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one person or a stadium.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="p-5 rounded-2xl bg-zinc-950/[0.03] border border-zinc-950/10 hover:border-zinc-950/30 transition-all cursor-default"
          >
            <p className="text-zinc-900 font-normal">
              We believe the mix of strategy, storytelling, and award-winning design is what makes your message resonate and stay memorable long after the meeting ends.
            </p>
          </motion.div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col border-l-2 border-zinc-950/30 pl-3 py-1"
              >
                <span className="text-lg sm:text-xl font-bold font-['Founders_Grotesk_X-Condensed'] text-zinc-950">
                  {item.number}
                </span>
                <span className="text-[11px] sm:text-xs text-zinc-800 font-light">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Animated Social Links */}
        <div className="md:col-span-3 flex flex-col gap-3 font-normal text-sm sm:text-base">
          <p className="font-semibold text-zinc-950 mb-1 tracking-wide">Connect:</p>
          {socialLinks.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ x: 4 }}
              className="group flex items-center justify-between py-1.5 border-b border-zinc-950/15 hover:border-zinc-950 transition-colors w-full max-w-[180px] text-zinc-900 font-normal cursor-pointer"
            >
              <span className="relative">
                {item.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-zinc-950 transition-all duration-300 group-hover:w-full" />
              </span>
              <FaArrowUpLong className="rotate-45 text-xs opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Approach and Image Section */}
      <div className="flex flex-col lg:flex-row gap-10 w-full border-t border-zinc-950/20 pt-12 mt-16 sm:mt-20">
        {/* Left Column: Heading + CTA Button */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between items-start gap-8">
          <div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-zinc-950">
              Our approach:
            </h2>
            <p className="mt-4 text-zinc-800 text-base sm:text-lg max-w-md font-light leading-relaxed">
              From discovery sessions to hyper-polished keynotes, we craft narratives that inspire action and close rounds.
            </p>
          </div>

          <button className="group relative overflow-hidden flex items-center gap-6 px-8 py-5 bg-zinc-900 text-white uppercase rounded-full text-xs sm:text-sm tracking-wider font-medium cursor-pointer transition-colors shadow-lg">
            <span className="relative z-10 group-hover:text-zinc-950 transition-colors duration-400 font-semibold">
              Read More
            </span>
            <div className="relative z-10 w-2.5 h-2.5 bg-zinc-100 rounded-full group-hover:bg-zinc-950 transition-colors duration-400 group-hover:scale-150" />
            
            {/* Hover Expansion Bubble */}
            <span className="absolute inset-0 bg-white scale-y-0 origin-bottom transition-transform duration-400 ease-out group-hover:scale-y-100" />
          </button>
        </div>

        {/* Right Column: Featured Image with Hover Scale */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2 h-[350px] sm:h-[480px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl relative group bg-[#718721]"
        >
          <motion.img
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80";
            }}
            className="w-full h-full object-cover"
            alt="Ochi Team Approach"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const projects = [
  {
    id: "fyde",
    title: "FYDE",
    category: "Crypto Presentation",
    image: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
    fallback: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    tags: ["Audit", "Copywriting", "Sales Deck", "Slides Design"],
    position: "left",
  },
  {
    id: "vise",
    title: "VISE",
    category: "Investor Pitch",
    image: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
    fallback: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    tags: ["Agency", "Company Presentation"],
    position: "right",
  },
  {
    id: "trawa",
    title: "TRAWA",
    category: "Energy Transition",
    image: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
    fallback: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
    tags: ["Brand Identity", "Design Research", "Investor Deck"],
    position: "left",
  },
  {
    id: "premium-blend",
    title: "PREMIUM BLEND",
    category: "Brand Story",
    image: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
    fallback: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80",
    tags: ["Branded Template", "Product Launch"],
    position: "right",
  },
];

export const Featured = ({ onCursorChange }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Group projects into pairs of 2
  const projectPairs = [
    [projects[0], projects[1]],
    [projects[2], projects[3]],
  ];

  return (
    <section id="our-work" className="w-full py-20 sm:py-28 bg-zinc-900 font-['Neue_Montreal']">
      {/* Section Header */}
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-20 border-b border-zinc-800 pb-12 sm:pb-16">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-zinc-100">
          Featured projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="px-6 sm:px-12 md:px-16 lg:px-20 mt-12 sm:mt-16 flex flex-col gap-16 sm:gap-24">
        {projectPairs.map((pair, pairIdx) => (
          <div key={pairIdx} className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative">
            {pair.map((project) => {
              const isHovered = hoveredCard === project.id;
              const isLeft = project.position === "left";

              return (
                <div key={project.id} className="relative flex flex-col">
                  {/* Card Title Label */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-100" />
                    <span className="uppercase text-sm sm:text-base tracking-wider font-medium text-zinc-200">
                      {project.title}
                    </span>
                  </div>

                  {/* Card Container */}
                  <div
                    onMouseEnter={() => {
                      setHoveredCard(project.id);
                      onCursorChange?.("badge");
                    }}
                    onMouseLeave={() => {
                      setHoveredCard(null);
                      onCursorChange?.("default");
                    }}
                    className="relative w-full h-[400px] sm:h-[550px] lg:h-[620px] rounded-2xl overflow-hidden cursor-pointer group bg-zinc-800 shadow-xl"
                  >
                    {/* Floating Animated Letters */}
                    <h3
                      className={`absolute hidden lg:flex overflow-hidden text-[#CDEA68] z-30 top-1/2 -translate-y-1/2 text-7xl xl:text-9xl font-extrabold font-['Founders_Grotesk_X-Condensed'] leading-none tracking-tighter pointer-events-none select-none ${
                        isLeft
                          ? "left-full -translate-x-1/2"
                          : "right-full translate-x-1/2"
                      }`}
                    >
                      {project.title.split("").map((letter, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ y: "100%" }}
                          animate={isHovered ? { y: "0%" } : { y: "100%" }}
                          transition={{
                            ease: [0.22, 1, 0.36, 1],
                            duration: 0.45,
                            delay: idx * 0.03,
                          }}
                          className="inline-block"
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </h3>

                    {/* Image with zoom on hover */}
                    <div className="w-full h-full overflow-hidden rounded-2xl">
                      <motion.img
                        animate={{ scale: isHovered ? 1.06 : 1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        src={project.image}
                        onError={(e) => {
                          e.target.src = project.fallback;
                        }}
                        className="w-full h-full object-cover object-center"
                        alt={project.title}
                      />
                    </div>
                  </div>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-2.5 mt-5">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-4 py-1.5 border border-zinc-700/80 rounded-full text-xs uppercase tracking-wider text-zinc-300 font-light hover:border-zinc-400 hover:text-white transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* View All Case Studies Button */}
      <div className="w-full flex justify-center mt-20 sm:mt-28">
        <div
          className="group relative overflow-hidden flex items-center gap-6 px-9 py-5 bg-zinc-100 text-zinc-950 uppercase rounded-full text-xs sm:text-sm tracking-wider font-semibold cursor-pointer transition-colors shadow-2xl"
          onMouseEnter={() => onCursorChange?.("pointer")}
          onMouseLeave={() => onCursorChange?.("default")}
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-400">
            View All Case Studies
          </span>
          <div className="relative z-10 w-2.5 h-2.5 bg-zinc-950 rounded-full group-hover:bg-white transition-colors duration-400 group-hover:scale-150" />
          
          <span className="absolute inset-0 bg-zinc-900 scale-y-0 origin-bottom transition-transform duration-400 ease-out group-hover:scale-y-100" />
        </div>
      </div>
    </section>
  );
};

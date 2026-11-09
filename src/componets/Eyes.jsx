import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export const Eyes = () => {
  const [leftEyePos, setLeftEyePos] = useState({ x: 0, y: 0, rotate: 0 });
  const [rightEyePos, setRightEyePos] = useState({ x: 0, y: 0, rotate: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;

      // Calculate Left Eye vector & offset
      if (leftEyeRef.current) {
        const rect = leftEyeRef.current.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const deltaX = mouseX - eyeCenterX;
        const deltaY = mouseY - eyeCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const angle = Math.atan2(deltaY, deltaX);

        const maxRadius = Math.min(rect.width * 0.18, 28);
        const travel = Math.min(distance * 0.1, maxRadius);

        setLeftEyePos({
          x: Math.cos(angle) * travel,
          y: Math.sin(angle) * travel,
          rotate: (angle * 180) / Math.PI - 180,
        });
      }

      // Calculate Right Eye vector & offset
      if (rightEyeRef.current) {
        const rect = rightEyeRef.current.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const deltaX = mouseX - eyeCenterX;
        const deltaY = mouseY - eyeCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const angle = Math.atan2(deltaY, deltaX);

        const maxRadius = Math.min(rect.width * 0.18, 28);
        const travel = Math.min(distance * 0.1, maxRadius);

        setRightEyePos({
          x: Math.cos(angle) * travel,
          y: Math.sin(angle) * travel,
          rotate: (angle * 180) / Math.PI - 180,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const triggerBlink = () => {
    setIsBlinking(true);
    setTimeout(() => setIsBlinking(false), 200);
  };

  return (
    <section
      onClick={triggerBlink}
      className="eyes w-full h-[60vh] sm:h-[80vh] lg:h-screen overflow-hidden relative cursor-pointer select-none"
    >
      {/* Background Graphic with Vignette */}
      <div
        className="relative w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        {/* Eyes Pair Container */}
        <div className="flex gap-6 sm:gap-10 z-10">
          {/* Left Eyeball */}
          <motion.div
            ref={leftEyeRef}
            animate={{ scaleY: isBlinking ? 0.05 : 1 }}
            transition={{ duration: 0.12 }}
            className="w-[32vw] h-[32vw] max-w-[200px] max-h-[200px] sm:max-w-[230px] sm:max-h-[230px] rounded-full bg-zinc-100 flex items-center justify-center shadow-2xl relative overflow-hidden"
          >
            {/* Pupil (Dark Iris) with 2D Translation */}
            <div
              style={{
                transform: `translate(${leftEyePos.x}px, ${leftEyePos.y}px)`,
                transition: "transform 0.08s ease-out",
              }}
              className="relative w-[65%] h-[65%] rounded-full bg-zinc-950 flex items-center justify-center shadow-inner"
            >
              <span className="text-white font-['Neue_Montreal'] uppercase text-xs sm:text-sm font-medium tracking-widest select-none pointer-events-none">
                Play
              </span>

              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${leftEyePos.rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-8 pointer-events-none"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-zinc-100 shadow-md ml-1" />
              </div>
            </div>
          </motion.div>

          {/* Right Eyeball */}
          <motion.div
            ref={rightEyeRef}
            animate={{ scaleY: isBlinking ? 0.05 : 1 }}
            transition={{ duration: 0.12 }}
            className="w-[32vw] h-[32vw] max-w-[200px] max-h-[200px] sm:max-w-[230px] sm:max-h-[230px] rounded-full bg-zinc-100 flex items-center justify-center shadow-2xl relative overflow-hidden"
          >
            <div
              style={{
                transform: `translate(${rightEyePos.x}px, ${rightEyePos.y}px)`,
                transition: "transform 0.08s ease-out",
              }}
              className="relative w-[65%] h-[65%] rounded-full bg-zinc-950 flex items-center justify-center shadow-inner"
            >
              <span className="text-white font-['Neue_Montreal'] uppercase text-xs sm:text-sm font-medium tracking-widest select-none pointer-events-none">
                Play
              </span>

              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rightEyePos.rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-8 pointer-events-none"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-zinc-100 shadow-md ml-1" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hint banner */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-300 font-['Neue_Montreal'] text-xs sm:text-sm tracking-widest uppercase opacity-70 pointer-events-none">
          Click anywhere to blink
        </div>
      </div>
    </section>
  );
};

import React, { useEffect } from "react";
import Lenis from "lenis";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./componets/Navbar";
import { Landingpage } from "./componets/Landingpage";
import { Marquee } from "./componets/Marquee";
import { About } from "./componets/About";
import { Eyes } from "./componets/Eyes";
import { Featured } from "./componets/featured";
import { Cards } from "./componets/Cards";
import { Footer } from "./componets/Footer";

const App = () => {
  // Initialize unified Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900 overflow-x-hidden relative selection:bg-[#CDEA68] selection:text-zinc-900">
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;

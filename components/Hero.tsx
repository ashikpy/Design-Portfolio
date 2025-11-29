import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, BookOpen, MousePointer2 } from "lucide-react";
import LottieAnimation from "./LottieAnimation";
import boundingBoxAnimation from "../assets/bounding-box-changing.json";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent perspective-1000">
      {/* 1. BACKGROUND GRID - Denser and less noticeable */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-dot"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="#fff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dot)" />
        </svg>
      </div>

      {/* 3. CONTRAST VIGNETTE - Improves readability */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(5,5,5,0.8)_0%,rgba(5,5,5,0)_60%)]" />

      {/* 4. HERO CONTENT */}
      <div className="relative z-20 px-6 md:px-12 text-center flex flex-col items-center justify-center h-full mt-[-5vh]">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative inline-flex group mb-4 md:mb-6"
        >
          <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative px-4 py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full overflow-hidden flex items-center gap-3 shadow-lg shadow-black/50">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono font-medium tracking-widest text-zinc-200 uppercase">
              Portfolio 2024
            </span>
          </div>
        </motion.div>

        {/* Name - CLEAN */}
        <div className="relative mb-2 md:mb-4 group">
          <motion.h1
            initial={{ opacity: 0, y: 20, letterSpacing: "-0.05em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "-0.02em" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[5rem] md:text-[9rem] lg:text-[11rem] leading-[0.85] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-500 relative z-10 drop-shadow-2xl"
          >
            ASHIK D.
          </motion.h1>

          {/* Glow backing for extra contrast */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-black/50 blur-[80px] rounded-full pointer-events-none -z-10" />
        </div>

        {/* Description - Aesthetic & Interactive */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col items-center gap-2 mb-8 max-w-2xl mx-auto px-4 relative z-30"
        >
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 text-lg md:text-xl font-light text-zinc-400 leading-relaxed items-center">
            <span>Sculpting</span>

            {/* Photo Editing Tool Vibe: The "Selection" */}
            <span className="relative group cursor-crosshair inline-flex items-center justify-center px-2 py-0.5 mx-1 transition-all">
              {/* Dashed Border */}
              <span className="absolute inset-0 border border-dashed border-indigo-500/40 rounded-sm group-hover:border-indigo-400 transition-colors" />
              {/* Corner Handles */}
              <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Tooltip Label */}
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] bg-indigo-600 text-white px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity font-mono pointer-events-none translate-y-1 group-hover:translate-y-0 duration-200">
                Select
              </span>

              <span className="relative text-zinc-200 font-medium z-10 group-hover:text-white transition-colors">
                immersive
              </span>
            </span>

            <span>experiences with</span>

            {/* HTML Flair: The "Tag" */}
            <span className="font-mono text-base text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 px-1.5 py-0.5 rounded flex items-center gap-1 hover:bg-emerald-500/10 transition-colors cursor-code select-none group/code relative">
              <span className="opacity-50 group-hover/code:opacity-100 transition-opacity">
                &lt;
              </span>
              precision
              <span className="opacity-50 group-hover/code:opacity-100 transition-opacity">
                /&gt;
              </span>
            </span>
          </div>
        </motion.div>

        {/* Expertise Rails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-8 relative z-20"
        >
          <ExpertiseItem
            icon={<Code2 className="w-4 h-4" />}
            text="Front-end Dev"
            color="group-hover:text-cyan-400"
            delay={0}
          />

          <ExpertiseItem
            icon={<Palette className="w-4 h-4" />}
            text="Designer"
            color="group-hover:text-purple-400"
            delay={0.1}
          />

          <ExpertiseItem
            icon={<BookOpen className="w-4 h-4" />}
            text="Author"
            color="group-hover:text-yellow-400"
            delay={0.2}
          />
        </motion.div>
      </div>
    </div>
  );
};

// --- Sub Components ---

const ExpertiseItem = ({
  icon,
  text,
  color,
  delay,
}: {
  icon: React.ReactNode;
  text: string;
  color: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6 + delay, duration: 0.5 }}
    className="group flex items-center gap-3 px-6 py-3 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-lg hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-default shadow-sm"
  >
    <span className={`text-zinc-500 transition-colors duration-300 ${color}`}>
      {icon}
    </span>
    <span className="font-mono text-xs tracking-wider text-zinc-400 group-hover:text-white transition-colors duration-300 uppercase">
      {text}
    </span>
  </motion.div>
);

export default Hero;

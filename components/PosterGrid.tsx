import React from "react";
import { motion } from "framer-motion";

// Enhanced data for better bento grid distribution
const artworks = [
  {
    id: 1,
    size: "large",
    img: "https://picsum.photos/seed/art1/800/800",
    href: "#",
  },
  {
    id: 2,
    size: "small",
    img: "https://picsum.photos/seed/art2/400/400",
    href: "#",
  },
  {
    id: 3,
    size: "tall",
    img: "https://picsum.photos/seed/art3/400/800",
    href: "#",
  },
  {
    id: 4,
    size: "small",
    img: "https://picsum.photos/seed/art4/400/400",
    href: "#",
  },
  {
    id: 5,
    size: "wide",
    img: "https://picsum.photos/seed/art5/800/400",
    href: "#",
  },
  {
    id: 6,
    size: "small",
    img: "https://picsum.photos/seed/art6/400/400",
    href: "#",
  },
  {
    id: 7,
    size: "large",
    img: "https://picsum.photos/seed/art7/800/800",
    href: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const PosterGrid: React.FC = () => {
  return (
    <div className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Visual <span className="text-zinc-500">Playground</span>
            </h2>
            <p className="text-zinc-400 max-w-xl text-lg leading-relaxed">
              A curated collection of digital explorations. Where structure
              meets chaos and pixels find their purpose.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="h-px w-32 bg-zinc-800 mb-4" />
            <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
              Selected Works 2023-2024
            </p>
          </div>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]"
        >
          {artworks.map((art) => (
            <motion.div
              key={art.id}
              layout
              variants={itemVariants}
              className={`relative group rounded-none ${
                art.size === "large"
                  ? "md:col-span-2 md:row-span-2"
                  : art.size === "tall"
                  ? "md:col-span-1 md:row-span-2"
                  : art.size === "wide"
                  ? "md:col-span-2 md:row-span-1"
                  : "md:col-span-1 md:row-span-1"
              }`}
            >
              <a href={art.href} className="block w-full h-full relative">
                {/* Crosshairs - Preserved exactly as requested */}
                {/* Top Left */}
                <div className="absolute -top-1.5 -left-1.5 z-20 text-zinc-700 group-hover:text-white transition-colors duration-300">
                  <CrosshairIcon />
                </div>
                {/* Top Right */}
                <div className="absolute -top-1.5 -right-1.5 z-20 text-zinc-700 group-hover:text-white transition-colors duration-300">
                  <CrosshairIcon />
                </div>
                {/* Bottom Left */}
                <div className="absolute -bottom-1.5 -left-1.5 z-20 text-zinc-700 group-hover:text-white transition-colors duration-300">
                  <CrosshairIcon />
                </div>
                {/* Bottom Right */}
                <div className="absolute -bottom-1.5 -right-1.5 z-20 text-zinc-700 group-hover:text-white transition-colors duration-300">
                  <CrosshairIcon />
                </div>

                {/* Card Content */}
                <div className="relative w-full h-full z-10 overflow-hidden bg-zinc-900/50 border border-zinc-800/50 group-hover:border-zinc-500/50 transition-colors duration-500">
                  {/* Image with Scale Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.img
                      src={art.img}
                      alt={`Artwork ${art.id}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const CrosshairIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2V22M2 12H22" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default PosterGrid;

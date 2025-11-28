
import React from 'react';
import { motion } from 'framer-motion';

// Using consistent seeds for demo
const artworks = [
  { id: 1, size: 'large', img: 'https://picsum.photos/seed/art1/600/800', title: 'Neon Dreams' },
  { id: 2, size: 'small', img: 'https://picsum.photos/seed/art2/400/400', title: 'Abstract Void' },
  { id: 3, size: 'tall', img: 'https://picsum.photos/seed/art3/400/800', title: 'Cyber Punk' },
  { id: 4, size: 'small', img: 'https://picsum.photos/seed/art4/400/400', title: 'Chromatic' },
  { id: 5, size: 'wide', img: 'https://picsum.photos/seed/art5/800/400', title: 'Typography' },
  { id: 6, size: 'small', img: 'https://picsum.photos/seed/art6/400/400', title: 'Glitch' },
  { id: 7, size: 'large', img: 'https://picsum.photos/seed/art7/600/800', title: 'Fluidity' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const PosterGrid: React.FC = () => {
  return (
    <div className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Visual Playground
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            A collection of posters, 3D explorations, and graphic experiments.
            Where structure meets chaos.
          </p>
        </motion.div>

        {/* Masonry/Bento Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {artworks.map((art, i) => (
            <motion.div
              key={art.id}
              variants={itemVariants}
              whileHover={{ scale: 0.98, filter: "brightness(1.1)" }}
              className={`relative group ${
                art.size === 'large' ? 'col-span-2 row-span-2' :
                art.size === 'tall' ? 'col-span-1 row-span-2' :
                art.size === 'wide' ? 'col-span-2 row-span-1' :
                'col-span-1 row-span-1'
              }`}
            >
              {/* Crosshairs - Positioned exactly at the corners, BEHIND the image (z-0) */}
                {/* Top Left */}
                <div className="absolute -top-1.5 -left-1.5 z-0 text-zinc-600 group-hover:text-indigo-500 transition-colors duration-300">
                    <CrosshairIcon />
                </div>
                {/* Top Right */}
                <div className="absolute -top-1.5 -right-1.5 z-0 text-zinc-600 group-hover:text-indigo-500 transition-colors duration-300">
                    <CrosshairIcon />
                </div>
                {/* Bottom Left */}
                <div className="absolute -bottom-1.5 -left-1.5 z-0 text-zinc-600 group-hover:text-indigo-500 transition-colors duration-300">
                    <CrosshairIcon />
                </div>
                {/* Bottom Right */}
                <div className="absolute -bottom-1.5 -right-1.5 z-0 text-zinc-600 group-hover:text-indigo-500 transition-colors duration-300">
                    <CrosshairIcon />
                </div>

              {/* Inner Wrapper - Handles Masking and Border - z-10 */}
              <div className="relative w-full h-full z-10 overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                  <img 
                    src={art.img} 
                    alt={art.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  
                  {/* Overlay Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="font-display text-lg font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {art.title}
                    </span>
                    <span className="text-xs text-zinc-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      Poster Series 0{i+1}
                    </span>
                  </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const CrosshairIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2V22M2 12H22" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export default PosterGrid;

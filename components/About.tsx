import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row gap-12 items-start"
      >
        <div className="w-full md:w-1/3">
          <h2 className="font-display text-2xl font-bold mb-6 text-zinc-200">
            The Designer
          </h2>
          <div className="w-full aspect-square rounded-full overflow-hidden border-2 border-zinc-800 relative">
            <img
              src="https://picsum.photos/seed/ash/400/400"
              alt="Ashik aka Ash"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-indigo-500 mix-blend-color opacity-20"></div>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <p className="text-2xl md:text-3xl leading-relaxed font-light text-zinc-300 mb-8">
            I'm <span className="text-white font-medium">Ash</span> a digital
            designer obsessed with the space between functionality and art.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            With over 5 years of experience, I don't just move pixels; I
            construct narratives. My work creates emotional connections through
            interaction, motion, and visual fidelity. I believe the best design
            feels inevitable.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">
                Expertise
              </h3>
              <ul className="space-y-2 text-zinc-300">
                <li>Art Direction</li>
                <li>Product Design (UI/UX)</li>
                <li>Motion Graphics</li>
                <li>3D Visualization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">
                Tools
              </h3>
              <ul className="space-y-2 text-zinc-300">
                <li>Figma & Spline</li>
                <li>Adobe Creative Suite</li>
                <li>React & Tailwind</li>
                <li>Blender</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

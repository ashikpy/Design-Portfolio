import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import PosterGrid from './components/PosterGrid';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a high-end loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 relative">
      {/* Global Background Gradients - Visible through grain */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] bg-indigo-900/10 rounded-full blur-[150px] animate-blob-slow" />
        <div className="absolute top-[40%] right-[-20%] w-[70vw] h-[70vw] bg-purple-900/10 rounded-full blur-[150px] animate-blob-slow animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[150px] animate-blob-slow animation-delay-4000" />
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">
                ASHIK D.
              </h1>
              <motion.div 
                className="mt-4 h-[1px] bg-neutral-800"
                initial={{ width: 0 }}
                animate={{ width: 100 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <section id="hero">
              <Hero />
            </section>
            <section id="work">
              <Work />
            </section>
            <section id="posters">
              <PosterGrid />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
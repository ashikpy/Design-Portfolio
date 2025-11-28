import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Layers, LayoutGrid, User, Mail } from 'lucide-react';

const navItems = [
  { name: 'Work', href: '#work', icon: Layers, color: 'text-sky-400', mobileColor: 'group-hover:text-sky-400' },
  { name: 'Posters', href: '#posters', icon: LayoutGrid, color: 'text-violet-400', mobileColor: 'group-hover:text-violet-400' },
  { name: 'About', href: '#about', icon: User, color: 'text-emerald-400', mobileColor: 'group-hover:text-emerald-400' },
  { name: 'Contact', href: '#contact', icon: Mail, color: 'text-rose-400', mobileColor: 'group-hover:text-rose-400' },
];

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-sm bg-black/20"
      >
        {/* Advanced Kinetic Logo */}
        <a href="#" className="flex items-center gap-4 z-50 group">
          <div className="relative w-11 h-11 bg-zinc-950/50 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center overflow-hidden shadow-2xl shadow-black/50 group-hover:border-indigo-500/30 transition-colors duration-500">
            {/* Background Gradient Bloom */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
            
            {/* The Mark */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10 overflow-visible">
              {/* The Structure (Triangle) */}
              <motion.path 
                d="M12 4L4 20H20L12 4Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-zinc-300 group-hover:text-white transition-colors duration-300"
                variants={{
                  hover: { scale: 0.95, filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))" }
                }}
              />
              {/* The Energy (Orb) */}
              <motion.circle
                cx="12"
                cy="4"
                r="2"
                className="fill-indigo-400 shadow-lg shadow-indigo-500"
                variants={{
                  initial: { scale: 1 },
                  hover: { 
                    scale: [1, 1.2, 1],
                    // Orbit animation path roughly following the triangle vertices
                    x: [0, -8, 8, 0],
                    y: [0, 16, 16, 0],
                    transition: {
                      duration: 2,
                      ease: "linear",
                      repeat: Infinity,
                      times: [0, 0.33, 0.66, 1]
                    }
                  }
                }}
              />
            </svg>
          </div>
          
          <div className="flex flex-col justify-center">
            <span className="font-display text-lg font-bold leading-none tracking-tight text-white group-hover:tracking-normal transition-all duration-500">
              ASHIK
            </span>
            <span className="font-mono text-[9px] font-medium text-zinc-500 uppercase tracking-[0.25em] group-hover:text-indigo-400 transition-colors duration-300">
              Designer
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial="initial"
              whileHover="hover"
              className="relative px-4 py-2 rounded-full overflow-hidden group/nav"
            >
              {/* Background Highlight */}
              <motion.div
                variants={{
                  initial: { opacity: 0 },
                  hover: { opacity: 1 }
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white/5 border border-white/10 rounded-full"
              />
              
              <div className="relative flex items-center gap-2 z-10">
                {/* Sliding Icon */}
                <motion.div
                  variants={{
                    initial: { width: 0, opacity: 0, x: -10 },
                    hover: { width: 'auto', opacity: 1, x: 0 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center justify-center overflow-hidden"
                >
                  <item.icon size={16} className={`${item.color} min-w-[16px]`} />
                </motion.div>

                <span className="text-sm font-medium text-zinc-400 group-hover/nav:text-white transition-colors duration-300">
                  {item.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex items-center justify-center md:hidden"
      >
        <div className="flex flex-col items-start gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="flex items-center gap-4 font-display text-3xl font-bold text-zinc-400 hover:text-white transition-colors group"
            >
              <item.icon className={`w-6 h-6 text-zinc-600 ${item.mobileColor} transition-colors`} />
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
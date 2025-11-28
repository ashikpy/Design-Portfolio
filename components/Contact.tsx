import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer className="relative bg-zinc-950 pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl md:text-8xl font-bold tracking-tighter mb-8">
            Let's Create
            <br />
            <span className="text-zinc-600">Something iconic.</span>
          </h2>
          
          <a 
            href="mailto:hello@ashik.design"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg font-mono tracking-tight hover:bg-zinc-200 transition-colors duration-300 mb-16"
          >
            <Mail className="w-5 h-5" />
            hello@ashik.design
          </a>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 pt-12">
          <div className="flex items-center gap-6 mb-8 md:mb-0">
            {[
              { icon: <Instagram className="w-5 h-5" />, href: "#" },
              { icon: <Twitter className="w-5 h-5" />, href: "#" },
              { icon: <Linkedin className="w-5 h-5" />, href: "#" },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="text-zinc-500 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-900"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="text-zinc-600 text-sm">
            © 2024 Ashik aka Ash. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
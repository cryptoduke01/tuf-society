import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TufLogo from '../assets/tuflogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-black/95"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-6 h-20">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={TufLogo}
              alt="TUF Society Logo"
              className='h-10 w-10'
              viewBox="0 0 100 100"

            />
            <span className="font-extrabold text-2xl tracking-tighter text-zinc-100">TUF™</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['ABOUT', 'COMMUNITY', 'JOIN NOW'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className={`${item === 'JOIN NOW'
                    ? 'px-6 py-2 bg-[#FBE600] text-black'
                    : 'text-zinc-400 hover:text-[#FBE600]'
                  } font-medium tracking-wide`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-zinc-100"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <motion.path
                strokeLinecap="square"
                strokeLinejoin="square"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                animate={{ pathLength: 1 }}
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-zinc-900 border-t border-zinc-800 overflow-hidden"
            >
              <div className="px-4 py-2 space-y-1">
                {['ABOUT', 'COMMUNITY', 'JOIN NOW'].map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className={`block py-3 ${item === 'JOIN NOW' ? 'text-[#B8860B]' : 'text-zinc-400'
                      } font-medium tracking-wide`}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
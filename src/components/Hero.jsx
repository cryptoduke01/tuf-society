import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackgroundLines = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-px w-full bg-zinc-800"
        style={{ top: `${i * 20}%` }}
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
          delay: i * 2
        }}
      />
    ))}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-px h-full bg-zinc-800"
        style={{ left: `${i * 20}%` }}
        initial={{ y: '-100%' }}
        animate={{ y: '100%' }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
          delay: i * 1.5
        }}
      />
    ))}
  </div>
);
const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-zinc-900 overflow-hidden">
      <BackgroundLines />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32">
        <motion.div
          className="flex flex-col items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-[clamp(3rem,15vw,12rem)] font-black text-zinc-100 leading-none tracking-tighter"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            THE<br />
            UNCALLED<br />
            <motion.span
              className="text-[#FBE600]"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              FAMILY™
            </motion.span>
          </motion.h1>

          <motion.div
            className="mt-8 max-w-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-zinc-400 text-xl tracking-wide leading-relaxed">
              Revolutionary Web3 Community Forging the Future of Digital Culture and Innovation.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-[#FBE600] text-black font-bold text-lg tracking-wider hover:bg-[#FBE600] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)} // Open modal
            >
              JOIN THE FAMILY
            </motion.button>
            <motion.a
              href="#about" // Points to the "About" section
              className="px-8 py-4 border-2 border-zinc-700 text-zinc-100 font-bold text-lg tracking-wider hover:border-[#FBE600] transition-all inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LEARN MORE
            </motion.a>
          </motion.div>
          {/* Decorative Elements */}
          <motion.div
            className="absolute right-0 bottom-0 w-64 h-64 bg-[#FBE600]/40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ filter: 'blur(60px)' }}
          />

          <motion.div
            className="absolute right-48 top-48 w-6 h-6 text-[#FBE600]"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 0 15.6 8.4 24 12 15.6 15.6 12 24 8.4 15.6 0 12 8.4 8.4" />
            </svg>
          </motion.div>
        </motion.div>


      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-zinc-800 p-8 rounded-lg max-w-md text-center shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold text-zinc-100">Community Rules</h2>
              <p className="mt-4 text-zinc-400 text-sm">
                1. Respect all members. <br />
                2. No spamming or promotional posts. <br />
                3. Stay on-topic and follow community guidelines. <br />
                <br />
                Please ensure you agree to these rules before proceeding.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <motion.button
                  className="px-6 py-2 bg-[#FBE600] text-black font-medium rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.open('https://t.me/yourtelegramchannel', '_blank'); // Redirect to Telegram
                    setIsModalOpen(false); // Close modal
                  }}
                >
                  Join Community
                </motion.button>
                <motion.button
                  className="px-6 py-2 bg-zinc-700 text-zinc-300 font-medium rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(false)} // Close modal
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
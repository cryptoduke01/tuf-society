import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const HeroModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
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
  );
};

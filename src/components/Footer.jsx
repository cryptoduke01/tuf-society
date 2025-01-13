import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading and Links */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-zinc-100 tracking-tighter leading-none">
              THE TIME IS NOW<br />
              <span className="text-[#FBE600]">THE PATH IS FORWARD</span>
            </h2>
          </motion.div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-end gap-8 mt-8 md:mt-0"
          >
            <div className="flex flex-col gap-2">
                            {/* Decorative Star */}
            <div className="text-[#FBE600] text-6xl font-bold">✦</div>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-zinc-500 hover:text-[#FBE600] text-sm font-medium"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-zinc-500 hover:text-[#FBE600] text-sm font-medium"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-zinc-500 hover:text-[#FBE600] text-sm font-medium"
              >
                Cookie Policy
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-zinc-800 pt-8">
          {/* Location */}
          <p className="text-zinc-500 text-sm">
            &copy; 2025 TUF Society
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">
            <motion.a
              href="#"
              whileHover={{ y: -5 }}
              className="text-zinc-500 hover:text-[#FBE600]"
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -5 }}
              className="text-zinc-500 hover:text-[#FBE600]"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -5 }}
              className="text-zinc-500 hover:text-[#FBE600]"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-1">
                        <span className="text-zinc-400">in</span>
                        <span className="text-zinc-400">ƒ</span>
                        <span className="text-zinc-400">x</span>
                    </div>

                    <div className="flex items-center space-x-8">
                        <div className="text-zinc-400">
                            <span className="text-[#FBE600]">↗</span> 377749
                        </div>
                        <div className="text-zinc-400">
                            <span className="text-red-500">↙</span> -122,4184
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
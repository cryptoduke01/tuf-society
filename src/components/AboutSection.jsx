import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Twitter } from 'lucide-react';

const AboutSection = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section className="relative bg-zinc-900 py-24">
            <motion.div
                style={{ y }}
                className="max-w-7xl mx-auto px-6"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[clamp(2.5rem,8vw,6rem)] font-black text-zinc-100 tracking-tighter mb-16"
                >
                    ABOUT<span className="text-[#FBE600]">TUF™</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-xl text-zinc-400 leading-relaxed">
                            Founded in 2024, The Uncalled Family™ emerged as a collective of visionaries, developers, and creators united by a shared passion for Web3 innovation.
                        </p>
                        <p className="text-xl text-zinc-400 leading-relaxed">
                            Our mission is to build a thriving ecosystem where creativity meets technology, fostering groundbreaking initiatives that shape the future of digital communities.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {[
                            { label: 'Founded', value: '2024' },
                            { label: 'Members', value: '1000+' }
                        ].map((stat, i) => (
                            <div key={i} className="bg-zinc-800/50 p-6 rounded-lg">
                                <h3 className="text-[#FBE600] text-4xl font-bold mb-2">{stat.value}</h3>
                                <p className="text-zinc-400">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24"
                >
                    <h3 className="text-3xl font-bold text-zinc-100 mb-12">Key Contributors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: 'Reze™',
                                role: 'Founder',
                                twitter: 'https://twitter.com/RezeHandle',
                                profilePic: '/images/reze.jpg',
                            },
                            {
                                name: 'Chris Thompson™',
                                role: 'Co-Founder',
                                twitter: 'https://twitter.com/ChrisHandle',
                                profilePic: '/images/chris.jpg',
                            },
                            {
                                name: 'Cheddar™',
                                role: 'Community Lead',
                                twitter: 'https://twitter.com/CheddarHandle',
                                profilePic: 'https://pbs.twimg.com/profile_images/1778779084044079105/MTW65rGq_400x400.jpg',
                            },
                            {
                                name: 'Him The GodFather™',
                                role: 'Administrator',
                                twitter: 'https://x.com/Bigtecoo',
                                profilePic: 'https://pbs.twimg.com/profile_images/1727463921550868480/Z9stCsbX_400x400.jpg',
                            },
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-zinc-800/50 p-8 rounded-lg flex flex-col items-center text-center"
                            >
                                <div className="w-24 h-24 rounded-full bg-zinc-700 mb-6 overflow-hidden">
                                    <img
                                        src={member.profilePic}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-zinc-100 mb-2">{member.name}</h4>
                                <p className="text-[#FBE600] mb-4">{member.role}</p>
                                <motion.a
                                    href={member.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    className="text-zinc-400 hover:text-[#FBE600]"
                                >
                                    <Twitter className="w-5 h-5" />
                                </motion.a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutSection;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Star } from 'lucide-react';

const AchievementsCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = 800;
        const duration = 2300;
        const increment = 50;
        const stepTime = duration / (end / increment);

        const timer = setInterval(() => {
            start += increment;
            if (start > end) {
                clearInterval(timer);
                setCount(end);
            } else {
                setCount(start);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, []);

    return count;
};

const AchievementsSection = () => {
    const memberCount = AchievementsCounter();

    return (
        <section className="bg-black py-24" id='community'>
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[clamp(2.5rem,8vw,4rem)] font-black text-zinc-100 tracking-tighter text-center mb-16"
                >
                    COMMUNITY <span className="text-[#FBE600]">ACHIEVEMENTS</span>
                </motion.h2>

                {/* Counter Section */}
                <motion.div className="text-center mb-20">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h3 className="text-7xl font-bold text-[#FBE600] mb-4">
                            {memberCount.toLocaleString()}+
                        </h3>
                        <p className="text-2xl text-zinc-400">Members Strong</p>
                    </motion.div>
                </motion.div>

                {/* Achievement Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Trophy,
                            title: 'Top Web3 Community',
                            description: 'Leading innovation hub in the space',
                        },
                        {
                            icon: Calendar,
                            title: 'Global Meetups',
                            description: 'Regular events and collaborations',
                        },
                        {
                            icon: Star,
                            title: 'Project Launches',
                            description: 'Successful community initiatives',
                        },
                    ].map((achievement, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-zinc-800/50 p-8 rounded-lg h-full shadow-lg transition-shadow duration-300 hover:shadow-[#FBE600]/50"
                        >
                            <achievement.icon className="w-12 h-12 text-[#FBE600] mb-6" />
                            <h3 className="text-2xl font-bold text-zinc-100 mb-4">
                                {achievement.title}
                            </h3>
                            <p className="text-zinc-400">{achievement.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;

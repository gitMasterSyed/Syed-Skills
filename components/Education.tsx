
import React from 'react';
import type { EducationItem } from '../types';
import { GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

const educationData: EducationItem[] = [
    {
        degree: "B.Tech, Computer Science and Engineering",
        university: "JNT University",
        duration: "2004 - 2008",
    },
];

const Education: React.FC = () => {
    const item = educationData[0];
    return (
        <section id="education" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-slate-100 mb-8">Education</h2>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-6 hover:bg-slate-800/50 transition-colors group"
            >
                <div className="flex-shrink-0 p-4 rounded-xl bg-slate-900 group-hover:bg-cyan-900/20 transition-colors">
                     <GraduationCap className="w-10 h-10 text-cyan-400" />
                </div>
                <div className="text-center md:text-left">
                    <h3 className="font-bold text-slate-100 text-2xl group-hover:text-cyan-100 transition-colors">{item.degree}</h3>
                    <p className="text-slate-400 font-medium text-lg mt-1">{item.university}</p>
                    <p className="text-slate-500 font-semibold mt-2 tracking-wide">{item.duration}</p>
                </div>
            </motion.div>
        </section>
    );
};

export default Education;


import React from 'react';
import type { CertificationItem } from '../types';
import { Award } from 'lucide-react';
import { motion } from 'motion/react';

const certificationData: CertificationItem[] = [
    {
        name: "ACP-420 Atlassian Certified Jira Service Project Manager",
        issuer: "Atlassian",
        date: "Issued Feb 2022",
        expires: "Expires Mar 2026",
    },
    {
        name: "ACP-100 Atlassian Certified Jira Administrator for Data Center and Server",
        issuer: "Atlassian",
        date: "Issued Dec 2021",
        expires: "Expires Mar 2026",
    },
    {
        name: "Microsoft Certified: Azure AI Fundamentals",
        issuer: "Microsoft",
        date: "Issued June 15, 2025",
    },
];

const CertificationCard: React.FC<{ item: CertificationItem; index: number }> = ({ item, index }) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20 group flex items-start gap-5 shadow-sm"
    >
        <div className="flex-shrink-0 p-3 rounded-lg bg-slate-900/50 group-hover:bg-cyan-900/30 transition-colors">
            <Award className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
        </div>
        <div>
            <h3 className="font-bold text-slate-100 group-hover:text-cyan-100 transition-colors leading-tight">{item.name}</h3>
            <p className="text-slate-400 font-medium mt-1">{item.issuer}</p>
            <div className="flex items-center gap-2 text-slate-500 text-xs font-medium uppercase tracking-wider mt-3">
                <span>{item.date}</span>
                {item.expires && (
                    <>
                        <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                        <span className="text-cyan-500/70">{item.expires}</span>
                    </>
                )}
            </div>
        </div>
    </motion.div>
);

const Certifications: React.FC = () => {
    return (
        <section id="certifications" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-slate-100 mb-10 text-center md:text-left">Licenses & Certifications</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {certificationData.map((item, index) => (
                    <CertificationCard key={index} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Certifications;

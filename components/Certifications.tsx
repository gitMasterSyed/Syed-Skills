
import React from 'react';
import type { CertificationItem } from '../types';
import { CertificateIcon } from './icons/IconComponents';

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

const CertificationCard: React.FC<{ item: CertificationItem }> = ({ item }) => (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-900/50 hover:-translate-y-1 group flex items-start gap-4">
        <div className="flex-shrink-0">
            <CertificateIcon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
        </div>
        <div>
            <h3 className="font-bold text-slate-100">{item.name}</h3>
            <p className="text-slate-400 font-medium">{item.issuer}</p>
            <p className="text-slate-500 text-sm mt-1">{item.date}{item.expires && ` - ${item.expires}`}</p>
        </div>
    </div>
);

const Certifications: React.FC = () => {
    return (
        <section id="certifications">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-8">Licenses & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificationData.map((item, index) => (
                    <CertificationCard key={index} item={item} />
                ))}
            </div>
        </section>
    );
};

export default Certifications;

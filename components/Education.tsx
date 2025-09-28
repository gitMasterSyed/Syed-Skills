
import React from 'react';
import type { EducationItem } from '../types';
import { EducationIcon } from './icons/IconComponents';

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
        <section id="education">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-8">Education</h2>
            <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg flex items-start gap-4">
                <div className="flex-shrink-0">
                     <EducationIcon className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-100 text-lg">{item.degree}</h3>
                    <p className="text-slate-400 font-medium">{item.university}</p>
                    <p className="text-slate-500 text-sm mt-1">{item.duration}</p>
                </div>
            </div>
        </section>
    );
};

export default Education;

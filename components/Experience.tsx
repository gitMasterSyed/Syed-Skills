
import React from 'react';
import type { ExperienceItem } from '../types';
import { Briefcase, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const experienceData: ExperienceItem[] = [
  {
    role: "Consultant Cloud Operations Specialist",
    company: "Sundus Recruitment and Outsourcing Services",
    duration: "Mar 2024 - Present",
    achievements: [
      "Led Atlassian instance migrations across cloud and on-premises environments.",
      "Implemented integrations with DocuSign, GitHub, Microsoft Teams, Slack, and ChatGPT.",
      "Enforced identity governance and SSO via Microsoft Entra ID.",
      "Managed 33+ AWS Route 53 hosted zones, ensuring high availability.",
      "Designed and governed organization-wide email signature frameworks.",
    ],
  },
  {
    role: "Atlassian Expert",
    company: "PractiProject | Atlassian Platinum Solution Partner",
    duration: "Feb 2022 - Feb 2024",
    achievements: [
      "Spearheaded JIRA (8.4 to 9.12.x) and Confluence (7.13.x to 8.5.x) migrations.",
      "Re-architected and optimized legacy Atlassian solutions, improving reliability and speed.",
      "Designed and implemented advanced Groovy scripts to automate complex workflows.",
      "Championed the adoption of new features and technologies within the Atlassian suite.",
    ],
  },
  {
    role: "Senior Software Consultant",
    company: "Etisalat UAE",
    duration: "May 2014 - Jan 2022",
    achievements: [
      "Integrated assignment-level and annual appraisal lifecycle processes.",
      "Spearheaded the implementation of a risk management system.",
      "Managed system access for 1000+ local and remote users.",
      "Migrated Jira from version 6.2 to the latest version.",
    ],
  },
   {
    role: "Software Engineer",
    company: "CenturyLink & L&T IES",
    duration: "Jan 2011 - Apr 2014",
    achievements: [
      "Analyzed requirements and provided technical solutions.",
      "Developed custom widgets using jQuery UI, HighCharts, and Kendo framework.",
      "Maintained coding standards by analyzing and reviewing code in SONAR.",
      "Configured and wrote Spring DAO classes to accomplish requirements.",
    ],
  },
];


const ExperienceCard: React.FC<{ item: ExperienceItem; index: number }> = ({ item, index }) => (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 sm:pl-12 py-8 group"
    >
        <div className="flex items-center mb-1">
            <div className="z-10 bg-slate-800 h-10 w-10 absolute left-0 sm:left-2 top-6 rounded-full flex items-center justify-center ring-4 ring-slate-900 group-hover:ring-cyan-500/30 transition-all duration-300">
                <Briefcase className="h-5 w-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-100">{item.role}</h3>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-4 mb-4">
             <p className="text-cyan-400/90 font-semibold">{item.company}</p>
             <span className="text-slate-600 hidden sm:block">•</span>
             <p className="text-slate-500 font-medium text-sm">{item.duration}</p>
        </div>
       
        <ul className="space-y-3 mt-4">
            {item.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-3 group/item">
                    <ChevronRight className="w-5 h-5 mt-0.5 text-cyan-500/50 group-hover/item:text-cyan-400 transition-colors flex-shrink-0" />
                    <span className="text-slate-400 group-hover/item:text-slate-300 transition-colors leading-relaxed">{achievement}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-20">
      <h2 className="text-3xl font-bold text-slate-100 mb-10 flex items-center gap-4">
        <span className="h-px flex-1 bg-slate-800"></span>
        Work Experience
        <span className="h-px flex-1 bg-slate-800"></span>
      </h2>
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6">
        {experienceData.map((item, index) => (
          <ExperienceCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;

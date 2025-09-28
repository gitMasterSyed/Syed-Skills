
import React from 'react';
import type { ExperienceItem } from '../types';
import { BriefcaseIcon, ChevronRightIcon } from './icons/IconComponents';

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


const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
    <div className="relative pl-8 sm:pl-12 py-6 group rounded-lg transition-colors duration-300 hover:bg-slate-800/50">
        <div className="flex items-center mb-1 sm:mb-0">
            <div className="z-10 bg-slate-700 h-8 w-8 absolute left-0 sm:left-2 -top-1 sm:top-1.5 rounded-full flex items-center justify-center ring-4 ring-slate-900 group-hover:bg-cyan-900/50 group-hover:ring-cyan-400/30 transition-all duration-300">
                <BriefcaseIcon className="h-4 w-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-100">{item.role}</h3>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-4 mb-3">
             <p className="text-cyan-400 font-medium">{item.company}</p>
             <span className="text-slate-500 text-sm hidden sm:block">|</span>
             <p className="text-slate-500 text-sm">{item.duration}</p>
        </div>
       
        <ul className="space-y-2 mt-2">
            {item.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                    <ChevronRightIcon className="w-5 h-5 mt-0.5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-400">{achievement}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-8">Work Experience</h2>
      <div className="relative border-l-2 border-slate-700">
        {experienceData.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;

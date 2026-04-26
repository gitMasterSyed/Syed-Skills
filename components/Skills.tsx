
import React from 'react';
import { motion } from 'motion/react';
import { Layers, Zap, Cloud, Shield, Database } from 'lucide-react';

const skillsData = [
  {
    category: "Atlassian Suite",
    icon: <Database className="w-6 h-6" />,
    skills: ["Jira", "Confluence", "JSM", "Data Center & Cloud", "ScriptRunner", "Groovy"]
  },
  {
    category: "Integrations & Automation",
    icon: <Zap className="w-6 h-6" />,
    skills: ["DocuSign", "GitHub", "Microsoft Teams", "Slack", "ChatGPT", "Greenhouse"]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["AWS Route 53", "Infrastructure Modernization", "DNS Management"]
  },
  {
    category: "Security & Identity",
    icon: <Shield className="w-6 h-6" />,
    skills: ["Microsoft Entra ID", "SSO", "GlobalSign Certificates", "Compliance Frameworks"]
  },
  {
    category: "Legacy Expertise",
    icon: <Layers className="w-6 h-6" />,
    skills: ["jQuery", "Kendo UI", "Spring Framework", "CSS", "JavaScript"]
  }
];

const SkillCategory: React.FC<{ title: string; skills: string[]; icon: React.ReactNode; index: number }> = ({ title, skills, icon, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="bg-slate-800/20 p-6 rounded-xl border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-5">
      <div className="text-cyan-400">{icon}</div>
      <h3 className="text-lg font-bold text-slate-100 tracking-tight">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="bg-slate-800/80 text-cyan-300/90 text-xs font-semibold px-2.5 py-1 rounded border border-slate-700/50 hover:border-cyan-500/50 hover:bg-cyan-900/20 transition-all cursor-default">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="text-3xl font-bold text-slate-100 mb-10">Technical Expertises</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((item, index) => (
          <SkillCategory 
            key={item.category} 
            title={item.category} 
            skills={item.skills} 
            icon={item.icon}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;

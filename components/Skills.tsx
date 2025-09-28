
import React from 'react';

const skillsData = {
  "Atlassian Suite": ["Jira", "Confluence", "JSM", "Data Center & Cloud", "ScriptRunner", "Groovy"],
  "Integrations & Automation": ["DocuSign", "GitHub", "Microsoft Teams", "Slack", "ChatGPT", "Greenhouse"],
  "Cloud & DevOps": ["AWS Route 53", "Infrastructure Modernization", "DNS Management"],
  "Security & Identity": ["Microsoft Entra ID", "SSO", "GlobalSign Certificates", "Compliance Frameworks"],
  "Legacy Expertise": ["jQuery", "Kendo UI", "Spring Framework", "CSS", "JavaScript"]
};

const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => (
  <div>
    <h3 className="text-lg font-semibold text-cyan-300 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="bg-cyan-900/50 text-cyan-300 text-sm font-medium px-3 py-1.5 rounded-md border border-cyan-800/50">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-8">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <SkillCategory key={category} title={category} skills={skills} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

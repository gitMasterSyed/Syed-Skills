
import React from 'react';
import { LinkedInIcon, MailIcon, PhoneIcon } from './icons/IconComponents';

const Header: React.FC = () => {
  return (
    <header>
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">
          Syed Sajid
        </h1>
        <h2 className="mt-3 text-xl md:text-2xl font-medium text-cyan-300">
          Enterprise Applications & Integration Specialist
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-400">
          13+ years of experience driving enterprise integration, application governance, and digital transformation. Expert in architecting and managing Atlassian ecosystems and automating business processes.
        </p>
      </div>
      <div className="mt-8 flex justify-center items-center gap-4 md:gap-6 flex-wrap">
        <a href="mailto:mailsyedsajid@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors duration-300">
          <MailIcon className="w-5 h-5" />
          <span>mailsyedsajid@gmail.com</span>
        </a>
        <a href="https://linkedin.com/in/syed-s-53a665aa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors duration-300">
          <LinkedInIcon className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
         <div className="flex items-center gap-2 text-slate-300">
          <PhoneIcon className="w-5 h-5 text-cyan-400" />
          <span>+971508355902</span>
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <PhoneIcon className="w-5 h-5 text-cyan-400" />
          <span>+918050374251</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
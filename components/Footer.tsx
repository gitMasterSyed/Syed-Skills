
import React from 'react';
import { LinkedInIcon, MailIcon } from './icons/IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800/50 border-t border-slate-700 mt-24">
      <div className="container mx-auto max-w-5xl px-6 py-6 text-center text-slate-400">
        <p className="mb-4">Get in touch:</p>
        <div className="flex justify-center items-center gap-6 mb-4">
          <a href="mailto:mailsyedsajid@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors duration-300">
            <MailIcon className="w-6 h-6" />
            <span className="hidden sm:inline">Email</span>
          </a>
          <a href="https://linkedin.com/in/syed-s-53a665aa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors duration-300">
            <LinkedInIcon className="w-6 h-6" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
        <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Syed Sajid. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800/50 mt-32">
      <div className="container mx-auto max-w-5xl px-6 py-12 text-center">
        <h2 className="text-xl font-bold text-slate-100 mb-6 tracking-tight italic opacity-50">Syed Sajid</h2>
        <div className="flex justify-center items-center gap-8 mb-8">
          <a href="mailto:mailsyedsajid@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/syed-s-53a665aa" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm text-slate-500 font-medium tracking-wide">&copy; {new Date().getFullYear()} SYED SAJID. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;

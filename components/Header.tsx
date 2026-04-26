
import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const Header: React.FC = () => {
  return (
    <header className="overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400 tracking-tight">
          Syed Sajid
        </h1>
        <h2 className="mt-4 text-xl md:text-2xl font-medium text-cyan-300/90">
          Enterprise Applications & Integration Specialist
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-400 leading-relaxed">
          13+ years of experience driving enterprise integration, application governance, and digital transformation. Expert in architecting and managing Atlassian ecosystems and automating business processes.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-10 flex justify-center items-center gap-6 md:gap-8 flex-wrap"
      >
        <a href="mailto:mailsyedsajid@gmail.com" className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-300 transition-all duration-300 group">
          <div className="p-2 rounded-full bg-slate-800 group-hover:bg-cyan-900/30 transition-colors">
            <Mail className="w-5 h-5" />
          </div>
          <span className="font-medium">mailsyedsajid@gmail.com</span>
        </a>
        <a href="https://linkedin.com/in/syed-s-53a665aa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-300 transition-all duration-300 group">
          <div className="p-2 rounded-full bg-slate-800 group-hover:bg-cyan-900/30 transition-colors">
            <Linkedin className="w-5 h-5" />
          </div>
          <span className="font-medium">LinkedIn</span>
        </a>
         <div className="flex items-center gap-2.5 text-slate-300 group">
          <div className="p-2 rounded-full bg-slate-800">
            <Phone className="w-5 h-5 text-cyan-400" />
          </div>
          <span className="font-medium">+971508355902</span>
        </div>
        <div className="flex items-center gap-2.5 text-slate-300 group">
          <div className="p-2 rounded-full bg-slate-800">
            <Phone className="w-5 h-5 text-cyan-400" />
          </div>
          <span className="font-medium">+918050374251</span>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;

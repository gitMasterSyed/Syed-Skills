
import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <main className="container mx-auto max-w-5xl px-6 py-12 md:py-20">
        <Header />
        <div className="space-y-16 md:space-y-24 mt-16 md:mt-24">
          <Skills />
          <Certifications />
          <Experience />
          <Education />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;

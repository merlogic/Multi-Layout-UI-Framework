import React from 'react';
import { 
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Palette,
  Atom,
  Globe,
  Users,
  Search,
  BookOpen
} from "lucide-react";

export default function HomeTemplate({ handleLogin }) {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      
      {/* TOP UTILITY BAR */}
      <div className="bg-[#004D32] text-white py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
          <div className="flex gap-6">
            <span className="opacity-80">University of Rizal System</span>
            <span className="flex items-center gap-1"><Globe size={12} /> International Admissions</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Alumni</a>
            <a href="#" className="hover:underline">Library</a>
            <a href="#" className="hover:underline">Giving</a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:px-12">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#007D51] flex items-center justify-center">
                <GraduationCap className="text-white" size={20} />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#004D32]">URS.</span>
            </div>
            
            <nav className="hidden lg:flex items-center gap-8 text-[12px] font-bold uppercase tracking-wider text-slate-500">
              <a href="#" className="text-[#007D51]">The Academy</a>
              <a href="#" className="hover:text-black transition-colors">Academics</a>
              <a href="#" className="hover:text-black transition-colors">Research</a>
              <a href="#" className="hover:text-black transition-colors">Student Life</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-black">
              <Search size={20} />
            </button>
            <button 
              onClick={handleLogin}
              className="border-2 border-[#007D51] text-[#007D51] px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#007D51] hover:text-white transition-all"
            >
              Portal Login
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION - SPLIT EDITORIAL STYLE */}
        <section className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">
          <div className="lg:col-span-7 flex flex-col justify-center p-8 md:p-24 bg-slate-50">
            <div className="max-w-xl">
              <p className="text-[#007D51] font-bold uppercase tracking-[0.3em] text-xs mb-6">Established Excellence</p>
              <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] text-[#004D32] mb-8">
                Where Tradition <br />
                <span className="italic text-slate-400">Meets</span> Innovation.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                Dedicated to developing leaders through a rigorous academic framework and a commitment to social responsibility in the heart of Rizal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#007D51] text-white px-10 py-5 font-bold flex items-center justify-between group">
                  Apply for Admission <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="bg-white border border-slate-200 text-slate-900 px-10 py-5 font-bold hover:bg-slate-100 transition-all">
                  Request a Tour
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover"
              alt="University Architecture"
            />
            <div className="absolute inset-0 bg-[#004D32]/10"></div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="bg-[#004D32] text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            <StatItem number="12k+" label="Total Students" />
            <StatItem number="94%" label="Job Placement" />
            <StatItem number="#1" label="Regional Research" />
            <StatItem number="40+" label="Global Partners" />
          </div>
        </section>

        {/* ASYMMETRICAL PROGRAMS GRID */}
        <section className="max-w-7xl mx-auto py-24 px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-5xl text-[#004D32] mb-6">Our Academic Spheres</h2>
              <p className="text-slate-500 text-lg">We offer a diverse range of programs across five specialized colleges, each focused on preparing you for the demands of the modern workforce.</p>
            </div>
            <a href="#" className="font-bold uppercase tracking-widest text-xs border-b-2 border-[#007D51] pb-2 text-[#007D51]">View all programs</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProgramCard 
              icon={<Atom />} 
              title="Engineering & Tech" 
              desc="Leading innovation in robotics and sustainable systems."
              img="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
              span="md:col-span-2"
            />
            <ProgramCard 
              icon={<Palette />} 
              title="Liberal Arts" 
              desc="Exploring the human condition through art and history."
              img="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
            />
            <ProgramCard 
              icon={<ShieldCheck />} 
              title="Health Sciences" 
              desc="Comprehensive training for the healthcare heroes of tomorrow."
              img="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
            />
            <ProgramCard 
              icon={<BookOpen />} 
              title="Education" 
              desc="Forming the educators who will inspire the next generation."
              img="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
              span="md:col-span-2"
            />
          </div>
        </section>

        {/* QUOTE SECTION */}
        <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Users className="text-[#007D51] mx-auto mb-8" size={48} />
            <h3 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-12">
              "URS didn't just give me a degree; it gave me a lens through which to see the world and the courage to change it."
            </h3>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Alumni" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold">Felix Roxas</p>
                <p className="text-[#007D51] text-xs uppercase tracking-widest font-bold">Class of 2022 • Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#007D51]/10 blur-[120px] rounded-full"></div>
        </section>
      </main>

      <footer className="bg-slate-50 pt-24 pb-12 px-6 md:px-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-[#004D32] flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <span className="font-serif text-3xl font-bold text-[#004D32]">URS.</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Main Campus: Tanay, Rizal, Philippines.<br />
              Providing quality education across the province of Rizal since 2001.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-slate-400">Navigation</h4>
            <ul className="space-y-4 font-bold text-sm text-slate-700">
              <li><a href="#" className="hover:text-[#007D51]">Admission Info</a></li>
              <li><a href="#" className="hover:text-[#007D51]">Student Portal</a></li>
              <li><a href="#" className="hover:text-[#007D51]">Academic Calendar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-slate-400">Connect</h4>
            <p className="text-slate-700 font-bold mb-4">info@urs.edu.ph</p>
            <p className="text-slate-500 text-sm">(02) 8654-4447</p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest">© 2026 University of Rizal System. All Rights Reserved.</p>
          <div className="flex gap-8 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * HELPER COMPONENTS
 */

function StatItem({ number, label }) {
  return (
    <div className="p-8 md:p-12 text-center">
      <p className="text-3xl md:text-5xl font-serif font-bold mb-2">{number}</p>
      <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">{label}</p>
    </div>
  );
}

function ProgramCard({ icon, title, desc, img, span = "" }) {
  return (
    <div className={`group relative h-80 overflow-hidden bg-slate-900 ${span}`}>
      <img 
        src={img} 
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-30 transition-all duration-700" 
        alt={title}
      />
      <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
        <div className="w-10 h-10 border border-white/30 flex items-center justify-center backdrop-blur-sm">
          {React.cloneElement(icon, { size: 20 })}
        </div>
        <div>
          <h4 className="font-serif text-2xl mb-2">{title}</h4>
          <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "School System Template",
      tag: "Academic",
      description: "A school system template with login, home page, and dashboard features for managing academic information easily.",
      path: "/school/SchoolHome",
      image: "https://images.unsplash.com/photo-1523050335392-9bef867a0578?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "E-Commerce",
      tag: "Commerce",
      description: "High-conversion storefronts. Optimized for Core Web Vitals and seamless checkout.",
      path: "/ecommerce/login",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Delivery App",
      tag: "Logistics",
      description: "Hyper-local tracking interfaces with real-time driver telemetry.",
      path: "/delivery/login",
      image: "https://images.unsplash.com/photo-1521330784802-dc145bec617a?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Creative Portfolio",
      tag: "Identity",
      description: "A digital stage for creators. Minimalist motion and high-fidelity typography.",
      path: "/portfolio/home",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-[#efefef] selection:bg-[#ccff00] selection:text-black font-sans antialiased overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* For Navigation */}
      <nav className="fixed top-0 w-full z-[100] backdrop-blur-sm border-b border-white/5">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <span className="font-black tracking-[0.2em] text-xs md:text-sm uppercase italic">Mer.Sys</span>
          
        </div>
      </nav>

      <main className="container mx-auto px-4 md:px-8 pt-32 md:pt-52 pb-20">
        <header className="max-w-6xl mb-24 md:mb-48">
          <div className="overflow-hidden mb-6 md:mb-8">
            <h1 className="text-[16vw] md:text-[12vw] font-black leading-[0.8] tracking-tighter uppercase inline-block animate-in fade-in slide-in-from-bottom-12 duration-1000">
              Future <br /> 
              <span className="text-transparent stroke-1 stroke-white/20 hover:stroke-white transition-all duration-700 cursor-default">Proof.</span>
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-6 lg:col-span-5">
              <p className="text-lg md:text-2xl font-light leading-relaxed text-white/60">
                Multipurpose React UI templates designed for <span className="text-white italic"> projects</span>.
                Built with React 19 to help developers create scalable, responsive, and visually polished applications faster.

              </p>
            </div>
            <div className="md:col-start-9 md:col-span-4 flex flex-col items-start md:items-end text-left md:text-right">
              <span className="px-3 py-1 border border-white/20 rounded-full text-[9px] font-bold tracking-widest mb-4">V1.0.4 RELEASE</span>
              <p className="text-[10px] text-white/30 font-mono leading-loose uppercase tracking-widest">
                React 19 + Tailwind v4<br />
              </p>
            </div>
          </div>
        </header>

        {/* Project List Section  */}
        <section className="border-t border-white/10">
          {projects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => navigate(project.path)}
              className="group relative w-full border-b border-white/10 py-10 md:py-20 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between text-left transition-all duration-700 hover:bg-white/[0.01]"
            >
              {/* Layout Left */}
              <div className="relative z-10 flex-1 w-full">
                <div className="flex items-center gap-3 mb-4 md:mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-[10px] italic">0{idx + 1}</span>
                  <div className="h-px w-6 md:w-12 bg-white/30 group-hover:bg-[#ccff00] transition-colors" />
                  <span className="font-bold text-[9px] tracking-[0.2em] uppercase">{project.tag}</span>
                </div>
                
                <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter transition-all duration-500 group-hover:translate-x-2 md:group-hover:translate-x-4 group-hover:text-[#ccff00]">
                  {project.title}
                </h2>
              </div>

              {/* Layout Center: image */}
              <div className="relative w-full md:w-64 lg:w-96 aspect-video md:aspect-[16/10] overflow-hidden rounded-sm ring-1 ring-white/10 group-hover:ring-[#ccff00]/50 transition-all duration-700">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                {/* For mobile description overlay - only visible on small screens */}
                <div className="absolute inset-0 bg-black/60 md:hidden flex items-end p-4">
                    <p className="text-xs text-white/80">{project.description}</p>
                </div>
              </div>

              {/* Layout Right:  */}
              <div className="hidden lg:block flex-1 max-w-[240px] text-right opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-xs font-medium leading-relaxed uppercase tracking-tighter">
                  {project.description}
                </p>
              </div>

              {/* Vertical Accent Line */}
              <div className="absolute left-0 top-0 w-[2px] h-0 bg-[#ccff00] transition-all duration-500 group-hover:h-full" />
            </button>
          ))}
        </section>

        {/* Footer */}
<footer className="mt-40 md:mt-60 pb-16 border-t border-white/5">
  <div className="container mx-auto pt-12 flex flex-col md:flex-row justify-between items-start gap-12">
    
    {/* Left Side: Brand Anchor */}
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 bg-[#f7f7f7]" />
        <span className="text-sm font-black tracking-[0.3em] uppercase">Developed by : Merlogic</span>
      </div>
    
    </div>

    {/* Right Side */}
    <div className="flex flex-col md:items-end gap-6 w-full md:w-auto border-l md:border-l-0 md:border-r border-white/10 pl-6 md:pl-0 md:pr-8">
      <div className="space-y-3">
        <a 
          href="https://github.com/MERLOGIC" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 hover:text-[#ccff00] transition-all"
        >
          <span className="opacity-30 group-hover:opacity-100 transition-opacity italic"></span>
          <span className="underline underline-offset-[6px] decoration-white/10 group-hover:decoration-[#ccff00]">
            Github.com / Merlogic
          </span>
        </a>
        
        <div className="flex items-center md:justify-end gap-5 text-[9px] font-mono text-white/20 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          </div>
          <span>© 2026</span>
        </div>
      </div>
      
      
    </div>

  </div>
</footer>
      </main>
    </div>
  );
}
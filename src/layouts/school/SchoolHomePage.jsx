import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Landing Page Templates
import HomeTemplate from "./SchoolHome/HomeTemplate"; 


 
export default function SchoolHomePage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [activeUI, setActiveUI] = useState("Template One");

  const handleLogin = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      navigate("/school/SchoolLogin"); 
    }, 800);
  };

  const sharedProps = { handleLogin, isLoading };

  const templates = {
    "Template One": <HomeTemplate {...sharedProps} />,
  };

  return (
    <div className="relative min-h-screen bg-white">
      
      <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[100] w-[92%] sm:w-auto max-w-full">
        <div className="flex p-1 bg-black/5 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex flex-nowrap items-center">
            {Object.keys(templates).map((t) => (
              <button 
                key={t}
                onClick={() => setActiveUI(t)}
                className={`px-4 md:px-6 py-2 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] transition-all duration-300 whitespace-nowrap ${
                  activeUI === t 
                    ? 'bg-white text-black shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="transition-opacity duration-500 pt-16 md:pt-0">
        {templates[activeUI]}
      </div>

      {isLoading && (
        <div className="fixed inset-0 z-[150] bg-white/60 backdrop-blur-sm flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-4 border-[#007D51] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[10px] font-black uppercase tracking-widest text-[#007D51]">Opening Portal...</p>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SchoolTemplate from "./SchoolLogin/SchoolTemplate";
import SchoolMidnight from "./SchoolLogin/SchoolMidnight";
import SchoolLoft from "./SchoolLogin/SchoolLoft";
import SchoolBlob from "./SchoolLogin/SchoolBlob";
import SchoolFix from "./SchoolLogin/SchoolFix";

export default function SchoolPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeUI, setActiveUI] = useState("Template One");

  const handleLogin = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      
      navigate("/school/dashboard"); 
    }, 1500);
  };

  const sharedProps = { handleLogin, showPassword, setShowPassword, isLoading };

  const templates = {
    "Template One": <SchoolTemplate {...sharedProps} />,
    "Template Two": <SchoolMidnight {...sharedProps} />,
    "Template Three": <SchoolLoft {...sharedProps} />,
    "Template Four": <SchoolBlob {...sharedProps} />,
    "Template Five": <SchoolFix {...sharedProps} />
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* NAVIGATION PILL */}
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

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
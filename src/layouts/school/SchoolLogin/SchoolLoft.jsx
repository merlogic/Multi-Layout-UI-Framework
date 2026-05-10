import { Eye, EyeOff, Layout, ArrowRight } from "lucide-react";

export default function SchoolLoft({ handleLogin, showPassword, setShowPassword, isLoading }) {
  return (
    <div className="min-h-screen w-full bg-[#1c1c1c] flex flex-col lg:flex-row font-serif overflow-x-hidden">
      
      {/* ---  HEADER / BRAND SIDE --- */}
      {/* On Mobile: Top branding area (35vh) | On Desktop: Full height left side */}
      <section className="relative h-[35vh] lg:h-screen w-full lg:w-1/2 flex flex-col justify-center lg:justify-between p-10 lg:p-16 text-[#fcfaf7] z-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <div className="relative z-10 flex items-center gap-3 animate-[fadeInDown_0.8s_ease-out]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 backdrop-blur-sm">
            <Layout size={20} />
          </div>
          <span className="text-xl font-bold tracking-tighter italic">URS System.</span>
        </div>

        <div className="relative z-10 mt-8 lg:mt-0 animate-[fadeInLeft_1s_ease-out]">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light leading-tight tracking-tight">
            The future of <br className="hidden sm:block" /> 
            <span className="italic text-stone-400">academic</span> excellence.
          </h2>
        </div>

        <div className="relative z-10 hidden lg:block text-[10px] uppercase tracking-[0.4em] text-stone-500">
          © 2026 University of Rizal System
        </div>
      </section>

      {/* --- LOGIN FORM SIDE --- */}
      {/* On Mobile: Overlapping Sheet (Slides Up) | On Desktop: Clean 50% Panel */}
      <section className="relative z-20 flex-1 bg-[#fcfaf7] rounded-t-[40px] lg:rounded-none mt-[-40px] lg:mt-0 px-8 py-12 lg:p-24 flex flex-col items-center justify-center shadow-[0_-20px_40px_rgba(0,0,0,0.3)] lg:shadow-none transition-all duration-700 ease-out animate-[slideUp_0.8s_ease-out]">
        
        <div className="absolute top-4 w-12 h-1 bg-stone-200 rounded-full lg:hidden" />
        
        <div className="w-full max-w-sm">
          <header className="mb-10 lg:mb-16">
            <h1 className="mb-3 text-3xl sm:text-4xl font-light tracking-tighter text-stone-900">
              LOGIN
            </h1>
            <div className="h-0.5 w-8 bg-stone-900 mb-4" />
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone-400 leading-loose">
              Access the secure portal with your <br /> student credentials.
            </p>
          </header>

          <form onSubmit={handleLogin} className="space-y-10 font-sans">
            {/* Student ID Input */}
            <div className="relative group">
              <label className="absolute -top-6 left-0 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 transition-all group-focus-within:text-stone-900 group-focus-within:-top-7">
               Student ID
              </label>
              <input 
                required
                type="text" 
                placeholder="2024-XXXXX" 
                className="w-full border-b border-stone-200 bg-transparent py-4 text-base text-black outline-none transition-all placeholder:text-stone-200 focus:border-stone-900"
              />
            </div>

            {/* Password Input */}
            <div className="relative group">
              <label className="absolute -top-6 left-0 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 transition-all group-focus-within:text-stone-900 group-focus-within:-top-7">
               Password
              </label>
              <input 
                required
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className="w-full border-b border-stone-200 bg-transparent py-4 text-base text-black outline-none transition-all placeholder:text-stone-200 focus:border-stone-900"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-300 transition-colors hover:text-stone-900 p-2"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            
            {/* Form Actions */}
            <div className="flex flex-col gap-6 pt-6">
              <button 
                disabled={isLoading}
                className="group relative flex items-center justify-between bg-stone-900 px-8 py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-stone-800 active:scale-[0.98] disabled:opacity-50 overflow-hidden"
              >
                <span className="relative z-10">
                  {isLoading ? "Verifying..." : "Sign In"}
                </span>
                <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
                
                {/* Subtle hover background effect */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button type="button" className="text-[10px] text-center font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-colors">
                Forgot Password?
              </button>
            </div>
          </form>

          
        </div>
      </section>

      <style jsx global>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInLeft {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeInDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media (min-width: 1024px) {
          @keyframes slideUp {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        }
      `}</style>
    </div>
  );
}
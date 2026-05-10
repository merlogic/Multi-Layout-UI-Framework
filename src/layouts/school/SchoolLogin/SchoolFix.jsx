import { User, Lock, MapPin, ChevronRight } from "lucide-react";

export default function SchoolFix({ handleLogin, isLoading }) {
  return (
    <div className="min-h-screen w-full bg-[#1a0b2e] flex items-center justify-center p-0 sm:p-4 md:p-6 font-sans relative overflow-hidden">
      
      <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-600/10 rounded-full blur-[80px] md:blur-[120px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:30px_30px]" />

      {/* MAIN CONTAINER: Vertical on mobile (flex-col), Horizontal on desktop (md:flex-row) */}
      <main className="relative z-10 w-full max-w-[850px] flex flex-col md:flex-row sm:rounded-[40px] overflow-hidden border border-white/5 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)] bg-[#25143a]">
        
        {/* LOGIN SECTION */}
        <section className="w-full md:w-[55%] bg-[#25143a]/90 backdrop-blur-xl p-8 sm:p-10 md:p-16 order-2 md:order-1">
          <div className="mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Welcome Back
            </h2>
            <p className="text-xs text-purple-200/50 mt-3 leading-relaxed">
              Login with your student credentials
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 md:space-y-8 max-w-full sm:max-w-[320px]">
            {/* Student ID */}
            <div className="group">
              <label className="text-[10px] font-bold uppercase tracking-widest text-purple-300/40 ml-1">
                Student Number
              </label>
              <div className="relative border-b-2 border-white/10 pt-1 group-focus-within:border-purple-500 transition">
                <input
                  type="text"
                  placeholder="e.g. 2024-00123"
                  required
                  className="w-full bg-transparent py-3 pr-8 text-sm text-white outline-none placeholder:text-white/10 font-mono"
                />
                <User size={16} className="absolute right-0 top-4 text-white/10 group-focus-within:text-purple-400" />
              </div>
            </div>

            {/* Password */}
            <div className="group">
              <label className="text-[10px] font-bold uppercase tracking-widest text-purple-300/40 ml-1">
                Password
              </label>
              <div className="relative border-b-2 border-white/10 pt-1 group-focus-within:border-purple-500 transition">
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="w-full bg-transparent py-3 pr-8 text-sm text-white outline-none placeholder:text-white/10"
                />
                <Lock size={16} className="absolute right-0 top-4 text-white/10 group-focus-within:text-purple-400" />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold uppercase tracking-[0.2em] transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20"
            >
              {isLoading ? "Signing In..." : "Sign In"}
              {!isLoading && <ChevronRight size={14} />}
            </button>

            {/* Links */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 pt-2">
              <button type="button" className="text-[10px] font-bold uppercase tracking-tight text-white/20 hover:text-purple-400 transition">
                Forgot Password?
              </button>
              <button type="button" className="text-[10px] font-bold uppercase tracking-tight text-white/20 hover:text-purple-400 transition">
                Contact Admin
              </button>
            </div>
          </form>
        </section>

        {/* INFO SECTION */}
        <aside className="w-full md:w-[45%] bg-[#1c0d35] border-b md:border-b-0 md:border-l border-white/5 p-8 sm:p-10 md:p-12 flex flex-col justify-between text-white relative order-1 md:order-2 overflow-hidden">
          <div className="relative z-10">
            

            <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
              University of
              <br />
              Rizal System
            </h3>

            <div className="w-10 h-1 bg-purple-500 rounded-full mt-4" />
          </div>

          <div className="space-y-4 relative z-10 mt-8 md:mt-0">
            <div className="flex items-center gap-3 text-purple-200/50">
              <MapPin size={14} className="text-purple-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Student Information System
              </span>
            </div>

            <p className="text-xs leading-relaxed text-purple-100/40 border-l border-purple-500/30 pl-4 max-w-[300px]">
              Access your grades, class schedule, and enrollment details through the official URS student portal.
            </p>
          </div>

          <div className="absolute -bottom-20 -right-20 w-48 h-48 md:w-64 md:h-64 bg-indigo-500/10 rounded-full blur-3xl" />
        </aside>
      </main>
    </div>
  );
}
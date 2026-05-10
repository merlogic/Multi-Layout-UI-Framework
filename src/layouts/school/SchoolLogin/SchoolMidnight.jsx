import { Eye, EyeOff, UserCircle, LayoutGrid } from "lucide-react";

export default function SchoolMidnight({ handleLogin, showPassword, setShowPassword, isLoading }) {
  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row bg-[#1e0a2d] font-sans antialiased overflow-x-hidden">
      
      {/* ---  HEADER / LEFT SIDE --- */}
      <section className="relative h-[35vh] md:h-screen w-full md:w-[55%] flex flex-col justify-center px-8 md:px-16 text-white z-10 overflow-hidden">
        {/* Background Blobs with Floating Animation */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute -left-10 -top-10 h-64 md:h-[500px] w-64 md:w-[500px] rounded-full bg-purple-600/30 blur-3xl animate-pulse" />
          <div className="absolute right-0 top-10 h-48 md:h-[400px] w-48 md:w-[400px] rounded-full bg-indigo-500/20 blur-3xl animate-pulse transition-all duration-1000 delay-700" />
        </div>

        {/* Decorative Wave */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" className="h-full w-full object-cover">
            <path fill="#FFFFFF" d="M45,-70C58.3,-62.7,69.2,-50.2,76.3,-35.8C83.4,-21.4,86.7,-5.1,84.1,10.1C81.5,25.3,73.1,39.4,61.8,49.8C50.5,60.2,36.4,66.9,21.8,71.2C7.2,75.5,-7.9,77.4,-22.4,74.1C-36.9,70.8,-50.8,62.2,-61.7,50.7C-72.6,39.2,-80.6,24.8,-83.4,9.3C-86.2,-6.2,-83.8,-22.8,-75.7,-36.4C-67.6,-50,-53.8,-60.6,-39.7,-67.5C-25.6,-74.4,-11.2,-77.6,3.4,-83.1C18,-88.6,31.7,-77.3,45,-70Z" transform="translate(100 100)" />
          </svg>
        </div>

        {/* Text Content with Slide-in Animation */}
        <div className="relative z-10 space-y-4 transition-all duration-1000 ease-out transform translate-y-0 opacity-100 motion-safe:animate-[fadeInUp_1s_ease-out]">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:rotate-12 transition-transform cursor-pointer">
            <LayoutGrid size={28} className="text-purple-300" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Welcome to <br className="hidden md:block" /> URS Portal
            </h1>
            <p className="mt-4 max-w-[340px] text-sm md:text-base leading-relaxed text-purple-100/60">
              Access the University of Rizal System student portal to manage your academics and records in one secure place.
            </p>
          </div>
          <button className="hidden md:block w-fit rounded-full bg-white/10 border border-white/20 px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white hover:text-[#1e0a2d]">
            Learn More
          </button>
        </div>
      </section>

      {/* ---  LOGIN SHEET / RIGHT SIDE --- */}
      {/* Animation: Slide up from bottom on mobile, Slide in from right on desktop */}
      <section className="relative z-20 flex-1 bg-white rounded-t-[40px] md:rounded-none shadow-[0_-15px_40px_rgba(0,0,0,0.2)] md:shadow-none mt-[-30px] md:mt-0 px-8 pt-10 md:pt-0 pb-10 flex flex-col justify-center items-center transition-all duration-700 ease-out transform animate-[slideUp_0.8s_ease-out]">
        
        {/* Mobile Drag Indicator */}
        <div className="absolute top-4 w-12 h-1.5 bg-gray-100 rounded-full md:hidden" />
        
        <div className="w-full max-w-[380px]">
          <header className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#1e0a2d] tracking-tight">Login</h2>
            <div className="h-1 w-8 bg-[#1e0a2d] rounded-full mt-2 mx-auto md:mx-0" />
          </header>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Student ID */}
            <div className="space-y-1.5">
              <label className="ml-1 text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400">
                Student ID
              </label>
              <div className="relative group">
                <input
                  required
                  type="text"
                  placeholder="e.g. C200-xxxx"
                  className="w-full rounded-2xl border-2 border-transparent bg-gray-50 px-6 py-4 text-sm text-[#1e0a2d] outline-none transition-all placeholder:text-gray-300 focus:bg-white focus:border-purple-100 focus:ring-4 focus:ring-purple-500/5"
                />
                <UserCircle size={20} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 transition-colors group-focus-within:text-purple-600" />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400">
                  Password
                </label>
                <button type="button" className="text-[11px] font-bold text-purple-600 hover:text-[#1e0a2d] transition-colors">
                  Forgot?
                </button>
              </div>
              <div className="relative group">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border-2 border-transparent bg-gray-50 px-6 py-4 text-sm text-[#1e0a2d] outline-none transition-all placeholder:text-gray-300 focus:bg-white focus:border-purple-100 focus:ring-4 focus:ring-purple-500/5"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-purple-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* --- REFINED LOGIN BUTTON --- */}
            <button
              disabled={isLoading}
              className="group relative w-full overflow-hidden bg-[#1e0a2d] text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-[#1e0a2d]/20 transition-all hover:shadow-[#1e0a2d]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:opacity-70"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                ) : (
                  <>
                    <span>Sign In</span>
                    <div className="w-0 group-hover:w-4 transition-all overflow-hidden opacity-0 group-hover:opacity-100">
                      →
                    </div>
                  </>
                )}
              </div>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <div className="text-center pt-4">
              <button type="button" className="text-[12px] text-gray-400 hover:text-[#1e0a2d] transition-colors">
                New student? <span className="text-purple-600 font-bold">Request Access</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Global CSS for custom animations */}
      <style jsx global>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 768px) {
          @keyframes slideUp {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        }
      `}</style>
    </div>
  );
}
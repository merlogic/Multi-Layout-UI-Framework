import { Eye, EyeOff, User, Lock } from "lucide-react";

export default function SchoolTemplate({ handleLogin, showPassword, setShowPassword, isLoading }) {
  return (
    <div className="min-h-screen w-full bg-[#f4f7f5] flex items-center justify-center p-0 sm:p-4 md:p-6 lg:p-8 antialiased font-sans text-[#1A1A1A]">
      
      {/* Animation & Spinner Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top-color: #fff;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}} />

      {/* MAIN CONTAINER */}
      <main className="bg-white w-full max-w-[1050px] min-h-screen sm:min-h-[600px] md:min-h-[700px] sm:rounded-[32px] md:rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex flex-col md:flex-row overflow-hidden border-none sm:border border-white">
        
        {/* HEADER / ILLUSTRATION SECTION 
            - Mobile: Green background, smaller height, curved bottom-left
            - Desktop: Soft green, 1/2 width, rounded inner margins
        */}
        <aside className="w-full md:w-1/2 bg-[#007D51] md:bg-[#F2F9F4] m-0 md:m-4 rounded-none md:rounded-[36px] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden order-1 md:order-2 min-h-[280px] md:min-h-auto rounded-bl-[80px] md:rounded-bl-[36px]">
          
          {/* Decorative Circles (Desktop only for clean mobile look) */}
          <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-white/10 rounded-full blur-3xl md:hidden" />
          
          <div className="w-32 h-32 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-white/10 md:bg-[#E8F5EE] rounded-full flex items-center justify-center relative">
            {/* Avatar Dots - Hidden on very small screens for space */}
            <div className="absolute top-0 right-0 w-10 h-10 md:w-16 md:h-16 rounded-full border-4 border-white shadow-md overflow-hidden bg-white hidden sm:block">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
            </div>

            <img 
              src="https://cdni.iconscout.com/illustration/premium/thumb/female-working-on-laptop-while-sitting-in-meditation-pose-4488734-3738435.png" 
              alt="Student Illustration" 
              className="w-[90%] md:w-[110%] relative z-10 animate-float drop-shadow-2xl" 
            />
          </div>

          <div className="mt-6 md:mt-14 text-center">
            <h2 className="text-xl md:text-3xl font-bold leading-tight text-white md:text-[#2D3A32] max-w-[280px] md:max-w-[320px]">
              Hello! <br className="md:hidden" />
              Welcome to <span className="md:text-[#64C28D]">URS App</span>
            </h2>
            {/* Pagination dots from reference */}
            <div className="flex justify-center gap-2 mt-4">
              <div className="h-1.5 w-1.5 rounded-full bg-white/30 md:bg-gray-200" />
              <div className="h-1.5 w-5 rounded-full bg-white md:bg-black" />
              <div className="h-1.5 w-1.5 rounded-full bg-white/30 md:bg-gray-200" />
            </div>
          </div>
        </aside>

        {/* FORM SECTION */}
        <section className="w-full md:w-1/2 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center bg-white order-2 md:order-1">
          <div className="mb-8 md:mb-10 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-[#2D3A32]">Login</h1>
            <p className="text-gray-400 text-xs md:text-sm">Please sign in to your student account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Student ID"
                required
                className="w-full bg-[#F9F9F9] border border-gray-100 rounded-full pl-12 pr-6 py-4 text-sm text-black outline-none focus:border-[#007D51] focus:bg-white transition-all placeholder:text-gray-300"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="w-full bg-[#F9F9F9] border border-gray-100 rounded-full pl-12 pr-14 py-4 text-sm text-black outline-none focus:border-[#007D51] focus:bg-white transition-all placeholder:text-gray-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-[#007D51] transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="text-right px-2">
              <button type="button" className="text-[11px] font-bold text-[#007D51] hover:underline uppercase tracking-wider">
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#007D51] text-white font-bold py-4 rounded-full hover:bg-[#006341] transition-all active:scale-[0.98] shadow-lg shadow-green-900/10 mt-2 flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {isLoading && <div className="spinner" />}
              <span>{isLoading ? "Authenticating..." : "Login"}</span>
            </button>
          </form>

          {/* Social Login Reference Section */}
          <div className="mt-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gray-100"></div>
              <span className="text-[10px] text-gray-300 uppercase tracking-[0.2em] font-bold">Or login with</span>
              <div className="flex-1 h-px bg-gray-100"></div>
            </div>
            
            
          </div>

          <footer className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              Don't have an account? <button className="text-[#007D51] font-bold hover:underline">Sign Up</button>
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
}
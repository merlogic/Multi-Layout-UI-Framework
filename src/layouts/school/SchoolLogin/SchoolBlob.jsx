import { User, Lock } from "lucide-react";

export default function SchoolBlob({ handleLogin, isLoading }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#5f9fff] via-[#feb47b] to-[#86a8e7] flex items-center justify-center p-0 sm:p-4 md:p-6 transition-all duration-700 font-sans">
      
      {/* Main Container */}
      <main className="bg-white w-full max-w-[900px] min-h-screen sm:min-h-[520px] sm:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col md:flex-row overflow-hidden border-none sm:border border-white">
        
        {/* LEFT SIDE (The Blobs) - Hidden on Mobile */}
        <section className="relative hidden md:flex md:w-1/2 bg-white overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="absolute w-[130%] h-[130%] bg-gradient-to-tr from-[#e95b5b] via-[#9167e2] to-[#feb47b] opacity-90 animate-pulse"
              style={{ 
                borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                transform: 'translate(-15%, -5%) rotate(-10deg)' 
              }} 
            />
            
            <div 
              className="absolute w-[110%] h-[110%] border-[25px] border-white/20"
              style={{ 
                borderRadius: '50% 50% 20% 80% / 50% 20% 80% 50%',
                transform: 'translate(-10%, 0%)' 
              }} 
            />

            <div 
              className="absolute bottom-[-10%] right-[10%] w-[180px] h-[180px] bg-[#feb47b] blur-xl opacity-60"
              style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} 
            />
          </div>
        </section>

        {/* RIGHT SIDE (The Login Form) */}
        <section className="w-full md:w-1/2 p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-white z-10">
          
          <div className="text-center mb-8 md:mb-12">
            {/* Mobile Logo Icon */}
            <div className="md:hidden mx-auto w-12 h-12 bg-gradient-to-tr from-[#ff7e5f] to-[#ff6b95] rounded-2xl rotate-12 mb-6 shadow-lg shadow-orange-200" />
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              Campus Login
            </h2>
            <p className="text-gray-500 text-xs mt-2 font-semibold uppercase tracking-widest">
              URS Student Portal
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 md:space-y-5 max-w-[320px] mx-auto w-full">
            {/* Student ID */}
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#ff7e5f] transition-colors">
                <User size={18} />
              </div>
              <input 
                type="text" 
                placeholder="Student ID"
                required
                className="w-full bg-gray-50 border-2 border-transparent rounded-xl pl-12 pr-6 py-4 text-sm text-black outline-none focus:bg-white focus:border-orange-100 focus:text-black transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Password */}
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#ff7e5f] transition-colors">
                <Lock size={18} />
              </div>
              <input 
                type="password" 
                placeholder="Password" 
                required
                className="w-full bg-gray-50 border-2 border-transparent rounded-xl pl-12 pr-6 py-4 text-sm text-black outline-none focus:bg-white focus:border-orange-100 focus:text-black transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Login Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-[#ff7e5f] to-[#ff6b95] text-white font-bold rounded-xl shadow-lg shadow-pink-200 hover:brightness-110 active:scale-[0.98] transition-all uppercase tracking-[0.2em] text-[10px] mt-2 disabled:opacity-70"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>

            {/* Bottom Links */}
            <div className="pt-6 flex flex-col items-center gap-4">
              <button type="button" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
                Forgot Password?
              </button>
              
              <div className="h-px w-8 bg-gray-200 md:hidden" />
              
              <p className="text-[10px] text-gray-900 font-medium uppercase tracking-tight text-center leading-relaxed">
                Official Student Management System <br/> 
                <span className="font-bold">University of Rizal System</span>
              </p>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
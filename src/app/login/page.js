import LoginForm from "@/components/main-components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[40%] h-96 bg-[#009dff52] blur-3xl rounded-full" />
        <div className="absolute bottom-1/2 right-0 w-[40%] h-96 bg-[#0026ff41] blur-3xl rounded-full" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">
              Welcome Back
            </h1>
            <p className="text-slate-400 text-sm mt-2">
              Login to your admin dashboard
            </p>
          </div>

          <LoginForm/>

          <p className="text-center text-xs text-slate-500 mt-6">
            © 2026 Admin Dashboard • All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
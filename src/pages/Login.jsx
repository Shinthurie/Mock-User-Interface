import React from 'react';
import { Lock, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <div className="mb-12 text-center">
        <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
          <div className="grid grid-cols-2 gap-1">
            <div className="w-2 h-2 bg-white/50"></div>
            <div className="w-2 h-2 bg-white"></div>
            <div className="w-2 h-2 bg-white"></div>
            <div className="w-2 h-2 bg-white/50"></div>
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">SME-GPT</h1>
        <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] mt-2 text-center">Enterprise Document Intelligence</p>
      </div>

      <div className="w-full max-w-sm space-y-5">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Business Email</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
            <input type="email" placeholder="name@company.com" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
            <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <button 
          onClick={() => navigate('/overview')}
          className="w-full bg-[#0a0a14] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
        >
          Sign In <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
}
import React from 'react';
import { 
  User, Building2, Briefcase, Users, 
  Languages, Search, ShieldCheck, 
  ChevronRight, LogOut 
} from 'lucide-react';

export default function Settings() {
  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Company Profile</h1>

      {/* User Header Card */}
      <div className="bg-white p-4 md:p-5 rounded-3xl shadow-sm border border-slate-100 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="relative flex-shrink-0">
          <div className="w-20 h-20 sm:w-16 sm:h-16 bg-orange-100 rounded-full overflow-hidden border-2 border-white shadow-sm">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Sarah" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-blue-600 p-1 rounded-full border-2 border-white">
            <ShieldCheck size={12} className="text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">Sarah Jeyasekara</h2>
          <p className="text-slate-400 text-sm">s.jeyasekara@enterprise-solutions.com</p>
          <span className="inline-block mt-3 md:mt-2 px-3 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-lg uppercase border border-blue-100">
            Admin Access
          </span>
        </div>
      </div>

      {/* Business Structure Section */}
      <section className="mb-8">
        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 mb-3">Business Structure</h3>
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 divide-y md:divide-y-0 md:divide-x divide-slate-50">
          <div className="p-4 flex items-center gap-4 md:flex-1">
            <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600"><Building2 size={20} /></div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase leading-none mb-1">Organization</p>
              <p className="font-bold text-slate-900 text-sm">Global Logistics Ltd</p>
            </div>
          </div>
          <div className="p-4 flex items-center gap-4 md:flex-1">
            <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600"><Briefcase size={20} /></div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase leading-none mb-1">Business Unit</p>
              <p className="font-bold text-slate-900 text-sm">Supply Chain & Distribution</p>
            </div>
          </div>
          <div className="p-4 flex items-center gap-4 md:flex-1">
            <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600"><Users size={20} /></div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase leading-none mb-1">Department</p>
              <p className="font-bold text-slate-900 text-sm">Accounts Payable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Document Processing Section */}
      <section className="mb-8">
        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 mb-3">Document Processing</h3>
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 divide-y md:divide-y-0 md:divide-x divide-slate-50">
          <div className="p-4 flex items-center gap-4 md:flex-1 justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600"><Languages size={20} /></div>
              <p className="font-bold text-slate-900 text-sm">Primary Language (සිංහල / English)</p>
            </div>
            <span className="text-blue-600 font-bold text-xs uppercase">English</span>
          </div>
          <div className="p-4 flex items-center gap-4 md:flex-1 justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600"><Search size={20} /></div>
              <p className="font-bold text-slate-900 text-sm">Auto-classify (Invoice/PO/DN)</p>
            </div>
            <div className="w-12 h-6 bg-blue-600 rounded-full relative p-1 cursor-pointer">
              <div className="absolute right-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Security Section */}
      <section className="mb-8">
        <h3 className="text-[10px] font-bold text-red-500 uppercase tracking-widest ml-1 mb-3">Corporate Security</h3>
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 divide-y md:divide-y-0 md:divide-x divide-slate-50">
          <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors md:flex-1">
            <div className="flex items-center gap-4">
              <div className="bg-red-50 p-2.5 rounded-xl text-red-500"><ShieldCheck size={20} /></div>
              <p className="font-bold text-slate-900 text-sm">Change Password</p>
            </div>
            <ChevronRight className="text-slate-300" size={18} />
          </button>
          <div className="p-4 flex items-center justify-between md:flex-1">
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600"><ShieldCheck size={20} /></div>
              <p className="font-bold text-slate-900 text-sm">Two-Factor Authentication</p>
            </div>
            <div className="w-12 h-6 bg-blue-600 rounded-full relative p-1">
              <div className="absolute right-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Out Button */}
      <button className="w-full bg-red-50 text-red-600 py-4 md:py-5 rounded-3xl font-bold flex items-center justify-center gap-3 border border-red-100 hover:bg-red-100 transition-all">
        <LogOut size={20} />
        Sign Out from SME-GPT
      </button>

      {/* Footer Branding */}
      <div className="text-center mt-10 opacity-30">
        <p className="text-[10px] font-bold uppercase tracking-widest">SME-GPT v3.1.0 Enterprise</p>
        <p className="text-[10px] uppercase">Audit Log: Active • ISO 27001 Compliant</p>
      </div>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import { Bell, Upload, Sparkles } from 'lucide-react';
import UploadCard from '../components/UploadCard';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function Overview() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showUpload, setShowUpload] = useState(() => searchParams.get('upload') === 'true');
  const navigate = useNavigate();

  useEffect(() => {
    const shouldOpen = searchParams.get('upload') === 'true';
    setShowUpload(shouldOpen);
  }, [searchParams]);

  return (
    <div className="relative">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-6 bg-white gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Document Intelligence</h1>
          <p className="text-slate-400 text-xs">SME Operations • Invoices & POs</p>
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <button aria-label="notifications" className="p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-200">
            <Bell className="text-slate-400" size={20} />
          </button>
          <button
            aria-label="profile"
            className="w-10 h-10 bg-orange-100 rounded-full border-2 border-white overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-200"
            onClick={() => navigate('/settings')}
            title="Open settings"
          >
            <img className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="user avatar" />
          </button>
        </div>
      </header>

      <div className="p-4 md:p-6 space-y-6">
        <button 
          onClick={() => setSearchParams({ upload: 'true' })}
          className="w-full bg-blue-600 text-white rounded-2xl py-5 shadow-lg flex flex-col items-center justify-center gap-2"
        >
          <Upload size={24} />
          <span className="font-semibold text-center">Upload Document / ලේඛනයක් එක් කරන්න</span>
        </button>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
            <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Total</p>
            <p className="text-2xl font-bold font-mono text-slate-800">482</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-orange-400 flex flex-col">
            <p className="text-[10px] text-orange-400 font-bold uppercase mb-1">Pending</p>
            <p className="text-2xl font-bold text-orange-500 font-mono">12</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-emerald-400 flex flex-col">
            <p className="text-[10px] text-emerald-400 font-bold uppercase mb-1">Ready</p>
            <p className="text-2xl font-bold text-emerald-500 font-mono">470</p>
          </div>
        </div>

        <div className="bg-blue-50 p-4 sm:p-5 rounded-2xl border border-blue-100 flex flex-col sm:flex-row gap-4 items-start">
          <div className="bg-white p-2 rounded-lg h-fit">
            <Sparkles className="text-blue-600" size={18} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-sm text-slate-900">Invoice Insights Ready</h3>
            <p className="text-[11px] text-slate-500 mt-1">Price discrepancy detected in Invoice #1234. View Comparison →</p>
          </div>
        </div>
      </div>

      {/* Upload Overlay Modal */}
      {showUpload && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <UploadCard onClose={() => { setSearchParams({}); }} />
        </div>
      )}
    </div>
  );
}
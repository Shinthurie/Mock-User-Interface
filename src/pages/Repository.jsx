import React, { useMemo, useState } from 'react';
import { Search, Plus, Filter, FileText, ShoppingCart, Truck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import docs from '../data/docs';

export default function Repository() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  const filteredDocs = useMemo(() => {
    if (activeTab === 'All') return docs;
    if (activeTab === 'Invoice') return docs.filter(d => d.type === 'INVOICE');
    if (activeTab === 'PO') return docs.filter(d => d.type === 'PURCHASE ORDER');
    if (activeTab === 'DN') return docs.filter(d => d.type === 'DELIVERY NOTE');
    return docs;
  }, [activeTab]);

  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold">Repository</h1>
          <p className="text-slate-400 text-xs">SME-GPT INTELLIGENCE</p>
        </div>
        <div className="flex gap-2 ml-auto">
          <button aria-label="search" className="p-2 bg-slate-100 rounded-full"><Search size={20} /></button>
          <button
            aria-label="create"
            title="Upload document"
            onClick={() => navigate('/overview?upload=true')}
            className="p-2 bg-blue-600 text-white rounded-full"
          >
            <Plus size={20} />
          </button>
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['All', 'Invoice', 'PO', 'DN'].map((tab) => (
          <button
            key={tab}
            aria-pressed={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-white border border-slate-200 text-slate-500'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Business Documents</h2>
        <Filter size={16} className="text-slate-400" />
      </div>

      {/* Responsive grid: 1 column on small, 2 on md, 3 on lg if needed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDocs.map((doc) => {
          // map string icon names to lucide components for display
          const Icon = doc.icon === 'FileText' ? FileText : doc.icon === 'ShoppingCart' ? ShoppingCart : Truck;

          return (
            <article
              key={doc.id}
              role="button"
              onClick={() => navigate(doc.type === 'DELIVERY NOTE' ? `/delivery-note/${doc.id}` : `/document/${doc.id}`)}
              className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 relative cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <div className={`${doc.bg} p-2 rounded-xl`}> 
                    <Icon className={doc.color} size={20} />
                  </div>
                  <div>
                    <p className={`text-[10px] font-bold ${doc.color}`}>{doc.type}</p>
                    <p className="text-lg font-bold text-slate-900">{doc.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">{doc.amount}</p>
                  <p className="text-[10px] text-slate-400">Amount Extracted</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-2 mb-4 text-sm">
                <p className="text-slate-400">Vendor/Client</p>
                <p className="text-right font-medium break-words">{doc.vendor}</p>
                <p className="text-slate-400">Date</p>
                <p className="text-right font-medium">{doc.date}</p>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-slate-50">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${doc.status === 'READY' ? 'bg-emerald-100 text-emerald-600' : 'bg-orange-100 text-orange-600'}`}>
                    {doc.status}
                  </span>
                  <span className="text-[10px] text-slate-400">සූදානම්</span>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); navigate(doc.type === 'DELIVERY NOTE' ? `/delivery-note/${doc.id}` : `/document/${doc.id}`); }}
                  className="text-blue-600 font-bold text-xs uppercase tracking-widest"
                >
                  Open
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
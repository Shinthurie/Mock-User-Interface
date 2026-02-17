import React from 'react';
import { Paperclip, Mic, Languages, Sparkles, Send } from 'lucide-react';

export default function Query() {
  return (
    <div className="p-6 flex flex-col h-[calc(100vh-80px)]">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Query Invoices & POs</h1>
        <p className="text-slate-500 text-sm mt-2 leading-relaxed">
          Ask questions about your invoices, delivery notes, or purchase orders in English or Sinhala.
        </p>
      </header>

      {/* Query Input Area */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex-grow mb-6 flex flex-col">
        <textarea 
          placeholder="What is the total amount in this invoice?&#10;කරුණාකර මෙම බිල්පතේ මුළු මුදල කියන්න?"
          className="w-full flex-grow resize-none text-slate-600 placeholder:text-slate-300 outline-none text-lg leading-relaxed"
        />
        
        <div className="flex justify-between items-center pt-4 border-t border-slate-50">
          <div className="flex gap-4 text-slate-400">
            <button className="hover:text-blue-600 transition-colors"><Paperclip size={22} /></button>
            <button className="hover:text-blue-600 transition-colors"><Mic size={22} /></button>
            <button className="hover:text-blue-600 transition-colors flex items-center gap-1">
              <Languages size={22} />
              <span className="text-[10px] font-bold uppercase">Auto-Detection active</span>
            </button>
          </div>
        </div>
      </div>

      {/* Insight Suggestion */}
      <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100 flex gap-4 mb-6">
        <div className="bg-blue-600 p-2 rounded-xl h-fit">
          <Sparkles className="text-white" size={18} />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900">
            <span className="text-blue-600">Insight:</span> You can ask about VAT details, vendor names, or specific quantities.
          </p>
        </div>
      </div>

      {/* Process Button */}
      <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-[0.98] transition-all">
        <Send size={20} />
        Process Query
      </button>

      {/* Tech Indicator Tags */}
      <div className="flex justify-center gap-8 mt-8 opacity-20 grayscale">
        <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-slate-400" />
            <span className="text-[10px] font-bold">OCR</span>
        </div>
        <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-slate-400" />
            <span className="text-[10px] font-bold">NLP</span>
        </div>
        <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-slate-400" />
            <span className="text-[10px] font-bold">XAI</span>
        </div>
      </div>
    </div>
  );
}
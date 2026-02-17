import React, { useState } from 'react';
import { Upload, CheckCircle2, X } from 'lucide-react'; // Install lucide-react for icons

const translations = {
  en: {
    title: 'Upload Invoice /PO / DN',
    desc: 'Process invoices, delivery notes, and purchase orders.',
    english: 'English',
    sinhala: 'Sinhala',
    drop: 'Drop Document Here',
    formats: 'PDF, JPG, PNG up to 20MB',
    browse: 'Browse Files',
    classification: 'Document Classification',
    detecting: 'Detecting Invoice/PO...',
    begin: 'Begin Extraction',
  },
  si: {
    title: 'ඉන්වොයිස් / PO / DN උඩුගත කරන්න',
    desc: 'ඉන්වොයිස්, බෙදාහැරීමේ සටහන්, හා මිලට ගැනීම් සැකසීම.',
    english: 'English',
    sinhala: 'සිංහල',
    drop: 'ලේඛනය මෙහි වැටුවහොත්',
    formats: 'PDF, JPG, PNG උපරිම 20MB',
    browse: 'ගොනු සොයා ගන්න',
    classification: 'ලේඛන වර්ගීකරණය'
    ,
    detecting: 'ඉන්වොයිස්/PO හඳුනා ගැනීම...',
    begin: 'නිකුත් කිරීම ආරම්භ කරන්න',
  }
};

const UploadCard = ({ onClose = () => {} }) => {
  const [lang, setLang] = useState('en');

  const t = translations[lang] || translations.en;

  return (
    <div className="w-full max-w-md mx-auto bg-white p-5 sm:p-6 rounded-3xl shadow-sm border border-slate-100">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{t.title}</h1>
          <p className="text-slate-500 text-sm">{t.desc}</p>
        </div>
        <button onClick={onClose} aria-label="Close upload" className="p-2 rounded-lg text-slate-500 hover:bg-slate-100">
          <X size={18} />
        </button>
      </div>

      {/* Language Toggle */}
      <div className="flex bg-slate-100 p-1 rounded-xl mb-4 w-full">
        <button
          aria-pressed={lang === 'en'}
          onClick={() => setLang('en')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium ${lang === 'en' ? 'bg-white shadow-sm' : 'text-slate-500'}`}
        >
          {t.english}
        </button>
        <button
          aria-pressed={lang === 'si'}
          onClick={() => setLang('si')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium ${lang === 'si' ? 'bg-white shadow-sm' : 'text-slate-500'}`}
        >
          {t.sinhala}
        </button>
      </div>

      {/* Dropzone */}
      <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center mb-4">
        <div className="bg-slate-50 p-3 rounded-full mb-3">
          <Upload className="text-slate-400" />
        </div>
        <p className="font-semibold text-center">{t.drop}</p>
        <p className="text-xs text-slate-400 mt-1">{t.formats}</p>
        <button className="mt-4 border border-slate-200 px-4 py-1.5 rounded-lg text-sm font-medium">{t.browse}</button>
      </div>

      {/* Progress Section */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-emerald-500 w-5 h-5" />
          <div>
            <p className="text-sm font-bold">{t.classification}</p>
            <p className="text-xs text-slate-400">{t.detecting}</p>
          </div>
        </div>
        {/* Add more steps here */}
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => { alert(t.begin); /* placeholder */ }}
          className="flex-1 bg-blue-600 text-white py-3 rounded-2xl font-bold hover:bg-blue-700 transition-colors"
        >
          {t.begin}
        </button>
        <button onClick={onClose} className="px-4 py-3 rounded-2xl border border-slate-200">Close</button>
      </div>
    </div>
  );
};

export default UploadCard;
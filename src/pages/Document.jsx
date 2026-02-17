import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import docs from '../data/docs';
import { ArrowLeft, FileText, ShoppingCart, Truck } from 'lucide-react';

export default function Document() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doc = docs.find(d => d.id === id);

  if (!doc) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <button onClick={() => navigate(-1)} className="mb-4 text-sm text-blue-600">← Back</button>
        <p className="text-center text-slate-500">Document not found</p>
      </div>
    );
  }

  const Icon = doc.icon === 'FileText' ? FileText : doc.icon === 'ShoppingCart' ? ShoppingCart : Truck;

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate(-1)} aria-label="back" className="p-2 rounded-md bg-slate-100">
          <ArrowLeft size={16} />
        </button>
        <div>
          <p className="text-xs text-slate-400">{doc.type}</p>
          <h1 className="text-xl font-bold">{doc.id}</h1>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className={`${doc.bg} p-2 rounded-lg`}><Icon className={doc.color} size={20} /></div>
            <div>
              <p className="text-sm font-medium">{doc.vendor}</p>
              <p className="text-xs text-slate-400">{doc.date}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold">{doc.amount}</p>
            <p className="text-xs text-slate-400">{doc.status}</p>
          </div>
        </div>

        <hr className="my-4" />

        <section className="text-sm">
          <h2 className="font-semibold mb-2">Extracted Fields</h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <dt className="text-slate-400 text-xs">Vendor/Client</dt>
              <dd className="font-medium">{doc.vendor}</dd>
            </div>
            <div>
              <dt className="text-slate-400 text-xs">Date</dt>
              <dd className="font-medium">{doc.date}</dd>
            </div>
            <div>
              <dt className="text-slate-400 text-xs">Amount</dt>
              <dd className="font-medium">{doc.amount}</dd>
            </div>
            <div>
              <dt className="text-slate-400 text-xs">Status</dt>
              <dd className="font-medium">{doc.status}</dd>
            </div>
          </dl>
        </section>

        {doc.type === 'DELIVERY NOTE' && (
          <section className="mt-6 bg-slate-50 p-3 rounded">
            <h3 className="font-semibold mb-2">Delivery Note</h3>
            <p className="text-sm text-slate-600">This is the delivery note view for {doc.id}. You can add delivered items, receiver name, and signatures here.</p>
            <div className="mt-3 flex gap-2">
              <button onClick={() => navigate(`/delivery-note/${doc.id}`)} className="bg-blue-600 text-white px-3 py-1 rounded">Open Delivery Note</button>
              <button onClick={() => alert('Download feature not implemented')} className="border border-slate-200 px-3 py-1 rounded">Download</button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

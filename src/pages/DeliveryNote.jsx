import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import docs from '../data/docs';
import { ArrowLeft } from 'lucide-react';

export default function DeliveryNote() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doc = docs.find(d => d.id === id && d.type === 'DELIVERY NOTE');

  if (!doc) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <button onClick={() => navigate(-1)} className="mb-4 text-sm text-blue-600">← Back</button>
        <p className="text-center text-slate-500">Delivery Note not found</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate(-1)} aria-label="back" className="p-2 rounded-md bg-slate-100">
          <ArrowLeft size={16} />
        </button>
        <div>
          <p className="text-xs text-slate-400">DELIVERY NOTE</p>
          <h1 className="text-xl font-bold">{doc.id}</h1>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <p className="text-sm text-slate-600">Destination: {doc.vendor}</p>
        <p className="text-sm text-slate-600">Date: {doc.date}</p>

        <hr className="my-4" />

        <div className="space-y-3">
          <div>
            <h4 className="font-semibold">Items Delivered</h4>
            <ul className="text-sm list-disc ml-5 text-slate-600">
              <li>Item A — 10 pcs</li>
              <li>Item B — 5 pcs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Received By</h4>
            <p className="text-sm text-slate-600">(Receiver name / signature)</p>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button onClick={() => alert('Mark as received — not implemented')} className="bg-emerald-600 text-white px-3 py-1 rounded">Mark Received</button>
          <button onClick={() => alert('Print — not implemented')} className="border border-slate-200 px-3 py-1 rounded">Print</button>
        </div>
      </div>
    </div>
  );
}

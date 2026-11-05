import React from 'react';
import { Phone, Calendar, ShieldCheck } from 'lucide-react';

export default function MobileStickyBar({ onOpenEstimate }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 p-2.5 md:hidden shadow-[0_-8px_20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2">
        {/* Click to Call Emergency Hotline Button */}
        <a
          href="tel:9193027306"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-xl bg-slate-900 border border-slate-700/80 text-white font-bold text-xs shadow-sm active:scale-95 transition"
        >
          <div className="relative">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 block animate-ping absolute"></span>
            <Phone className="w-4 h-4 text-amber-400 relative" />
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider">Emergency Call</span>
            <span className="text-xs font-mono font-bold">(919) 302-7306</span>
          </div>
        </a>

        {/* Free On-Site Estimate Request CTA */}
        <button
          onClick={onOpenEstimate}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 active:scale-95 transition"
        >
          <Calendar className="w-4 h-4" />
          <div className="flex flex-col text-left leading-none">
            <span className="text-[10px] text-slate-900 font-semibold lowercase">free on-site</span>
            <span className="text-xs font-black">Get Estimate</span>
          </div>
        </button>
      </div>
    </div>
  );
}

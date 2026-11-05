import React from 'react';

export default function Logo({ 
  variant = 'horizontal', // 'horizontal' | 'compact' | 'stacked'
  className = '', 
  showTagline = true,
  theme = 'dark'
}) {
  const isLight = theme === 'light';

  // 1. COMPACT (MOBILE NAVBAR)
  if (variant === 'compact') {
    return (
      <div className={`flex flex-col text-left select-none ${className}`}>
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-condensed font-black text-xl tracking-wider ${isLight ? 'text-slate-900' : 'text-white'}`}>
            CAROLINA
          </span>
          <span className="text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 px-1 py-0.5 rounded leading-none">
            NC
          </span>
        </div>
        <span className="font-condensed font-extrabold text-[11px] tracking-widest text-amber-500 leading-tight">
          EXCAVATION SPECIALTIES
        </span>
      </div>
    );
  }

  // 2. STACKED
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <span className="text-[10px] uppercase font-bold tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded-full mb-1">
          Raleigh &amp; Wake County, NC
        </span>
        <span className={`font-condensed font-black text-3xl md:text-4xl tracking-wider leading-none ${isLight ? 'text-slate-900' : 'text-white'}`}>
          CAROLINA
        </span>
        <span className="font-condensed font-extrabold text-base md:text-lg tracking-[0.2em] text-amber-500 leading-tight">
          EXCAVATION SPECIALTIES
        </span>
        {showTagline && (
          <span className="text-[11px] font-semibold text-slate-400 mt-1 tracking-wide">
            Septic Systems • Site Clearing • Precision Grading
          </span>
        )}
      </div>
    );
  }

  // 3. STANDARD HORIZONTAL (NAVBAR & FOOTER) - CLEAN TYPOGRAPHIC WORDMARK
  return (
    <div className={`flex flex-col text-left justify-center cursor-pointer select-none whitespace-nowrap group ${className}`}>
      {/* Geographic authority badge */}
      <div className="flex items-center gap-1.5 mb-0.5">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
        <span className="text-[9px] font-bold uppercase tracking-wider text-amber-400 font-sans">
          Raleigh &amp; Wake County, NC
        </span>
        <span className="text-[9px] text-slate-500">•</span>
        <span className="text-[9px] font-semibold text-slate-400 font-sans hidden sm:inline">
          Lic. Septic Contractor
        </span>
      </div>
      
      {/* Main Brand Title */}
      <div className="flex items-baseline gap-1.5 leading-none">
        <span className={`font-condensed font-black text-2xl tracking-wide leading-none ${isLight ? 'text-slate-900' : 'text-white'}`}>
          CAROLINA
        </span>
        <span className="font-condensed font-extrabold text-sm tracking-wider text-amber-500 leading-none">
          EXCAVATION SPECIALTIES
        </span>
      </div>

      {/* Core Subtitle */}
      {showTagline && (
        <span className="text-[10px] font-medium tracking-wide text-slate-400 font-sans leading-none mt-1">
          Septic Installation • Land Clearing • Finish Grading
        </span>
      )}
    </div>
  );
}

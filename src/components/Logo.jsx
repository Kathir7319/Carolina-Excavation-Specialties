import React from 'react';

export default function Logo({ 
  variant = 'horizontal', // 'horizontal' | 'compact' | 'stacked' | 'icon'
  className = '', 
  showTagline = true,
  theme = 'dark'
}) {
  const isLight = theme === 'light';

  // MODERN INDUSTRIAL EXCAVATOR BADGE EMBLEM (38px x 38px)
  const renderEmblem = (size = 38) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
    >
      <defs>
        <linearGradient id="logoAmberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="logoShieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0B0F19" />
        </linearGradient>
        <linearGradient id="logoClayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B44C28" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
        <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#F59E0B" floodOpacity="0.4"/>
        </filter>
      </defs>

      {/* Hexagonal Contractor Shield */}
      <polygon 
        points="50,4 92,26 92,74 50,96 8,74 8,26" 
        fill="url(#logoShieldGrad)" 
        stroke="url(#logoAmberGrad)" 
        strokeWidth="3.5" 
        strokeLinejoin="round" 
        filter="url(#logoGlow)"
      />

      {/* Inner Inset Border */}
      <polygon 
        points="50,10 86,29 86,71 50,90 14,71 14,29" 
        fill="#080D1A" 
        stroke="#334155" 
        strokeWidth="1.2" 
        opacity="0.8" 
      />

      {/* Wake County Red Clay Ground Layer */}
      <path 
        d="M14 65 Q 32 60, 50 63 T 86 60 L 86 71 L 50 90 L 14 71 Z" 
        fill="url(#logoClayGrad)" 
        opacity="0.95" 
      />
      <path 
        d="M14 70 L 50 89 L 86 70" 
        stroke="#F59E0B" 
        strokeWidth="1.5" 
        fill="none" 
        opacity="0.7" 
      />

      {/* Carolina Pine Crest Silhouette */}
      <path d="M50 20 L54 28 L51 28 L56 36 L44 36 L49 28 L46 28 Z" fill="#22C55E" opacity="0.9" />

      {/* Heavy Excavator Arm (Boom & Hydraulic Ram) */}
      <path d="M24 58 L 38 34 L 46 38 L 34 62 Z" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.2" />
      <path d="M31 52 L 47 43" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />

      {/* Heavy Excavator Digging Bucket */}
      <path 
        d="M43 42 L 61 37 L 72 50 L 64 64 L 46 62 Z" 
        fill="url(#logoAmberGrad)" 
        stroke="#78350F" 
        strokeWidth="1.5" 
        strokeLinejoin="round" 
      />

      {/* Trenching Bucket Teeth */}
      <polygon points="72,50 80,53 74,55" fill="#FFFFFF" stroke="#D97706" strokeWidth="0.8" />
      <polygon points="70,55 78,59 71,61" fill="#FFFFFF" stroke="#D97706" strokeWidth="0.8" />
      <polygon points="66,61 73,66 67,67" fill="#FFFFFF" stroke="#D97706" strokeWidth="0.8" />

      {/* Heavy Mechanical Pivot Rivets */}
      <circle cx="46" cy="38" r="2.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="1" />
      <circle cx="61" cy="37" r="2.2" fill="#0F172A" stroke="#FFFFFF" strokeWidth="1" />
      <circle cx="46" cy="62" r="2" fill="#0F172A" stroke="#FFFFFF" strokeWidth="1" />
    </svg>
  );

  // 1. ICON ONLY
  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {renderEmblem(40)}
      </div>
    );
  }

  // 2. COMPACT (MOBILE NAVBAR)
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 select-none ${className}`}>
        {renderEmblem(34)}
        <div className="flex flex-col text-left leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`font-condensed font-black text-xl tracking-wider ${isLight ? 'text-slate-900' : 'text-white'}`}>
              CAROLINA
            </span>
            <span className="text-[9px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 px-1 py-0.2 rounded">
              NC
            </span>
          </div>
          <span className="font-condensed font-extrabold text-[10px] tracking-widest text-amber-500 mt-0.5">
            EXCAVATION SPECIALTIES
          </span>
        </div>
      </div>
    );
  }

  // 3. STACKED
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {renderEmblem(56)}
        <span className="text-[10px] uppercase font-bold tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded-full mt-2 mb-1">
          Raleigh &amp; Wake County, NC
        </span>
        <span className={`font-condensed font-black text-3xl tracking-wider leading-none ${isLight ? 'text-slate-900' : 'text-white'}`}>
          CAROLINA
        </span>
        <span className="font-condensed font-extrabold text-base tracking-[0.2em] text-amber-500 leading-tight">
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

  // 4. STANDARD HORIZONTAL (NAVBAR & FOOTER) - EMBLEM + CRISP TYPOGRAPHY
  return (
    <div className={`flex items-center gap-2.5 xl:gap-3 group cursor-pointer select-none whitespace-nowrap ${className}`}>
      {/* Sleek Emblem Badge */}
      {renderEmblem(38)}

      {/* Brand Typography */}
      <div className="flex flex-col text-left justify-center">
        {/* Geographic authority badge */}
        <div className="flex items-center gap-1.5 mb-0.5 leading-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
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
    </div>
  );
}

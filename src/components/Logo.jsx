import React from 'react';

export default function Logo({ 
  variant = 'horizontal', // 'horizontal' | 'compact' | 'stacked' | 'icon' | 'badge'
  className = '', 
  showTagline = true,
  theme = 'dark' // 'dark' | 'light'
}) {
  const isLight = theme === 'light';

  // ICON EMBLEM (HEXAGONAL HEAVY-DUTY SHIELD WITH EXCAVATOR & CAROLINAS MOTIF)
  const renderEmblem = (size = 46) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
    >
      <defs>
        <linearGradient id={`goldGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id={`shieldGrad-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0B0F19" />
        </linearGradient>
        <linearGradient id={`clayGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B44C28" />
          <stop offset="100%" stopColor="#E05E32" />
        </linearGradient>
        <filter id={`glow-${variant}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#F59E0B" floodOpacity="0.4"/>
        </filter>
      </defs>

      {/* Hexagonal Shield */}
      <polygon 
        points="60,6 108,32 108,88 60,114 12,88 12,32" 
        fill={`url(#shieldGrad-${variant})`} 
        stroke={`url(#goldGrad-${variant})`} 
        strokeWidth="3.5" 
        strokeLinejoin="round" 
        filter={`url(#glow-${variant})`} 
      />
      
      {/* Inset Border */}
      <polygon 
        points="60,13 102,36 102,84 60,107 18,84 18,36" 
        fill="#070B13" 
        stroke="#334155" 
        strokeWidth="1.5" 
        opacity="0.9" 
      />

      {/* Carolina Pines Silhouette */}
      <path d="M60 27 L66 38 L63 38 L69 49 L51 49 L57 38 L54 38 Z" fill="#22C55E" opacity="0.95" />
      <path d="M43 35 L47 42 L45 42 L49 51 L37 51 L41 42 L39 42 Z" fill="#15803D" opacity="0.8" />
      <path d="M77 35 L81 42 L79 42 L83 51 L71 51 L75 42 L73 42 Z" fill="#15803D" opacity="0.8" />

      {/* Raleigh / Wake County Red Clay Ground Cut */}
      <path d="M19 76 Q 40 70, 60 74 T 101 70 L 101 84 L 60 107 L 19 84 Z" fill={`url(#clayGrad-${variant})`} opacity="0.95" />
      <path d="M19 83 L 60 106 L 101 83" stroke="#F59E0B" strokeWidth="2" fill="none" opacity="0.8" />

      {/* Excavator Arm */}
      <path d="M30 70 L 46 42 L 55 47 L 41 75 Z" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.5" />
      <path d="M38 62 L 57 51" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
      
      {/* Heavy Excavator Bucket */}
      <path d="M51 51 L 72 45 L 85 61 L 76 77 L 55 75 Z" fill={`url(#goldGrad-${variant})`} stroke="#78350F" strokeWidth="2" strokeLinejoin="round" />
      
      {/* Bucket Teeth */}
      <polygon points="85,61 95,64 88,67" fill="#FFFFFF" stroke="#D97706" strokeWidth="1" />
      <polygon points="83,68 93,72 85,74" fill="#FFFFFF" stroke="#D97706" strokeWidth="1" />
      <polygon points="78,74 86,80 79,81" fill="#FFFFFF" stroke="#D97706" strokeWidth="1" />

      {/* Heavy Mechanical Rivets */}
      <circle cx="55" cy="47" r="3.2" fill="#0F172A" stroke="#FFFFFF" strokeWidth="1.2" />
      <circle cx="72" cy="45" r="2.8" fill="#0F172A" stroke="#FFFFFF" strokeWidth="1.2" />
      <circle cx="55" cy="75" r="2.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="1.2" />
    </svg>
  );

  // 1. ICON ONLY
  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {renderEmblem(48)}
      </div>
    );
  }

  // 2. CIRCULAR STAMP BADGE
  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <img 
          src="/logo-badge.svg" 
          alt="Carolina Excavation Specialties Licensed Badge" 
          className="w-32 h-32 md:w-40 md:h-40 filter drop-shadow-xl hover:rotate-2 transition-transform duration-300"
        />
      </div>
    );
  }

  // 3. COMPACT (MOBILE NAVBAR)
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        {renderEmblem(36)}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className={`font-condensed font-black text-xl tracking-wider leading-none ${isLight ? 'text-slate-900' : 'text-white'}`}>
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
      </div>
    );
  }

  // 4. STACKED (HERO OR BRAND KIT)
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {renderEmblem(72)}
        <div className="mt-3 flex flex-col items-center">
          <span className="text-[10px] uppercase font-bold tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded-full mb-1">
            Raleigh & Wake County, NC
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
      </div>
    );
  }

  // 5. STANDARD HORIZONTAL (DEFAULT FOR NAVBAR & FOOTER)
  return (
    <div className={`flex items-center gap-3 group cursor-pointer whitespace-nowrap select-none ${className}`}>
      {renderEmblem(44)}
      <div className="flex flex-col text-left justify-center">
        {/* Geographic authority badge */}
        <div className="flex items-center gap-1.5 mb-0.5">
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
        <div className="flex items-baseline gap-1.5">
          <span className={`font-condensed font-black text-2xl tracking-wide leading-none ${isLight ? 'text-slate-900' : 'text-white'}`}>
            CAROLINA
          </span>
          <span className="font-condensed font-extrabold text-sm xl:text-base tracking-wider text-amber-500 leading-none">
            EXCAVATION SPECIALTIES
          </span>
        </div>

        {/* Core Subtitle */}
        {showTagline && (
          <span className="text-[10px] font-medium tracking-wide text-slate-400 font-sans leading-none mt-1 hidden 2xl:block">
            Septic Installation • Land Clearing • Finish Grading
          </span>
        )}
      </div>
    </div>
  );
}

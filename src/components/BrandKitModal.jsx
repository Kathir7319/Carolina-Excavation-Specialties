import React, { useState } from 'react';
import { X, Download, Copy, Check, ShieldCheck, Sparkles, Layers, Palette, Eye } from 'lucide-react';
import Logo from './Logo';

export default function BrandKitModal({ isOpen, onClose }) {
  const [copiedColor, setCopiedColor] = useState(null);
  const [previewTheme, setPreviewTheme] = useState('dark');

  if (!isOpen) return null;

  const brandColors = [
    { name: 'Safety Amber', hex: '#F59E0B', role: 'Primary Brand / Excavator Accent', text: 'dark' },
    { name: 'Heavy Iron Slate', hex: '#0F172A', role: 'Primary Dark Base / Industrial Strength', text: 'light' },
    { name: 'Wake Red Clay', hex: '#B44C28', role: 'Geographic Accent (Native NC Soil)', text: 'light' },
    { name: 'Carolina Pine', hex: '#16A34A', role: 'Certification / Trust Badge', text: 'light' },
    { name: 'Industrial Steel', hex: '#E2E8F0', role: 'Hydraulic & Mechanical Highlights', text: 'dark' },
  ];

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-condensed font-black tracking-wider text-white flex items-center gap-2">
                OFFICIAL BRAND IDENTITY &amp; LOGO SUITE
                <span className="text-xs font-sans font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40 px-2 py-0.5 rounded-full">
                  Vector SVG Ready
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Created custom for Carolina Excavation Specialties • Raleigh &amp; Wake County, NC
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          {/* Theme switcher */}
          <div className="flex items-center justify-between bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Eye className="w-4 h-4 text-amber-400" />
              Preview Canvas Background:
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setPreviewTheme('dark')}
                className={`px-3 py-1 text-xs font-bold rounded-lg border transition ${
                  previewTheme === 'dark' 
                    ? 'bg-slate-800 text-amber-400 border-amber-500/50' 
                    : 'bg-transparent text-slate-400 border-slate-700'
                }`}
              >
                Dark (Industrial Slate)
              </button>
              <button
                onClick={() => setPreviewTheme('light')}
                className={`px-3 py-1 text-xs font-bold rounded-lg border transition ${
                  previewTheme === 'light' 
                    ? 'bg-amber-100 text-slate-900 border-amber-500' 
                    : 'bg-transparent text-slate-400 border-slate-700'
                }`}
              >
                Light (Blueprint / Paper)
              </button>
            </div>
          </div>

          {/* Logo Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Primary Horizontal Brandmark */}
            <div className={`p-6 rounded-2xl border transition ${
              previewTheme === 'dark' 
                ? 'bg-slate-950 border-slate-800' 
                : 'bg-white border-slate-300'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                  Primary Horizontal Lockup
                </span>
                <a 
                  href="/logo.svg" 
                  download="carolina-excavation-logo.svg"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-amber-500 text-slate-950 hover:bg-amber-400 transition"
                >
                  <Download className="w-3.5 h-3.5" /> SVG
                </a>
              </div>
              <div className="py-6 flex items-center justify-center">
                <Logo variant="horizontal" theme={previewTheme} showTagline={true} />
              </div>
              <p className="text-[11px] text-slate-400 mt-2 border-t border-slate-800 pt-2">
                Ideal for website headers, vehicle vinyl wraps, signage, uniforms, and invoices.
              </p>
            </div>

            {/* 2. Heavy Hexagonal Emblem Mark */}
            <div className={`p-6 rounded-2xl border transition ${
              previewTheme === 'dark' 
                ? 'bg-slate-950 border-slate-800' 
                : 'bg-white border-slate-300'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                  Hex Shield Emblem (Icon)
                </span>
                <a 
                  href="/logo-icon.svg" 
                  download="carolina-excavation-emblem.svg"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-amber-500 text-slate-950 hover:bg-amber-400 transition"
                >
                  <Download className="w-3.5 h-3.5" /> SVG
                </a>
              </div>
              <div className="py-4 flex items-center justify-center">
                <Logo variant="icon" />
              </div>
              <p className="text-[11px] text-slate-400 mt-2 border-t border-slate-800 pt-2">
                Features excavator digging bucket, Wake County red clay cut, and Carolina pines. Favicon &amp; app icon.
              </p>
            </div>

            {/* 3. Official Contractor Stamp Seal */}
            <div className={`p-6 rounded-2xl border transition ${
              previewTheme === 'dark' 
                ? 'bg-slate-950 border-slate-800' 
                : 'bg-white border-slate-300'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                  Official Contractor Authority Seal
                </span>
                <a 
                  href="/logo-badge.svg" 
                  download="carolina-excavation-seal.svg"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-amber-500 text-slate-950 hover:bg-amber-400 transition"
                >
                  <Download className="w-3.5 h-3.5" /> SVG
                </a>
              </div>
              <div className="py-2 flex items-center justify-center">
                <Logo variant="badge" />
              </div>
              <p className="text-[11px] text-slate-400 mt-2 border-t border-slate-800 pt-2">
                Certified Wake County contractor stamp for warranty certificates, permit packets &amp; trust badges.
              </p>
            </div>

            {/* 4. Stacked Badge Lockup */}
            <div className={`p-6 rounded-2xl border transition ${
              previewTheme === 'dark' 
                ? 'bg-slate-950 border-slate-800' 
                : 'bg-white border-slate-300'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                  Stacked Centered Lockup
                </span>
                <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  Responsive
                </span>
              </div>
              <div className="py-3 flex items-center justify-center">
                <Logo variant="stacked" theme={previewTheme} />
              </div>
              <p className="text-[11px] text-slate-400 mt-2 border-t border-slate-800 pt-2">
                Ideal for merchandise, trailer tailgates, yard signs, and billboard placements.
              </p>
            </div>
          </div>

          {/* Color Palette Specification */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Palette className="w-5 h-5 text-amber-500" />
              <h3 className="text-base font-condensed font-black tracking-wider text-white">
                OFFICIAL COLOR PALETTE &amp; TOKENS
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {brandColors.map((color) => (
                <div 
                  key={color.hex}
                  onClick={() => handleCopy(color.hex)}
                  className="group relative cursor-pointer bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-amber-500/50 transition p-2.5"
                >
                  <div 
                    className="w-full h-14 rounded-lg mb-2 shadow-inner flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: color.hex, color: color.text === 'light' ? '#FFF' : '#0F172A' }}
                  >
                    {copiedColor === color.hex ? (
                      <span className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded text-white text-[11px]">
                        <Check className="w-3 h-3 text-emerald-400" /> Copied!
                      </span>
                    ) : (
                      <span className="opacity-0 group-hover:opacity-100 transition flex items-center gap-1 bg-black/30 px-1.5 py-0.5 rounded text-[10px]">
                        <Copy className="w-3 h-3" /> Copy
                      </span>
                    )}
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white leading-tight">{color.name}</p>
                    <p className="text-[11px] font-mono text-amber-400 font-bold">{color.hex}</p>
                    <p className="text-[9px] text-slate-400 mt-0.5 leading-snug">{color.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography & Design Narrative */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2">
            <h4 className="font-condensed font-bold text-sm text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Logo Design Rationale &amp; Wake County Context
            </h4>
            <p>
              • <strong>Excavator Bucket &amp; Trenching Cutters:</strong> Directly represents high-ticket septic excavation and heavy site grading equipment.
            </p>
            <p>
              • <strong>Wake County Red Clay Stratum:</strong> The burnt terracotta red-clay cut specifically highlights Carolina Excavation Specialties' localized expertise in digging and installing systems through North Carolina’s notoriously tough clay soil.
            </p>
            <p>
              • <strong>Carolina Pines &amp; Shield:</strong> Evokes local authority, long-term durability, and structural defense.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-400">
            All logo files are rendered natively as vector SVGs for infinite scalability.
          </span>
          <div className="flex gap-2">
            <a 
              href="/logo.svg" 
              download="Carolina-Excavation-Full-Logo.svg"
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Download className="w-4 h-4" />
              Download All SVG Logos
            </a>
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl transition"
            >
              Close Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

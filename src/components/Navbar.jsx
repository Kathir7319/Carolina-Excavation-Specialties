import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Shield, Sparkles, MapPin, AlertCircle, ChevronRight } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ activePage, setActivePage, onOpenBrandKit }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'septic', label: 'Septic Installation & Repair' },
    { id: 'excavation', label: 'Excavation & Grading' },
    { id: 'contact', label: 'Contact & Estimates' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. TOP EMERGENCY & AUTHORITY ANNOUNCEMENT BAR */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2 px-4 text-slate-300 relative z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left badge */}
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-slate-200">
              Wake County Authorized Septic Installer &amp; Heavy Excavator
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              Serving Raleigh, Cary, Apex, Wake Forest &amp; Greater Wake Co.
            </span>
          </div>

          {/* Right quick contact & brand kit trigger */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBrandKit}
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold text-[11px] bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded transition"
              title="Inspect newly designed vector logo & brand identity"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Logo &amp; Brand Kit</span>
            </button>

            <a 
              href="tel:9193027306" 
              className="flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>24/7 Dispatch: (919) 302-7306</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-3 xl:gap-6">
            {/* Brand Logo */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex-shrink-0 cursor-pointer flex items-center"
            >
              <div className="hidden sm:block">
                <Logo variant="horizontal" />
              </div>
              <div className="sm:hidden">
                <Logo variant="compact" />
              </div>
            </div>

            {/* Desktop Navigation Links (Strictly aligned on single baseline) */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 xl:px-3.5 py-2 rounded-lg font-semibold text-xs xl:text-sm whitespace-nowrap transition-all duration-200 relative flex items-center justify-center h-10 ${
                      isActive
                        ? 'text-amber-400 font-bold bg-amber-500/15 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Action Buttons (Desktop - Cleanly centered with h-10 matching nav) */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <a
                href="tel:9193027306"
                className="flex items-center gap-2 px-3 xl:px-3.5 py-2 rounded-xl text-xs font-bold text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-amber-500/40 hover:text-white transition whitespace-nowrap h-10 shrink-0"
              >
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0"></div>
                <span className="font-mono">Emergency: (919) 302-7306</span>
              </a>

              <button
                onClick={() => handleNavClick('contact')}
                className="flex items-center gap-2 px-3.5 xl:px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 active:scale-95 transition whitespace-nowrap h-10 shrink-0"
              >
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>Free On-Site Estimate</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:9193027306"
                className="p-2.5 rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 transition"
                aria-label="Call Emergency Hotline"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 transition border border-slate-800"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* 3. MOBILE MENU DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-slate-950/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            {/* Mobile Nav Links */}
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition ${
                      isActive
                        ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-60" />
                  </button>
                );
              })}
            </div>

            {/* Mobile Brand Kit & Logo Access */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrandKit();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-900 border border-amber-500/30 text-amber-400"
            >
              <Sparkles className="w-4 h-4" />
              <span>Inspect Logo &amp; Brand Assets</span>
            </button>

            {/* Mobile Call-To-Action */}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href="tel:9193027306"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-white text-center"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>Call Hotline</span>
              </a>

              <button
                onClick={() => handleNavClick('contact')}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Get Estimate</span>
              </button>
            </div>

            {/* Trust badge */}
            <div className="text-center pt-2">
              <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                Wake County Licensed &bull; $2,000,000 Liability Insured
              </p>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

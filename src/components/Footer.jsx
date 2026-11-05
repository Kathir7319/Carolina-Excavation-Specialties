import React from 'react';
import { Phone, MapPin, Mail, Shield, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

// Clean SVG icon for Facebook
const FacebookIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function Footer({ setActivePage }) {
  const serviceAreas = [
    'Raleigh (Downtown & Midtown)',
    'Wake Forest',
    'Cary & Morrisville',
    'Apex',
    'Holly Springs',
    'Fuquay-Varina',
    'Garner',
    'Knightdale',
    'Wendell & Zebulon',
    'Rolesville & North Wake'
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Brand & Authority */}
          <div className="lg:col-span-2 space-y-4">
            <div onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="cursor-pointer inline-block">
              <Logo variant="horizontal" />
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Carolina Excavation Specialties is Raleigh &amp; Wake County&apos;s premier heavy equipment contractor for residential &amp; commercial septic installation, emergency tank replacements, land clearing, and laser-guided grading.
            </p>

            {/* Wake County Trust Badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <Shield className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-semibold">Wake County Licensed Septic</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold">$2,000,000 Liability Insured</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-semibold">NC Certified Contractor</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-condensed font-bold text-base tracking-wider uppercase">
              Authority Pages
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition flex items-center gap-1.5 text-left"
                >
                  <ArrowUpRight className="w-3 h-3 text-amber-500" />
                  Home Authority Page
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('septic'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition flex items-center gap-1.5 text-left"
                >
                  <ArrowUpRight className="w-3 h-3 text-amber-500" />
                  Septic Installation &amp; Repair
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('excavation'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition flex items-center gap-1.5 text-left"
                >
                  <ArrowUpRight className="w-3 h-3 text-amber-500" />
                  Excavation &amp; Precision Grading
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition flex items-center gap-1.5 text-left"
                >
                  <ArrowUpRight className="w-3 h-3 text-amber-500" />
                  Contact &amp; Estimate Request
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Target Wake County Markets */}
          <div className="space-y-3">
            <h4 className="text-white font-condensed font-bold text-base tracking-wider uppercase">
              Wake County Service Areas
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {serviceAreas.slice(0, 6).map((city) => (
                <li key={city} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>{city}</span>
                </li>
              ))}
              <li className="text-[11px] text-amber-400/90 pt-1 font-semibold">
                + All surrounding Wake &amp; Johnston counties
              </li>
            </ul>
          </div>

          {/* Col 5: Dispatch & Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-condensed font-bold text-base tracking-wider uppercase">
              Dispatch &amp; Contact
            </h4>
            <div className="space-y-3 text-xs">
              <a 
                href="tel:9193027306" 
                className="flex items-center gap-2.5 text-white hover:text-amber-400 font-mono font-bold text-sm bg-slate-900 p-2.5 rounded-xl border border-slate-800 transition"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>(919) 302-7306</span>
              </a>

              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Raleigh, Wake County, North Carolina</span>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>estimates@carolinaexcavationspec.com</span>
              </div>

              {/* Facebook Page link */}
              <div className="pt-2">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400 hover:bg-blue-600/20 text-xs font-semibold transition"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                  <span>Join Our Facebook Community</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Carolina Excavation Specialties LLC. All rights reserved. Registered in North Carolina.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>NC Septic Installer Lic. #WK-8492</span>
            <span>&bull;</span>
            <span>EPA Certified</span>
            <span>&bull;</span>
            <span>OSHA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

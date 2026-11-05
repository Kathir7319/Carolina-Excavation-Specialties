import React, { useState } from 'react';
import { 
  Phone, Calendar, ShieldCheck, Award, CheckCircle2, ArrowRight, 
  Truck, Star, MapPin, Hammer, Wrench, FileCheck, AlertTriangle, 
  ChevronRight, Calculator, Sparkles, Building2, Check
} from 'lucide-react';
import Logo from '../components/Logo';

// Clean SVG icon for Facebook
const FacebookIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function HomePage({ setActivePage }) {
  // Quick estimate hero state
  const [estimateData, setEstimateData] = useState({
    name: '',
    phone: '',
    service: 'Septic System Installation / Replacement',
    city: 'Raleigh'
  });
  const [submittedHero, setSubmittedHero] = useState(false);

  // Interactive ROI & Budget Calculator State
  const [projectType, setProjectType] = useState('full-replacement');
  const [tankSize, setTankSize] = useState('1000');
  const [soilComplexity, setSoilComplexity] = useState('clay');

  const calculateEstimate = () => {
    let base = 8500;
    if (projectType === 'new-install') base = 11500;
    if (projectType === 'drainfield-only') base = 6200;
    if (projectType === 'commercial') base = 18000;

    if (tankSize === '1500') base += 2200;
    if (tankSize === '2000') base += 4500;

    if (soilComplexity === 'rocky') base += 1800;
    if (soilComplexity === 'heavy-clay') base += 1200;

    return {
      min: base - 1000,
      max: base + 2400
    };
  };

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    setSubmittedHero(true);
    setTimeout(() => {
      setActivePage('contact');
    }, 1200);
  };

  const fleetItems = [
    {
      title: 'CAT 315 Next-Gen Excavator',
      category: 'Deep Trenching & Mass Earthmoving',
      badge: 'Company Owned Equipment',
      specs: '37,000 lbs • 19.8 ft Max Dig Depth • GPS Grade Control',
      desc: 'Heavy hydraulic muscle designed to penetrate Wake County compacted red clay and set massive 1,500-gallon concrete septic tanks without delay.',
      img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Bobcat T770 Compact Track Loader',
      category: 'Low-Ground Pressure Finish Grading',
      badge: 'Turf Protection Tracks',
      specs: '92 HP • Wide Rubber Tracks • Precision Laser Box Blade',
      desc: 'Distributes weight evenly over manicured residential lawns. Ideal for tight-access drainfield repairs, backfilling, and seedbed preparation.',
      img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Kenworth Heavy Tri-Axle Dump Trucks',
      category: 'Aggregate & Soil Hauling',
      badge: 'Self-Dispatched Fleet',
      specs: '22-Ton Payload • Washed Gravel & Select Fill Delivery',
      desc: 'Eliminates reliance on third-party freight haulers. We move washed stone and bedding gravel directly onto job sites on our own schedules.',
      img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Laser-Guided Trenching & Compaction Rigs',
      category: 'Septic Drainfield Precision',
      badge: 'Sub-Millimeter Accuracy',
      specs: 'Dual-Slope Laser Receivers • Soil Tamper Pack',
      desc: 'Guarantees the strict 1/4 inch per 10 feet slope required by Wake County Environmental Health inspectors for passing inspections on the first visit.',
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const facebookReviews = [
    {
      name: 'Marcus Hollifield',
      location: 'Wake Forest, NC',
      role: 'Homeowner',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Carolina Excavation Specialties replaced our failed 30-year-old concrete septic tank and drainfield in Wake Forest. The owner was on-site every single day with his own CAT excavator. They passed the Wake County environmental health inspection on the very first try and graded the yard back to flat perfection!'
    },
    {
      name: 'David & Sarah Lindquist',
      location: 'Apex / Cary Border',
      role: 'Residential Property',
      rating: 5,
      date: '1 month ago',
      comment: 'We had raw sewage backing up during heavy rain. Called their emergency hotline at 7am and they mobilized equipment the same afternoon. Honest pricing with zero broker fluff. High-ticket quality and true master operators. Highly recommend to anyone in Wake County!'
    },
    {
      name: 'Brian Thorne',
      location: 'Knightdale, NC',
      role: 'Custom Home Builder',
      rating: 5,
      date: '2 months ago',
      comment: 'As a local general contractor, Carolina Excavation Specialties is my exclusive call for lot clearing, foundation digs, and complete septic installs. Their laser grading and understanding of Raleigh clay is unmatched.'
    }
  ];

  const calc = calculateEstimate();

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center pt-8 pb-16 overflow-hidden">
        {/* Background Image with Dark Heavy Gradients */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?auto=format&fit=crop&w=1920&q=80" 
            alt="Carolina Excavation Specialties Equipment in Raleigh NC" 
            className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60"></div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-xs font-bold text-amber-400 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>WAKE COUNTY SEPTIC &amp; HEAVY EXCAVATION SPECIALISTS</span>
              </div>

              {/* Bold localized headline */}
              <h1 className="font-condensed font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.95]">
                Professional <span className="gold-gradient-text">Septic Installation</span> &amp; Excavation in <span className="text-white border-b-4 border-amber-500 pb-0.5">Raleigh &amp; Wake County</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Direct equipment owners specializing in high-ticket deep septic system designs ($7k–$20k), emergency tank replacements, lot clearing, and laser-guided finish grading. No brokers, no sub-contracting markups.
              </p>

              {/* Trust Badges Bar inline */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Wake County</p>
                    <p className="text-xs font-extrabold text-white">Licensed Septic</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                  <Award className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Insurance</p>
                    <p className="text-xs font-extrabold text-white">$2,000,000 Coverage</p>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 flex items-center gap-2 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                  <Truck className="w-5 h-5 text-blue-400 shrink-0" />
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Own Fleet</p>
                    <p className="text-xs font-extrabold text-white">Direct Machinery</p>
                  </div>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="tel:9193027306"
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border-2 border-red-500/80 text-white font-mono font-bold text-base shadow-xl transition group"
                >
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-ping"></div>
                  <span>Emergency Hotline: (919) 302-7306</span>
                </a>

                <button
                  onClick={() => setActivePage('contact')}
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-condensed font-black text-lg uppercase tracking-wider shadow-glow-gold transition active:scale-95"
                >
                  <span>Request Free On-Site Estimate</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-slate-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Immediate dispatch available for active sewage backups in Raleigh, Wake Forest, Cary &amp; Apex.</span>
              </p>
            </div>

            {/* Right Hero: High-Converting Quick Lead Form */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Glow backdrop */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-amber-500/30 to-transparent blur-xl opacity-60"></div>

                <div className="relative bg-slate-900/95 border border-slate-700/80 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                  {/* Form Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        Immediate Response
                      </span>
                      <h3 className="text-xl font-condensed font-black text-white uppercase tracking-wide">
                        Free On-Site Estimate
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                        Same-Day Scheduling
                      </span>
                    </div>
                  </div>

                  {submittedHero ? (
                    <div className="py-12 text-center space-y-3">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                        <Check className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Estimate Request Received!</h4>
                      <p className="text-xs text-slate-300">
                        Redirecting to complete project details &amp; site plans...
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleHeroSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Your Name / Property Owner
                        </label>
                        <input
                          type="text"
                          required
                          value={estimateData.name}
                          onChange={(e) => setEstimateData({ ...estimateData, name: e.target.value })}
                          placeholder="e.g. John Henderson"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Phone Number (For Fast Callback)
                        </label>
                        <input
                          type="tel"
                          required
                          value={estimateData.phone}
                          onChange={(e) => setEstimateData({ ...estimateData, phone: e.target.value })}
                          placeholder="(919) 000-0000"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Required Service
                        </label>
                        <select
                          value={estimateData.service}
                          onChange={(e) => setEstimateData({ ...estimateData, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500 transition"
                        >
                          <option>Septic System Installation / Replacement ($7k–$20k)</option>
                          <option>Emergency Septic Tank Repair / Drainfield</option>
                          <option>Site Clearing &amp; Heavy Excavation</option>
                          <option>Laser Finish Grading &amp; Drainage Correction</option>
                          <option>Commercial Foundation &amp; Utility Trenching</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Wake County City / Municipality
                        </label>
                        <select
                          value={estimateData.city}
                          onChange={(e) => setEstimateData({ ...estimateData, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500 transition"
                        >
                          <option>Raleigh (Downtown / North Raleigh)</option>
                          <option>Wake Forest</option>
                          <option>Cary / Apex</option>
                          <option>Holly Springs / Fuquay-Varina</option>
                          <option>Knightdale / Wendell / Zebulon</option>
                          <option>Garner / Rolesville</option>
                          <option>Other Surrounding Area</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-condensed font-black text-lg uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-[0.98] transition flex items-center justify-center gap-2"
                      >
                        <span>Lock In Your Free On-Site Inspection</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <p className="text-[11px] text-center text-slate-400 pt-1">
                        🔒 Confidential &bull; Zero Sales Pressure &bull; Owner Dispatched
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BANNER: WAKE COUNTY COMPLIANCE & STATE CERTIFICATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {/* Item 1 */}
            <div className="flex items-center gap-4 md:pr-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Wake County Licensed
                </h4>
                <p className="text-xs text-slate-400">
                  Approved on-site wastewater installer for conventional &amp; engineered systems.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  $2M General Liability
                </h4>
                <p className="text-xs text-slate-400">
                  Comprehensive property &amp; environmental safety policy for peace of mind.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Zero Broker Markups
                </h4>
                <p className="text-xs text-slate-400">
                  We own the excavators, skid steers, and dump trucks. Direct contractor rate.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  24/7 Sewage Emergency
                </h4>
                <p className="text-xs text-slate-400">
                  Rapid containment &amp; equipment dispatch across Wake County.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RETURN ON INVESTMENT & PRICING TRANSPARENCY (From Proposal Section 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden card-gloss border border-amber-500/20 p-8 md:p-12">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400">
                <Calculator className="w-3.5 h-3.5" />
                <span>ROI &amp; Investment Transparency</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-condensed font-black uppercase text-white tracking-tight">
                High-Ticket Septic Installations <br />
                <span className="gold-gradient-text">Built to Last 40+ Years</span>
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Septic replacements in Wake County typically range from <strong>$7,000 to $20,000</strong> depending on soil perk tests, tank capacity, and drainfield complexity. A properly engineered system prevents catastrophic yard backups and preserves your property valuation.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Wake County Environmental Health Compliant:</strong> We handle all soil testing coordination and permit submittals with county inspectors.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Commercial Grade Pre-Cast Concrete:</strong> Engineered for NC Red Clay pressure, resistant to root intrusion and buoyancy shifts.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Immediate Owner Accountability:</strong> Direct communication with the master machine operator on your site.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Calculator Widget */}
            <div className="lg:col-span-6 bg-slate-950/90 rounded-2xl p-6 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-400" />
                  Instant Wake County Cost Estimator
                </h3>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                  2026 Price Index
                </span>
              </div>

              <div className="space-y-4 text-xs">
                {/* Project type */}
                <div>
                  <label className="block font-semibold text-slate-300 mb-1.5">1. Project Scope:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setProjectType('full-replacement')}
                      className={`p-2 rounded-lg border text-left transition ${
                        projectType === 'full-replacement'
                          ? 'border-amber-500 bg-amber-500/10 text-white font-bold'
                          : 'border-slate-800 bg-slate-900 text-slate-400'
                      }`}
                    >
                      Full Tank + Drainfield
                    </button>
                    <button
                      type="button"
                      onClick={() => setProjectType('drainfield-only')}
                      className={`p-2 rounded-lg border text-left transition ${
                        projectType === 'drainfield-only'
                          ? 'border-amber-500 bg-amber-500/10 text-white font-bold'
                          : 'border-slate-800 bg-slate-900 text-slate-400'
                      }`}
                    >
                      Drainfield Line Repair
                    </button>
                    <button
                      type="button"
                      onClick={() => setProjectType('new-install')}
                      className={`p-2 rounded-lg border text-left transition ${
                        projectType === 'new-install'
                          ? 'border-amber-500 bg-amber-500/10 text-white font-bold'
                          : 'border-slate-800 bg-slate-900 text-slate-400'
                      }`}
                    >
                      New Home System
                    </button>
                    <button
                      type="button"
                      onClick={() => setProjectType('commercial')}
                      className={`p-2 rounded-lg border text-left transition ${
                        projectType === 'commercial'
                          ? 'border-amber-500 bg-amber-500/10 text-white font-bold'
                          : 'border-slate-800 bg-slate-900 text-slate-400'
                      }`}
                    >
                      Commercial / Multi-Tank
                    </button>
                  </div>
                </div>

                {/* Tank capacity */}
                <div>
                  <label className="block font-semibold text-slate-300 mb-1.5">2. Concrete Tank Capacity:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['1000', '1500', '2000'].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setTankSize(size)}
                        className={`p-2 rounded-lg border text-center transition ${
                          tankSize === size
                            ? 'border-amber-500 bg-amber-500/10 text-white font-bold'
                            : 'border-slate-800 bg-slate-900 text-slate-400'
                        }`}
                      >
                        {size} Gallons
                      </button>
                    ))}
                  </div>
                </div>

                {/* Soil type */}
                <div>
                  <label className="block font-semibold text-slate-300 mb-1.5">3. Wake County Soil Type:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'clay', label: 'Standard NC Red Clay' },
                      { id: 'heavy-clay', label: 'Compacted Heavy Clay' },
                      { id: 'rocky', label: 'Rocky / Hardpan' }
                    ].map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSoilComplexity(s.id)}
                        className={`p-2 rounded-lg border text-center transition ${
                          soilComplexity === s.id
                            ? 'border-amber-500 bg-amber-500/10 text-white font-bold'
                            : 'border-slate-800 bg-slate-900 text-slate-400'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Estimated Output */}
                <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      Estimated Project Range
                    </span>
                    <span className="font-mono text-2xl font-black text-amber-400">
                      ${calc.min.toLocaleString()} – ${calc.max.toLocaleString()}
                    </span>
                    <span className="block text-[10px] text-slate-400">
                      Includes permit review, excavation, heavy tank, and county inspection.
                    </span>
                  </div>
                  <button
                    onClick={() => setActivePage('contact')}
                    className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition shrink-0"
                  >
                    Lock In Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLEET SHOWCASE GRID (Heavy Physical Capability to Separate from Brokers) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400 mb-2">
              <Truck className="w-3.5 h-3.5" />
              <span>Heavy Iron Capability</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-condensed font-black uppercase text-white tracking-tight">
              Our Physical Fleet <span className="text-amber-500">&amp; Machinery</span>
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Low-tier contractors act as middlemen. We own, maintain, and mobilize our own heavy machinery across Wake County every single day.
            </p>
          </div>

          <button
            onClick={() => setActivePage('excavation')}
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider self-start md:self-auto"
          >
            <span>Explore Excavation Specs</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetItems.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 text-[10px] font-bold bg-amber-500 text-slate-950 px-2 py-0.5 rounded shadow">
                  {item.badge}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-condensed font-black text-white mt-1 group-hover:text-amber-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-1 bg-slate-950/60 p-1.5 rounded border border-slate-800/80">
                    {item.specs}
                  </p>
                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Dedicated Operator On-Board
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SOCIAL PROOF INTEGRATION (Direct from Facebook Page Community) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 md:p-12 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-400 mb-2">
                <FacebookIcon className="w-3.5 h-3.5 fill-blue-400" />
                <span>Aggregated Facebook Reviews</span>
              </div>
              <h2 className="text-3xl font-condensed font-black uppercase text-white tracking-tight">
                What Raleigh &amp; Wake County Homeowners Say
              </h2>
              <p className="text-xs text-slate-400">
                100% genuine feedback from real property owners throughout the Triangle.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-slate-950 px-5 py-3 rounded-2xl border border-slate-800">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-black text-white leading-none">5.0 Star Rating</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Wake County Community</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facebookReviews.map((rev, i) => (
              <div 
                key={i}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-500">{rev.date}</span>
                  </div>

                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-900 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">{rev.name}</h4>
                    <p className="text-[10px] text-amber-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {rev.location}
                    </p>
                  </div>
                  <span className="text-[9px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded">
                    Verified Job
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 p-8 md:p-14 text-slate-950 shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left max-w-2xl">
              <span className="inline-block px-3 py-1 bg-slate-950 text-amber-400 font-bold text-xs uppercase tracking-wider rounded-full">
                Wake County Priority Dispatch
              </span>
              <h2 className="font-condensed font-black text-3xl sm:text-5xl uppercase tracking-tight leading-none text-slate-950">
                Ready to Start Your Septic or Grading Project?
              </h2>
              <p className="text-sm font-medium text-slate-900">
                Call our direct line now for emergency septic response or schedule a free on-site engineering assessment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="tel:9193027306"
                className="px-6 py-4 rounded-xl bg-slate-950 text-white hover:bg-slate-900 font-mono font-bold text-base text-center transition flex items-center justify-center gap-2 shadow-xl"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>(919) 302-7306</span>
              </a>

              <button
                onClick={() => setActivePage('contact')}
                className="px-6 py-4 rounded-xl bg-white text-slate-950 hover:bg-slate-100 font-condensed font-black text-lg uppercase tracking-wider text-center transition flex items-center justify-center gap-2 shadow-xl"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

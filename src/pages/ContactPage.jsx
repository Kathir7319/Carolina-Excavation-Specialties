import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Upload, FileCheck, CheckCircle2, AlertTriangle, 
  Clock, Shield, ArrowRight, Check, Send, Sparkles, Building2
} from 'lucide-react';
import Logo from '../components/Logo';

export default function ContactPage({ onOpenBrandKit }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyAddress: '',
    city: 'Raleigh',
    serviceNeeded: 'Septic Replacement ($7,000–$20,000)',
    timeline: 'Immediate (Within 48 Hours)',
    hasPerkTest: 'Unknown / Need Help',
    propertyType: 'Residential',
    notes: '',
    filesAttached: []
  });

  const [submitted, setSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const operatingRegions = [
    { city: 'Raleigh', badge: 'Primary Base', zip: '27601–27617' },
    { city: 'Wake Forest', badge: 'High Volume', zip: '27587' },
    { city: 'Cary & Morrisville', badge: 'Fast Dispatch', zip: '27511–27519' },
    { city: 'Apex', badge: 'Daily Service', zip: '27502, 27523' },
    { city: 'Holly Springs', badge: 'South Wake Hub', zip: '27540' },
    { city: 'Fuquay-Varina', badge: 'South Wake Hub', zip: '27526' },
    { city: 'Garner', badge: 'Rapid Mobilization', zip: '27529' },
    { city: 'Knightdale & Wendell', badge: 'East Wake Core', zip: '27545, 27591' },
    { city: 'Zebulon', badge: 'East Wake Core', zip: '27597' },
    { city: 'Rolesville', badge: 'North Wake Core', zip: '27571' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleSimulatedDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer && e.dataTransfer.files) {
      const fileNames = Array.from(e.dataTransfer.files).map(f => f.name);
      setFormData(prev => ({
        ...prev,
        filesAttached: [...prev.filesAttached, ...fileNames]
      }));
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files) {
      const fileNames = Array.from(e.target.files).map(f => f.name);
      setFormData(prev => ({
        ...prev,
        filesAttached: [...prev.filesAttached, ...fileNames]
      }));
    }
  };

  return (
    <div className="space-y-16 md:space-y-24 py-8">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400">
            <Clock className="w-3.5 h-3.5" />
            <span>Fast Turnaround &bull; Wake County Wide</span>
          </div>

          <h1 className="font-condensed font-black text-4xl sm:text-6xl text-white uppercase tracking-tight leading-[0.95]">
            Contact &amp; <span className="gold-gradient-text">On-Site Estimate Request</span>
          </h1>

          <p className="text-base text-slate-300 leading-relaxed">
            Direct routing to Carolina Excavation Specialties machine operators. Submit your project requirements below, attach site plans or perk tests, and receive a binding on-site estimate.
          </p>
        </div>
      </section>

      {/* 2. MAIN SECTION: FORM + DISPATCH DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Advanced Lead Routing Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-condensed font-black text-white uppercase tracking-wider">
                    Estimate Request Pre-Qualified!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName || 'Property Owner'}</strong>. Your project ticket has been routed to our Wake County equipment dispatch team.
                  </p>
                  
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-left max-w-md mx-auto space-y-2 text-xs">
                    <p className="font-bold text-amber-400">Dispatch Response Confirmation:</p>
                    <p className="text-slate-300">
                      • <strong>Service:</strong> {formData.serviceNeeded}
                    </p>
                    <p className="text-slate-300">
                      • <strong>Location:</strong> {formData.propertyAddress}, {formData.city} NC
                    </p>
                    <p className="text-slate-300">
                      • <strong>Expected Contact:</strong> Within 2 business hours (or under 20 minutes if marked emergency)
                    </p>
                  </div>

                  <div className="pt-4">
                    <a
                      href="tel:9193027306"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now For Instant Follow-up</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <h2 className="text-xl font-condensed font-black text-white uppercase tracking-wider">
                      Advanced Project Pre-Qualification
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Helps our machine operators prepare the exact equipment and permit requirements before arriving on-site.
                    </p>
                  </div>

                  {/* Section 1: Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      1. Property Owner &amp; Contact Info
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Robert Davis"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Direct Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(919) 302-XXXX"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Email Address (For Written Proposal &amp; Permit Docs)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Section 2: Property & Scope */}
                  <div className="space-y-4 pt-4 border-t border-slate-800">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      2. Project Location &amp; Scope
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Wake County Property Address *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.propertyAddress}
                          onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                          placeholder="1234 NC Highway / Street Name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          City / Town *
                        </label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500"
                        >
                          {operatingRegions.map(r => (
                            <option key={r.city} value={r.city}>{r.city}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Required Service Category *
                        </label>
                        <select
                          value={formData.serviceNeeded}
                          onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500"
                        >
                          <option>Septic Replacement ($7,000–$20,000)</option>
                          <option>Emergency Active Sewage Backup (24/7)</option>
                          <option>New Home Septic Design &amp; Install</option>
                          <option>Heavy Site Clearing &amp; Tree Stumping</option>
                          <option>Precision Laser Finish Grading</option>
                          <option>Drainage Correction &amp; Swales</option>
                          <option>Foundation Excavation &amp; Trenching</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Project Urgency / Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500"
                        >
                          <option>Immediate Emergency (Within 24 Hours)</option>
                          <option>Within 1 to 2 Weeks</option>
                          <option>Within 30 Days</option>
                          <option>Planning / Budgeting Stage</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: File Upload (Site Plans, Surveys, Perk Test) */}
                  <div className="space-y-3 pt-4 border-t border-slate-800">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        3. Site Plans, Perk Tests or Property Markers
                      </h3>
                      <span className="text-[10px] text-slate-500">(Optional)</span>
                    </div>

                    <div
                      onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                      onDragLeave={() => setDragActive(false)}
                      onDrop={handleSimulatedDrop}
                      className={`border-2 border-dashed rounded-2xl p-6 text-center transition cursor-pointer ${
                        dragActive 
                          ? 'border-amber-500 bg-amber-500/10' 
                          : 'border-slate-700 bg-slate-950/60 hover:border-slate-600'
                      }`}
                    >
                      <Upload className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                      <p className="text-xs text-white font-semibold">
                        Drag &amp; drop files here or click to browse
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1">
                        Upload septic layout, survey map, or site photos (PDF, PNG, JPG up to 25MB)
                      </p>

                      <input
                        type="file"
                        multiple
                        onChange={handleFileInputChange}
                        className="hidden"
                        id="site-file-upload"
                      />
                      <label 
                        htmlFor="site-file-upload"
                        className="mt-3 inline-block px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-lg cursor-pointer transition"
                      >
                        Select Files from Device
                      </label>

                      {formData.filesAttached.length > 0 && (
                        <div className="mt-3 space-y-1 text-left">
                          {formData.filesAttached.map((file, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                              <FileCheck className="w-3.5 h-3.5" />
                              <span className="font-mono">{file}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Section 4: Specific Site Notes */}
                  <div className="space-y-2 pt-4 border-t border-slate-800">
                    <label className="block text-xs font-medium text-slate-300">
                      Additional Details (Gate Width, Slope, Existing Drainage Issues)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Existing 1,000 gallon tank is 30 years old. Gate is 10ft wide. Yard slopes gently towards back tree line."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-condensed font-black text-xl uppercase tracking-wider shadow-glow-gold active:scale-[0.99] transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit &amp; Route To Equipment Dispatch</span>
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5 text-emerald-400" /> Wake County Licensed
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" /> Fast Callback
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Business Identification & Operating Regions (Proposal Sec 3 & 4) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Emergency Dispatch Card */}
            <div className="bg-gradient-to-br from-red-950/40 via-slate-900 to-slate-900 border border-red-500/40 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 animate-bounce" />
                <span>Explicit Emergency Dispatch Policy</span>
              </div>

              <h3 className="text-2xl font-condensed font-black text-white">
                Active Sewage Backups &amp; Collapsed Tanks
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Raw effluent backups represent an urgent biohazard and structural threat. We maintain dedicated standby equipment to pump, contain, and bypass collapsed septic lines across Wake County 24/7.
              </p>

              <div className="p-4 rounded-2xl bg-slate-950 border border-red-500/30 space-y-2">
                <span className="text-[10px] text-slate-400 uppercase font-mono block">
                  Direct Line for Emergency Dispatch:
                </span>
                <a 
                  href="tel:9193027306"
                  className="font-mono text-2xl font-black text-red-400 hover:text-red-300 flex items-center gap-2 transition"
                >
                  <Phone className="w-5 h-5" />
                  (919) 302-7306
                </a>
              </div>
            </div>

            {/* Operating Regions Grid */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-condensed font-black text-white uppercase tracking-wider">
                    Wake County Service Radius
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fast equipment transit across all municipalities.
                  </p>
                </div>
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                {operatingRegions.map((region) => (
                  <div 
                    key={region.city}
                    className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{region.city}</span>
                      <span className="text-[9px] text-amber-400 font-mono">NC</span>
                    </div>
                    <span className="text-[10px] text-slate-500 mt-1">{region.badge}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Wake County Septic Lic. #WK-8492</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Fully Insured
                </span>
              </div>
            </div>

            {/* Brand Kit Quick Trigger */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Logo variant="icon" />
                <div className="text-left">
                  <p className="text-xs font-bold text-white">Need Official Brand Assets?</p>
                  <p className="text-[10px] text-slate-400">Download SVG logos, vector seals &amp; colors</p>
                </div>
              </div>
              <button
                onClick={onOpenBrandKit}
                className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold transition flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" />
                <span>Open Kit</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { 
  ShieldCheck, AlertTriangle, CheckCircle2, Phone, Calendar, ArrowRight, 
  HelpCircle, ChevronDown, ChevronUp, Clock, Layers, Sparkles, Wrench, Droplets, Check
} from 'lucide-react';

export default function SepticPage({ setActivePage }) {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const offerings = [
    {
      title: 'Complete Septic System Replacement',
      price: '$7,000 – $20,000',
      tag: 'High-Ticket Authority',
      desc: 'Full decommissioning of collapsed or unpermitted tanks, precision laser installation of heavy precast concrete tanks, and installation of modern high-capacity infiltrator drainfields.',
      features: [
        '1,000 to 2,000 Gallon Two-Compartment Concrete Tanks',
        'Wake County Environmental Health Permit submittal & signoff',
        'Advanced Quick4 Plus Chambers or stone & pipe absorption fields',
        'Full mechanical warranty & county inspection signoff guarantee'
      ]
    },
    {
      title: 'Emergency Septic Tank Extraction & Replacement',
      price: 'Immediate Dispatch',
      tag: '24/7 Response',
      desc: 'When an old metal or unreinforced tank collapses or overflows, we mobilize heavy CAT machinery to pump, excavate, and set an emergency replacement tank to restore plumbing immediately.',
      features: [
        'Priority equipment mobilization in Raleigh & Wake County',
        'Safe effluent containment and environmental hazard mitigation',
        'Temporary bypass solutions to keep household water flowing',
        'Expedited emergency permit processing with county health officials'
      ]
    },
    {
      title: 'Deep Drainage & High Water Table Solutions',
      price: 'Custom Engineering',
      tag: 'Tough NC Clay Solvers',
      desc: 'Engineered curtain drains, interceptor trenches, and gravel-packed deep drainage to divert groundwater away from septic absorption areas in flood-prone or heavy clay zones.',
      features: [
        'Interceptor trenches cut to impervious clay strata',
        'Laser-graded perforated pipe wrapped in geotextile filter fabric',
        'Sub-surface groundwater diversion around drainfields',
        'Protection against premature drainfield drowning & failure'
      ]
    },
    {
      title: 'Effluent Pump Stations & Low-Pressure Pipe (LPP)',
      price: 'Engineered Systems',
      tag: 'Challenging Topography',
      desc: 'For uphill drainfield layouts or properties with tight soil constraints, we install commercial-grade duplex pump vaults, high-head submersible pumps, and smart control panels.',
      features: [
        'Heavy-duty Barnes / Liberty submersible effluent pumps',
        'NEMA 4X weather-sealed audio/visual alarm stations',
        'Uniform pressure distribution manifold networks',
        'Ideal for wooded Wake County lots and rolling Carolina terrain'
      ]
    }
  ];

  // Authority Resource Piece: "What to Expect During a Septic Replacement"
  const replacementSteps = [
    {
      step: '01',
      title: 'Soil Evaluation & Wake County Permit Submittal',
      timeframe: 'Day 1 (Pre-construction)',
      lead: 'Lowering sales friction with zero surprises at the county level.',
      desc: 'Wake County Environmental Health requires an Improvement Permit (IP) and Construction Authorization (CA). We review your soil morphology test (perk test), delineate the designated repair area, and mark all underground utilities via NC 811 before digging.',
      details: [
        'Wake County Environmental Health soil verification',
        'Accurate setback measurements from property lines and private wells (100 ft minimum)',
        'Zero guesswork: Permit blueprints mapped directly onto GPS coordinates'
      ]
    },
    {
      step: '02',
      title: 'Old Tank Decommissioning & Safe Effluent Containment',
      timeframe: 'Day 2 (Morning)',
      lead: 'Strict environmental protocols that protect your family and yard.',
      desc: 'We safely pump out all residual liquids and solids. In accordance with North Carolina regulations, failed tanks are either carefully extracted and removed from your site or crushed, sanitized with agricultural lime, and backfilled with structural fill.',
      details: [
        'Zero sewage spill protocol with suction containment',
        'Sanitization of contaminated excavation zone',
        'Safe removal or county-approved in-place abandonment'
      ]
    },
    {
      step: '03',
      title: 'Heavy Excavation & Laser-Guided Tank Setting',
      timeframe: 'Day 2–3',
      lead: 'Engineered for Wake County’s dense red clay bed.',
      desc: 'Our CAT 315 excavator digs a level, stone-compacted foundation bed. We crane in a commercial-grade, multi-compartment concrete septic tank with heavy-duty risers and cast-iron/poly lids brought up to grade for future effortless maintenance.',
      details: [
        'Vibrated crushed stone bedding prevents settling and tank tilt',
        'Laser level transit ensures precise 1/4" per 10 ft inlet/outlet slope',
        'Watertight rubber boot seals on all pipe penetrations'
      ]
    },
    {
      step: '04',
      title: 'Absorption Field / Infiltration Trench Installation',
      timeframe: 'Day 3–4',
      lead: 'The heart of your system engineered for maximum absorption.',
      desc: 'We excavate parallel leach trenches following the natural contour lines of your property. We install high-performance infiltration chambers (or clean washed gravel and perforated pipe) and connect distribution boxes (D-boxes) with precision leveling.',
      details: [
        'Level distribution box placement with flow equalizers',
        'Infiltrator Quick4 Plus high-capacity chambers for superior void space',
        'Breathable non-woven geotextile soil barriers prevent silt infiltration'
      ]
    },
    {
      step: '05',
      title: 'Wake County Final Inspection, Backfilling & Regrading',
      timeframe: 'Day 5',
      lead: 'Official county certification & pristine yard restoration.',
      desc: 'A Wake County Environmental Health Inspector visits the open excavation to inspect pipe slope, gravel depth, tank seals, and setbacks. Once the inspector stamps the permit, our Bobcat track loaders backfill, crown the soil for rainfall runoff, and complete finish seedbed grading.',
      details: [
        '100% first-pass county inspection track record',
        'Crowned backfill compaction to prevent future sunken trenches',
        'Smooth finish grading ready for grass seed or sod installation'
      ]
    }
  ];

  // Lawn Disruption & FAQ
  const faqs = [
    {
      q: 'How badly will heavy equipment disrupt my lawn and landscaping?',
      a: 'We understand your lawn is a major investment. Unlike unequipped contractors who tear up yards with wheeled machinery, Carolina Excavation Specialties uses wide rubber track loaders (Bobcat T770) that exert less ground pressure than a human footprint. We lay heavy ground protection mats over delicate sod areas and conclude every project with laser finish grading and seedbed preparation to restore your property.'
    },
    {
      q: 'How long will our household be without water during a replacement?',
      a: 'You will NOT be without water for days. In most cases, plumbing is only disconnected for 3 to 6 hours during the physical changeover between the old tank and the new tank. We coordinate with you in advance so your family experiences minimal disruption.'
    },
    {
      q: 'Why are septic replacements in Wake County between $7,000 and $20,000?',
      a: 'Wake County has strict environmental protection regulations and notoriously dense red clay soil that requires specialized excavation and larger absorption footprints. A high-ticket installation includes heavy-gauge precast concrete tanks, engineered infiltration chambers, washed gravel aggregate, county permit fees, health department inspections, and multi-year structural guarantees.'
    },
    {
      q: 'What are the warning signs that my septic system is failing?',
      a: 'Key warning signs include: sluggish drains or gurgling sounds in toilets, foul sewage odors near the yard, unusually lush dark green grass over the drainfield, and spongy or pooled effluent water on the surface. If you notice these, call our hotline at (919) 302-7306 immediately to prevent sewage from backing into your home.'
    }
  ];

  return (
    <div className="space-y-16 md:space-y-24 py-8">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-8 md:p-14">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=80" 
              alt="Septic Installation Raleigh NC" 
              className="w-full h-full object-cover opacity-15 filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-950/80"></div>
          </div>

          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Wake County Environmental Health Certified</span>
            </div>

            <h1 className="font-condensed font-black text-4xl sm:text-6xl text-white uppercase tracking-tight leading-[0.95]">
              High-Ticket <span className="gold-gradient-text">Septic Installation</span> &amp; Precision Tank Replacement
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Engineered on-site wastewater solutions built to conquer Raleigh’s stubborn red clay. From emergency tank collapse extractions to complete commercial drainfield installations.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="tel:9193027306"
                className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-sm flex items-center gap-2 shadow-lg transition"
              >
                <Phone className="w-4 h-4" />
                <span>Emergency Dispatch: (919) 302-7306</span>
              </a>

              <button
                onClick={() => setActivePage('contact')}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Permitted Inspection</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE OFFERINGS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Engineered Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-condensed font-black uppercase text-white tracking-tight">
            Specialized Septic Services
          </h2>
          <p className="text-sm text-slate-400">
            Wake County requires certified expertise. We build code-compliant wastewater infrastructure that passes county inspection without delay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <span className="font-mono text-sm font-extrabold text-white bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                    {item.price}
                  </span>
                </div>

                <h3 className="text-2xl font-condensed font-black text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  {item.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActivePage('contact')}
                className="w-full py-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-amber-400 font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. AUTHORITY RESOURCE PIECE: WHAT TO EXPECT DURING A SEPTIC REPLACEMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-10 md:p-14 space-y-10 shadow-2xl relative overflow-hidden">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Authority Consumer Guide</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-condensed font-black uppercase text-white tracking-tight">
              What to Expect During a Septic Replacement
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Replacing a septic system is a major home infrastructure investment. This step-by-step consumer walkthrough addresses lawn disruption, timeline expectations, and the Wake County inspection process to eliminate sales friction and anxiety.
            </p>
          </div>

          {/* Interactive Steps Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-slate-800 pb-4">
            {replacementSteps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-xl text-left transition-all ${
                  activeStep === idx
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 font-bold'
                    : 'bg-slate-950/60 text-slate-400 hover:text-white hover:bg-slate-950'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-mono font-black">{s.step}</span>
                  <Clock className="w-3 h-3 opacity-70" />
                </div>
                <p className="text-xs font-condensed font-black uppercase truncate leading-tight">
                  {s.title.split(' ')[0]} {s.title.split(' ')[1]}
                </p>
              </button>
            ))}
          </div>

          {/* Active Step Content Showcase */}
          <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-black text-amber-400">
                  {replacementSteps[activeStep].step}
                </span>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                    {replacementSteps[activeStep].timeframe}
                  </span>
                  <h3 className="text-2xl font-condensed font-black text-white">
                    {replacementSteps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-amber-400 font-semibold text-xs italic">
                &ldquo;{replacementSteps[activeStep].lead}&rdquo;
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                {replacementSteps[activeStep].desc}
              </p>

              <div className="space-y-2 pt-3 border-t border-slate-900">
                {replacementSteps[activeStep].details.map((detail, didx) => (
                  <div key={didx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Visual Summary Box */}
            <div className="lg:col-span-4 bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center">
                <Wrench className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Our Guarantee For Step {replacementSteps[activeStep].step}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every phase is executed strictly with Carolina Excavation Specialties equipment and certified personnel. We handle all inspector communications.
              </p>
              <button
                onClick={() => setActivePage('contact')}
                className="w-full py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition"
              >
                Inquire About Your System
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LAWN DISRUPTION & CONSUMER FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            No Surprises
          </span>
          <h2 className="text-3xl font-condensed font-black uppercase text-white tracking-tight">
            Frequently Asked Septic Questions
          </h2>
          <p className="text-xs text-slate-400">
            Clear answers to help you navigate Raleigh and Wake County regulations.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-850 transition"
                >
                  <span className="font-bold text-sm text-white flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-amber-500 shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-amber-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                    <p className="mt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

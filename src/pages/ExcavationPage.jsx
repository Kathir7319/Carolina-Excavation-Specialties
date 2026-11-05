import React, { useState } from 'react';
import { 
  Tractor, Layers, ShieldCheck, Ruler, ArrowRight, CheckCircle2, 
  MapPin, Mountain, HardHat, Phone, Calendar, Sparkles, Sliders
} from 'lucide-react';

export default function ExcavationPage({ setActivePage }) {
  const [selectedSoil, setSelectedSoil] = useState('redclay');
  const [activeFilter, setActiveFilter] = useState('all');

  const coreServices = [
    {
      title: 'Precision Finish Grading & Laser Leveling',
      specs: '± 0.25 inch Grade Tolerance',
      desc: 'Using laser-guided dual-slope box blades and 3D machine control, we sculpt positive drainage slopes that channel storm runoff away from structures and prepare perfectly flat building pads.',
      img: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Heavy Land Clearing & Root Grubbing',
      specs: 'Complete Stumping & Debris Haul',
      desc: 'Total lot clearing for new home construction or property expansion. We rip out mature hardwood stumps, grind brush, and excavate organic root matter to prevent future structural settling.',
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Foundation & Basement Footing Excavation',
      specs: 'Exact Engineering Depth & Compaction',
      desc: 'Digging crisp foundation trenches, crawlspace cavities, and walk-out basements. We verify soil bearing capacity and coordinate compaction testing for residential homebuilders.',
      img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Comprehensive Drainage Correction & Swales',
      specs: 'French Drains & Storm Retention',
      desc: 'Eliminating yard flooding, soggy turf, and foundation water intrusion through heavy rock swales, catch basins, subsurface French drains, and engineered culvert pipe crossings.',
      img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Deep Utility Trenching',
      specs: 'Water, Sewer, Power & Conduit Lines',
      desc: 'Continuous laser-depth trenching for municipal water tie-ins, electrical lines, septic mainline conveyance, and propane feeds with precise bedding gravel backfill.',
      img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Driveway Subgrade Prep & Heavy Gravel Roads',
      specs: 'Geotextile Fabric + Crush & Run ABC',
      desc: 'Excavating soft topsoil, laying woven stabilization fabric, and compacting heavy crusher run stone to build durable construction haul entrances and residential driveways.',
      img: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Visual Proof: Soil Types Native to Wake County Region
  const soilTypes = {
    redclay: {
      name: 'Wake County Native Red Clay (Cecil Series)',
      region: 'Central & Eastern Wake (Raleigh, Knightdale, Wendell, Garner)',
      badge: 'High Plasticity • Impervious',
      color: 'bg-amber-600/20 text-amber-400 border-amber-500/40',
      desc: 'Raleigh’s signature red clay has high shrink-swell potential and tight compaction. It requires heavy 35,000+ lb excavators to rip through dry summer hardpan and laser grading to prevent water pooling.',
      solution: 'Carolina Excavation uses specialized rock-toothed buckets, heavy vibratory rollers, and aggregate blending to stabilize building pads over raw Cecil clay.'
    },
    sandyloam: {
      name: 'Southern Coastal Plain Sandy Loam',
      region: 'Southern Wake & Johnston Border (Fuquay-Varina, Willow Spring)',
      badge: 'Fast Draining • Friable',
      color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
      desc: 'Softer, permeable soil with high sand content. Prone to trench collapse and rapid erosion if not properly shored and stabilized with vegetative matting.',
      solution: 'We maintain strict trench sidewall slopes, deploy hydraulic shoring where necessary, and apply fast turf stabilization blankets after final grade.'
    },
    rocky: {
      name: 'Slate Belt & Granite Hardpan',
      region: 'Northern & Western Wake (Wake Forest, Rolesville, North Raleigh)',
      badge: 'High Density • Bedrock Shelf',
      color: 'bg-slate-500/20 text-slate-300 border-slate-500/40',
      desc: 'Granite boulders and shallow bedrock shelves near Falls Lake and the Neuse River basin. Standard compact excavators cannot dig through this substrate.',
      solution: 'Our heavy CAT 315 excavator with hydraulic hammer / ripper tooth breaks shallow rock shelves to achieve required septic and foundation depths.'
    }
  };

  const galleryProjects = [
    {
      title: '5-Acre Wooded Lot Clearing & Pad Prep',
      location: 'Wake Forest, NC',
      category: 'clearing',
      soil: 'Cecil Red Clay',
      result: 'Removed 140+ hardwoods, graded 8,000 sq ft flat house pad with 2% outward drainage swale.',
      img: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Emergency Residential Drainage Swale & French Drain',
      location: 'North Raleigh, NC',
      category: 'drainage',
      soil: 'Granite Hardpan',
      result: 'Diverted 12,000 gallons/hr of storm runoff away from basement wall with laser-sloped rock swale.',
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Custom Home Footing & Crawlspace Excavation',
      location: 'Apex, NC',
      category: 'foundation',
      soil: 'Heavy Red Clay',
      result: 'Dug to 42" frost line with zero over-excavation. Passed engineer compaction inspection same day.',
      img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Precision Commercial Driveway Subbase Grading',
      location: 'Cary, NC',
      category: 'grading',
      soil: 'Sandy Loam',
      result: '300-ft driveway subbase compacted with geotextile fabric and 6 inches of crusher run ABC.',
      img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? galleryProjects 
    : galleryProjects.filter(p => p.category === activeFilter);

  return (
    <div className="space-y-16 md:space-y-24 py-8">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-8 md:p-14">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80" 
              alt="Excavation and Grading Raleigh NC" 
              className="w-full h-full object-cover opacity-20 filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/70"></div>
          </div>

          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400">
              <Tractor className="w-4 h-4" />
              <span>Heavy Earthmoving &bull; Laser Grade Control</span>
            </div>

            <h1 className="font-condensed font-black text-4xl sm:text-6xl text-white uppercase tracking-tight leading-[0.95]">
              Precision <span className="gold-gradient-text">Excavation &amp; Grading</span> Across Raleigh &amp; Wake County
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              From tough lot clearing and boulder extraction to sub-centimeter laser finish grading and drainage solutions. We move the earth right the first time.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setActivePage('contact')}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm uppercase tracking-wider flex items-center gap-2 shadow-glow-gold transition"
              >
                <Calendar className="w-4 h-4" />
                <span>Get On-Site Grading Quote</span>
              </button>

              <a 
                href="tel:9193027306"
                className="px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-white font-mono font-bold text-sm flex items-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>Direct Line: (919) 302-7306</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE EARTHMOVING SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Full-Spectrum Land Development
          </span>
          <h2 className="text-3xl sm:text-4xl font-condensed font-black uppercase text-white tracking-tight">
            Excavation &amp; Site Prep Solutions
          </h2>
          <p className="text-sm text-slate-400">
            Backed by company-owned CAT excavators, Bobcat tracked loaders, and high-precision laser transits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, idx) => (
            <div 
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono font-bold bg-slate-900/90 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded backdrop-blur">
                    {service.specs}
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-condensed font-black text-white group-hover:text-amber-400 transition">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-800/60 mt-4">
                <button
                  onClick={() => setActivePage('contact')}
                  className="w-full py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition"
                >
                  <span>Request Specs &amp; Pricing</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. VISUAL PROOF & WAKE COUNTY SOIL ENGINEERING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 md:p-12 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400">
              <Layers className="w-3.5 h-3.5" />
              <span>Wake County Geotechnical Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-condensed font-black uppercase text-white tracking-tight">
              Mastering Native Soil Types: <span className="clay-gradient-text">Red Clay &bull; Sand &bull; Rock</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Excavation in Raleigh is fundamentally different than elsewhere in the country. Wake County’s dense Cecil red clay and shallow granite hardpan require heavy tonnage machines and specialized compaction methodologies.
            </p>
          </div>

          {/* Soil Tab Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'redclay', label: '1. Wake Red Clay (Cecil Series)' },
              { id: 'sandyloam', label: '2. Southern Wake Sandy Loam' },
              { id: 'rocky', label: '3. Northern Wake Slate / Rock' }
            ].map((soil) => (
              <button
                key={soil.id}
                onClick={() => setSelectedSoil(soil.id)}
                className={`p-4 rounded-xl text-left border transition ${
                  selectedSoil === soil.id
                    ? 'border-amber-500 bg-amber-500/15 text-white font-bold'
                    : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                }`}
              >
                <span className="text-xs font-condensed font-bold uppercase block tracking-wider">
                  {soil.label}
                </span>
              </button>
            ))}
          </div>

          {/* Active Soil Breakdown */}
          <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-condensed font-black text-white">
                {soilTypes[selectedSoil].name}
              </h3>
              <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${soilTypes[selectedSoil].color}`}>
                {soilTypes[selectedSoil].badge}
              </span>
            </div>

            <p className="text-xs font-mono text-amber-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Primary Regions: {soilTypes[selectedSoil].region}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  The Soil Challenge:
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {soilTypes[selectedSoil].desc}
                </p>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  How Carolina Excavation Solves It:
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {soilTypes[selectedSoil].solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISUAL PROOF GALLERY (High-Res Completed Jobs) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
              Visual Proof &amp; Track Record
            </span>
            <h2 className="text-3xl font-condensed font-black uppercase text-white tracking-tight">
              Recent Project Completions
            </h2>
            <p className="text-xs text-slate-400">
              Real jobs executed across Wake County neighborhoods and custom building sites.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'clearing', label: 'Site Clearing' },
              { id: 'grading', label: 'Laser Grading' },
              { id: 'drainage', label: 'Drainage Solutions' },
              { id: 'foundation', label: 'Foundation Digs' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeFilter === f.id
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((proj, i) => (
            <div 
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition group"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="bg-slate-950/80 backdrop-blur px-2.5 py-1 rounded-md text-amber-400 font-bold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {proj.location}
                  </span>
                  <span className="bg-amber-500 text-slate-950 px-2 py-0.5 rounded font-bold text-[11px]">
                    {proj.soil}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-xl font-condensed font-black text-white">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {proj.result}
                </p>
                <div className="pt-2 flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified 100% On-Time &amp; Within Quoted Budget</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

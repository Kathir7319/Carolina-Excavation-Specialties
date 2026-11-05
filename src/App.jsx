import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileStickyBar from './components/MobileStickyBar';
import Footer from './components/Footer';
import BrandKitModal from './components/BrandKitModal';
import HomePage from './pages/HomePage';
import SepticPage from './pages/SepticPage';
import ExcavationPage from './pages/ExcavationPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [brandKitOpen, setBrandKitOpen] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'septic', 'excavation', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Structured Local Schema (Schema.org) for Wake County SEO (Proposal Section 4)
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Carolina Excavation Specialties",
    "image": "https://carolinaexcavationspec.com/logo.svg",
    "telephone": "(919) 302-7306",
    "url": "https://carolinaexcavationspec.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Raleigh",
      "addressRegion": "NC",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.7796,
      "longitude": -78.6382
    },
    "areaServed": [
      "Raleigh", "Wake Forest", "Cary", "Apex", "Holly Springs", 
      "Fuquay-Varina", "Garner", "Knightdale", "Wendell", "Zebulon", "Rolesville"
    ],
    "priceRange": "$$$$",
    "description": "Wake County licensed septic installation, commercial drainfield design, tank replacement, site clearing, and laser finish grading."
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans relative selection:bg-amber-500 selection:text-slate-950">
      {/* Structural Local Schema for Wake County SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      {/* Main Top Navigation */}
      <Navbar 
        activePage={activePage} 
        setActivePage={handlePageChange} 
        onOpenBrandKit={() => setBrandKitOpen(true)} 
      />

      {/* Page Content Container */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage 
            setActivePage={handlePageChange} 
            onOpenBrandKit={() => setBrandKitOpen(true)} 
          />
        )}
        {activePage === 'septic' && (
          <SepticPage 
            setActivePage={handlePageChange} 
          />
        )}
        {activePage === 'excavation' && (
          <ExcavationPage 
            setActivePage={handlePageChange} 
          />
        )}
        {activePage === 'contact' && (
          <ContactPage 
            onOpenBrandKit={() => setBrandKitOpen(true)} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        setActivePage={handlePageChange} 
        onOpenBrandKit={() => setBrandKitOpen(true)} 
      />

      {/* Mobile Bottom Quick-Action Bar */}
      <MobileStickyBar 
        onOpenEstimate={() => handlePageChange('contact')} 
      />

      {/* Interactive Brand Kit & Logo Suite Modal */}
      <BrandKitModal 
        isOpen={brandKitOpen} 
        onClose={() => setBrandKitOpen(false)} 
      />
    </div>
  );
}

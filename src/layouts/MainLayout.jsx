import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import BotanicalDecorations from '../components/BotanicalDecorations';

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#faf8f5] text-slate-800 overflow-x-hidden selection:bg-gold-200 selection:text-navy-900">
      
      {/* Decorative Botanical Illustrations (Along left edge and bottom-left corner as in reference) */}
      <BotanicalDecorations />

      {/* Main Header with Structured Nav Dividers */}
      <Header />

      {/* Thin Horizontal Boundary Divider Below Header/Navigation */}
      <div className="w-full h-px bg-slate-200/80 shadow-[0_1px_0_rgba(255,255,255,0.7)] relative z-20"></div>

      {/* Page Content Container with Clean Spacing & Above Botanical Underlay */}
      <main className="relative z-10 flex-grow">
        <Outlet />
      </main>

      {/* Thin Horizontal Boundary Divider Above Footer */}
      <div className="w-full h-px bg-slate-200/70 relative z-20"></div>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action for Quick Customer Enquiries */}
      <WhatsAppButton variant="floating" />
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, CATEGORIES } from '../data/products';
import logoImg from '../assets/logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800">
          
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl w-fit shadow-md">
              <img 
                src={logoImg} 
                alt={COMPANY_INFO.name} 
                className="h-12 w-auto object-contain"
              />
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm pt-2">
              Bringing authentic Indian culinary heritage into modern kitchens. From artisanal stone-ground podis and traditional fermented batters to sun-cured pickles and rich slow-simmered gravy bases.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.name}, Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Enquiries: <a href="tel:9409409159" className="text-white hover:text-gold-400 underline font-semibold">9409409159</a> / <a href="tel:9993419595" className="text-white hover:text-gold-400 underline font-semibold">9993419595</a></span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.defaultWhatsApp}?text=${encodeURIComponent("Hello Narayan-Varchas Foods, I would like to enquire about your products.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-bold transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>
          </div>

          {/* Product Categories Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/catalogue?category=${cat.id}`}
                    className="hover:text-gold-300 transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-slate-300 group-hover:text-gold-300">
                      ({cat.count})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400">
              Company & Story
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-gold-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/catalogue" className="hover:text-gold-300 transition-colors">
                  All Products Showcase (75)
                </Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-gold-300 transition-colors">
                  Our Story & Heritage
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-300 transition-colors">
                  Wholesale & Business Enquiries
                </Link>
              </li>
            </ul>

            <div className="pt-4 border-t border-navy-800 space-y-2">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                Our Standards
              </h5>
              <div className="flex items-center gap-2 text-[11px] text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                <span>100% Authentic Recipes</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                <span>Hygienic Preparation</span>
              </div>
            </div>
          </div>

          {/* Contact & Business Info Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400">
              Business Enquiries
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              We partner with retailers, distributors, restaurants, cloud kitchens, and supermarkets across India.
            </p>

            <div className="p-3 bg-navy-900 rounded-lg border border-navy-800 space-y-2 text-xs">
              <div className="text-slate-300 text-[11px]">Primary Contact:</div>
              <a href="tel:9409409159" className="block text-white font-semibold hover:text-gold-400">
                +91 94094 09159
              </a>
              <div className="text-slate-300 text-[11px] pt-1">Secondary Contact:</div>
              <a href="tel:9993419595" className="block text-white font-semibold hover:text-gold-400">
                +91 99934 19595
              </a>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-300 font-semibold"
            >
              <span>Submit Business Enquiry Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <strong>{COMPANY_INFO.name}</strong>. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <span>Authentic Food Products</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
              <span>Made in India</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

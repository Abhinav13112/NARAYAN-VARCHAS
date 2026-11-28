import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, MapPin, Phone, Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, CATEGORIES } from '../data/products';
import logoImg from '../assets/logo.jpg';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalogue?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    } else {
      navigate('/catalogue');
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      {/* Top Utility Announcement Bar */}
      <div className="bg-navy-950 text-slate-200 text-xs py-1.5 px-4">
        <div className="max-w-[1720px] w-full mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="inline-block w-2 h-2 rounded-full bg-gold-400"></span>
            <span>Welcome to <strong>{COMPANY_INFO.name}</strong></span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Direct Enquiries:</span>
              <a href="tel:9409409159" className="text-white hover:text-gold-300 transition-colors">9409409159</a>
              <span>/</span>
              <a href="tel:9993419595" className="text-white hover:text-gold-300 transition-colors">9993419595</a>
            </span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.defaultWhatsApp}?text=${encodeURIComponent("Hello Narayan-Varchas Foods, I have a product enquiry.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-[#25D366] hover:underline"
            >
              <MessageCircle className="w-3 h-3 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-3">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          
          {/* Logo and Brand Identity */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <img 
              src={logoImg} 
              alt={COMPANY_INFO.name} 
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-[1.02]" 
            />
            <div className="hidden sm:block border-l border-slate-200 pl-3">
              <p className="text-[11px] uppercase tracking-wider font-bold text-navy-900 leading-tight">
                Authentic Taste
              </p>
              <p className="text-[11px] text-slate-500 font-medium leading-tight">
                For Every Kitchen
              </p>
            </div>
          </Link>

          {/* Delivery Location Indicator (From Reference Design) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600">
            <MapPin className="w-4 h-4 text-royal shrink-0" />
            <div>
              <div className="text-[10px] text-slate-600 leading-none">Location</div>
              <div className="font-semibold text-slate-800 text-xs">Hyderabad, Telangana</div>
            </div>
          </div>

          {/* Search Bar (Matches Reference Design) */}
          <form 
            onSubmit={handleSearchSubmit}
            className="flex-1 max-w-xl hidden md:flex items-center"
          >
            <div className="relative w-full flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for pickles, gravies, batters, premixes..."
                className="w-full pl-4 pr-12 py-2.5 bg-slate-50 border border-slate-300 rounded-l-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:bg-white transition-all"
              />
              <button
                type="submit"
                aria-label="Search"
                className="bg-navy-900 hover:bg-navy-800 text-white px-5 rounded-r-lg flex items-center justify-center transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Direct CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-4 py-2 border border-navy-800 text-navy-900 hover:bg-navy-50 text-xs md:text-sm font-semibold rounded-lg transition-colors"
            >
              Business Enquiry
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.defaultWhatsApp}?text=${encodeURIComponent("Hello Narayan-Varchas Foods, I would like to inquire about your products.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold text-xs md:text-sm rounded-lg shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-navy-950" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-navy-900 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search input */}
        <form onSubmit={handleSearchSubmit} className="mt-3 md:hidden">
          <div className="relative flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pickles, gravies, batters..."
              className="w-full pl-3 pr-10 py-2 bg-slate-50 border border-slate-300 rounded-l-lg text-xs"
            />
            <button
              type="submit"
              className="bg-navy-900 text-white px-4 rounded-r-lg flex items-center justify-center"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>

      {/* Secondary Navigation Bar (Exact layout from reference) */}
      <nav className="border-t border-slate-200 bg-white">
        <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between overflow-x-auto scrollbar-none py-1">
            
            <div className="flex items-center gap-1 sm:gap-2 shrink-0 py-1">
              {/* All Products Button */}
              <Link
                to="/catalogue"
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-bold transition-colors whitespace-nowrap ${
                  isActive('/catalogue') && !location.search
                    ? 'bg-gold-100 text-navy-900 border border-gold-300'
                    : 'bg-gold-50 hover:bg-gold-100 text-navy-900'
                }`}
              >
                <Menu className="w-3.5 h-3.5" />
                <span>All Products</span>
              </Link>

              {/* Individual Category Quick Links */}
              {CATEGORIES.map((cat) => {
                const isSelected = location.pathname === '/catalogue' && location.search.includes(cat.id);
                return (
                  <Link
                    key={cat.id}
                    to={`/catalogue?category=${cat.id}`}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors ${
                      isSelected
                        ? 'text-navy-900 bg-slate-100 font-bold'
                        : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                    }`}
                  >
                    {cat.name}
                  </Link>
                );
              })}
            </div>

            {/* Right side nav items */}
            <div className="hidden lg:flex items-center gap-1 shrink-0 pl-4 border-l border-slate-200">
              <Link
                to="/story"
                className={`px-3 py-1.5 text-xs font-bold whitespace-nowrap rounded-md ${
                  isActive('/story') ? 'text-navy-900 bg-slate-100' : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                Our Story
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-1.5 text-xs font-bold whitespace-nowrap rounded-md ${
                  isActive('/contact') ? 'text-navy-900 bg-slate-100' : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                Wholesale & Contact
              </Link>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-4 shadow-xl">
          <div className="space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 rounded-md hover:bg-slate-50"
            >
              Home
            </Link>
            <Link
              to="/catalogue"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 rounded-md hover:bg-slate-50"
            >
              Browse Full Catalogue (75 Products)
            </Link>
            <Link
              to="/story"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 rounded-md hover:bg-slate-50"
            >
              Our Story & Quality Standards
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 rounded-md hover:bg-slate-50"
            >
              Business & Wholesale Enquiries
            </Link>
          </div>

          <div className="border-t border-slate-200 pt-3">
            <p className="px-3 text-xs uppercase font-bold text-slate-400 mb-2">
              Browse Categories
            </p>
            <div className="space-y-1">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/catalogue?category=${cat.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-1.5 text-xs font-medium text-slate-700 rounded-md hover:bg-slate-50"
                >
                  <span>{cat.name}</span>
                  <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                    {cat.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-200 pt-3 space-y-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.defaultWhatsApp}?text=${encodeURIComponent("Hello Narayan-Varchas Foods, I have an enquiry.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#25D366] text-white rounded-lg text-sm font-bold shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us Directly</span>
            </a>
            <div className="text-center text-xs text-slate-500 pt-1">
              Call: <a href="tel:9409409159" className="font-bold text-navy-900">9409409159</a> / <a href="tel:9993419595" className="font-bold text-navy-900">9993419595</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

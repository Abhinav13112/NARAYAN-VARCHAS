import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  ChefHat, 
  Leaf, 
  Package 
} from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '../data/products';
import { createWhatsAppUrl } from '../lib/whatsapp';

export default function WelcomeHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 4 curated showcase slides reflecting the authentic culinary range
  const slides = [
    {
      id: 1,
      badge: "AUTHENTIC TASTE FOR EVERY KITCHEN",
      badgeIcon: Sparkles,
      title: "Welcome to",
      highlightTitle: "Narayan-Varchas Foods!",
      greetingEmoji: "👋",
      description: "Good food brings people together. Let's continue your journey of authentic flavours with Narayan-Varchas heritage pickles, gravies, batters, and podis.",
      stats: [
        { label: "Total Catalogue", value: "75+ Items" },
        { label: "Core Categories", value: "7 Traditions" },
        { label: "Purity & Hygiene", value: "100% Assured" },
        { label: "Supply & Delivery", value: "Pan-India" }
      ],
      primaryBtn: { text: "Explore All Products", link: "/catalogue" },
      secondaryBtn: { text: "Direct WhatsApp Enquiry", isWhatsApp: true },
      // Product jars / showcase reflecting Pic 7 layout
      products: [
        {
          name: "Avakaya Mango Pickle",
          category: "Veg Pickles",
          weight: "250g / 500g",
          image: "/products/avakaya-mango-pickle.jpg",
          badge: "Bestseller"
        },
        {
          name: "Hyderabad Gravy Sauce",
          category: "Gravy Bases & Sauces",
          weight: "200g / 1kg",
          image: "/products/hyderabad-gravy-sauce.jpg",
          badge: "Signature"
        }
      ]
    },
    {
      id: 2,
      badge: "HERITAGE ANDHRA & TELANGANA RECIPES",
      badgeIcon: Award,
      title: "Handcrafted Heritage",
      highlightTitle: "Pickles & Karam Podis",
      greetingEmoji: "🌶️",
      description: "Sun-ripened ingredients cured in pure cold-pressed sesame oil, fiery Guntur chillies, and aromatic roasted spices. Veg, non-veg, and stone-ground podi perfection.",
      stats: [
        { label: "Veg Pickles", value: "7 Varieties" },
        { label: "Non-Veg Pickles", value: "10 Varieties" },
        { label: "Karam Podis", value: "6 Authentic" },
        { label: "Oils Used", value: "Cold-Pressed" }
      ],
      primaryBtn: { text: "Browse Pickles & Podis", link: "/catalogue?category=veg-pickles" },
      secondaryBtn: { text: "Enquire via WhatsApp", isWhatsApp: true },
      products: [
        {
          name: "Gongura Pickle",
          category: "Veg Pickles",
          weight: "250g / 500g",
          image: "/products/gongura-pickle.jpg",
          badge: "Traditional"
        },
        {
          name: "Karivepaku Karam Podi",
          category: "Karam Podi",
          weight: "100g / 250g",
          image: "/products/karivepaku-karam-podi.jpg",
          badge: "Aromatic"
        }
      ]
    },
    {
      id: 3,
      badge: "CHEF-CRAFTED CULINARY SOLUTIONS",
      badgeIcon: ChefHat,
      title: "Gourmet Simmer Gravies &",
      highlightTitle: "Cooking Sauces",
      greetingEmoji: "🍲",
      description: "Rich, velvety restaurant-quality gravy bases. Slow-simmered onion, cashew, melon seed, and tomato bases that cut preparation time to minutes with consistent taste.",
      stats: [
        { label: "Gravy Bases", value: "15 Varieties" },
        { label: "Prep Time", value: "Under 10 Mins" },
        { label: "Packaging", value: "Retail & Bulk" },
        { label: "Consistency", value: "100% 5-Star" }
      ],
      primaryBtn: { text: "View Gravies & Sauces", link: "/catalogue?category=gravy-bases-sauces" },
      secondaryBtn: { text: "Commercial Supply Enquiry", isWhatsApp: true },
      products: [
        {
          name: "Shahi Gravy Sauce",
          category: "Gravy Bases & Sauces",
          weight: "200g / 1kg",
          image: "/products/shahi-gravy-sauce.jpg",
          badge: "Royal Rich"
        },
        {
          name: "Red Gravy Base",
          category: "Gravy Bases & Sauces",
          weight: "200g / 1kg",
          image: "/products/red-gravy-base.jpg",
          badge: "Versatile"
        }
      ]
    },
    {
      id: 4,
      badge: "NATURALLY FERMENTED & HEALTHY",
      badgeIcon: Leaf,
      title: "Stone-Ground Batters &",
      highlightTitle: "Instant Food Premixes",
      greetingEmoji: "🥞",
      description: "Naturally stone-ground, preservative-free batters for fluffy idlis and crisp golden dosas, paired with nutritious millets, pongal, and instant breakfast premixes.",
      stats: [
        { label: "Fresh Batters", value: "14 Grains" },
        { label: "Instant Premixes", value: "16 Options" },
        { label: "Fermentation", value: "Natural Only" },
        { label: "Preservatives", value: "0% Added" }
      ],
      primaryBtn: { text: "Explore Batters & Premixes", link: "/catalogue?category=idli-dosa-batters" },
      secondaryBtn: { text: "Order Fresh Stock", isWhatsApp: true },
      products: [
        {
          name: "Ragi Idli Batter",
          category: "Idli/Dosa Batters",
          weight: "1 kg Pack",
          image: "/products/ragi-idli-batter.jpg",
          badge: "Nutrient Rich"
        },
        {
          name: "Pesarattu Premix",
          category: "Instant Premixes",
          weight: "500g Pack",
          image: "/products/pesarattu.jpg",
          badge: "Crispy Delight"
        }
      ]
    }
  ];

  // Auto-scroll slides horizontally every 4.5s (pauses on mouse hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlide = slides[currentSlide];
  const BadgeIcon = activeSlide.badgeIcon;

  // Prepare full product list for dynamic marquees
  const productNames = PRODUCTS.map(p => p.name);
  // Reversed copy for opposite direction
  const reversedNames = [...productNames].reverse();

  return (
    <div className="w-full space-y-4">
      
      {/* =========================================================================
          1. TOP DYNAMIC PRODUCT NAME MARQUEE (SCROLLS FROM LEFT TO RIGHT)
          ========================================================================= */}
      <div 
        className="w-full bg-navy-950 text-gold-300 py-2.5 border-y border-gold-400/20 overflow-hidden relative shadow-inner"
        title="Dynamic Product Stream • Left to Right"
      >
        <div className="animate-marquee-ltr text-xs sm:text-sm font-semibold tracking-wide flex items-center">
          {/* Repeat twice for continuous loop */}
          {[...productNames, ...productNames].map((name, idx) => (
            <span key={idx} className="inline-flex items-center mx-4 whitespace-nowrap hover:text-white transition-colors">
              <span className="text-gold-400/80 mr-2 text-[10px]">✦</span>
              <span>{name}</span>
            </span>
          ))}
        </div>
      </div>

      {/* =========================================================================
          2. PIC 7 WELCOME HERO BOX (FULL WIDTH, AUTO-SCROLLING HORIZONTALLY)
          ========================================================================= */}
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div 
          className="relative bg-gradient-to-r from-[#fefbf6] via-[#faf6ee] to-[#f7eedf] rounded-2xl sm:rounded-3xl border border-amber-200/90 shadow-lg overflow-hidden transition-all duration-500"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle decorative background watermarks */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold-200/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12 relative z-10">
            
            {/* Left Side: Welcome Greeting & Information */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Category / Tradition Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100/90 border border-gold-300 text-navy-950 text-xs font-bold tracking-wide uppercase shadow-sm">
                <BadgeIcon className="w-3.5 h-3.5 text-gold-600" />
                <span>{activeSlide.badge}</span>
              </div>

              {/* Main Welcome Heading matching Pic 7 */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-navy-950 leading-[1.2] tracking-tight">
                  {activeSlide.title}{' '}
                  <span className="text-royal">{activeSlide.highlightTitle}</span>{' '}
                  <span className="inline-block animate-bounce">{activeSlide.greetingEmoji}</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                  {activeSlide.description}
                </p>
              </div>

              {/* Key Stats Row matching Pic 7 horizontal pill style */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {activeSlide.stats.map((stat, i) => (
                  <div key={i} className="bg-white/90 backdrop-blur-sm rounded-xl border border-amber-200/80 p-3 text-center shadow-xs">
                    <p className="text-base sm:text-lg font-bold text-navy-950 font-serif">{stat.value}</p>
                    <p className="text-[11px] font-semibold text-slate-500 mt-0.5 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Call to Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  to={activeSlide.primaryBtn.link}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy-950 hover:bg-navy-900 text-gold-300 font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base group"
                >
                  <span>{activeSlide.primaryBtn.text}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={createWhatsAppUrl(COMPANY_INFO.defaultWhatsApp, `Hello Narayan-Varchas Foods, I would like to enquire about ${activeSlide.highlightTitle}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-slate-300 hover:border-slate-400 text-navy-950 font-semibold rounded-xl shadow-sm hover:bg-slate-50 transition-all text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right Side: Showcase Product Cards matching Pic 7 */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* 2-Column Product Jars / Dishes matching Pic 7 */}
                <div className="grid grid-cols-2 gap-4">
                  {activeSlide.products.map((prod, idx) => (
                    <div 
                      key={idx}
                      className="bg-white rounded-2xl border border-amber-200/80 shadow-md overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300"
                    >
                      {/* Product Image Section with official logo badge (Pic 5 match) */}
                      <div className="relative aspect-square w-full overflow-hidden bg-slate-50 border-b border-slate-100">
                        <img 
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src = "/logo.jpg";
                          }}
                        />

                        {/* Top Category Tag */}
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-2 py-0.5 rounded bg-white/95 text-[10px] font-bold text-navy-950 tracking-wide uppercase shadow-xs">
                            {prod.badge}
                          </span>
                        </div>

                        {/* Official Brand Logo Badge in Image Section (Pic 5 match) */}
                        <div className="absolute top-2.5 right-2.5 bg-white/95 rounded-md p-1 shadow-sm border border-slate-200/70">
                          <img 
                            src="/logo.jpg" 
                            alt="Narayan-Varchas" 
                            className="h-5 w-auto object-contain"
                          />
                        </div>

                        {/* Bottom Tag */}
                        <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[11px] font-semibold text-white bg-navy-950/70 backdrop-blur-xs px-2 py-1 rounded-md">
                          <span className="truncate">{prod.category}</span>
                          <span className="text-gold-300 text-[10px] shrink-0 ml-1">{prod.weight}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-3.5 flex flex-col justify-between flex-grow bg-white">
                        <h3 className="font-serif font-bold text-sm text-navy-950 group-hover:text-royal transition-colors line-clamp-1">
                          {prod.name}
                        </h3>
                        <p className="text-[11px] text-slate-500 mt-0.5">Authentic Taste & Pure Quality</p>
                        
                        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                          <span className="font-bold text-navy-950">Catalogue Item</span>
                          <Link 
                            to="/catalogue"
                            className="font-bold text-royal hover:underline flex items-center gap-1"
                          >
                            <span>View</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtle reassurance footer chip */}
                <div className="mt-3 bg-white/80 backdrop-blur-sm rounded-xl p-2.5 border border-amber-200/80 flex items-center justify-center gap-3 text-xs text-navy-950 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Freshly Prepared & Sealed Hygienically • Hyderabad Facility</span>
                </div>

              </div>
            </div>

          </div>

          {/* Slider Controls Bar (Dots & Next/Prev) */}
          <div className="px-6 sm:px-12 pb-5 pt-1 flex items-center justify-between border-t border-amber-200/60 bg-amber-50/40">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentSlide(dotIdx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === dotIdx 
                      ? 'w-8 bg-royal' 
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
              <span className="ml-2 text-xs font-semibold text-slate-500">
                Slide {currentSlide + 1} of {slides.length}
              </span>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                className="w-8 h-8 rounded-full bg-white border border-slate-300 text-navy-950 hover:bg-slate-100 flex items-center justify-center shadow-xs transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 rounded-full bg-white border border-slate-300 text-navy-950 hover:bg-slate-100 flex items-center justify-center shadow-xs transition-colors"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          3. BOTTOM DYNAMIC PRODUCT NAME MARQUEE (SCROLLS FROM RIGHT TO LEFT)
          ========================================================================= */}
      <div 
        className="w-full bg-amber-100/90 text-navy-950 py-2.5 border-y border-amber-300/60 overflow-hidden relative shadow-xs"
        title="Dynamic Product Stream • Right to Left"
      >
        <div className="animate-marquee-rtl text-xs sm:text-sm font-semibold tracking-wide flex items-center">
          {/* Repeat twice for continuous loop */}
          {[...reversedNames, ...reversedNames].map((name, idx) => (
            <span key={idx} className="inline-flex items-center mx-4 whitespace-nowrap hover:text-royal transition-colors">
              <span className="text-amber-600 mr-2 text-[10px]">★</span>
              <span>{name}</span>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

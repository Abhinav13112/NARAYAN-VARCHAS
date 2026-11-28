import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Leaf, 
  Award, 
  ChefHat, 
  Truck, 
  Package, 
  Layers, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  ExternalLink,
  Clock,
  Heart
} from 'lucide-react';
import { COMPANY_INFO, CATEGORIES, getFeaturedProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import WelcomeHeroSlider from '../components/WelcomeHeroSlider';
import { createWhatsAppUrl } from '../lib/whatsapp';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 8);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* 1. WELCOME HERO BOX & DUAL DYNAMIC PRODUCT NAME TICKERS (Matches Pic 7 Reference) */}
      <section className="pt-2">
        <WelcomeHeroSlider />
      </section>

      {/* 2. QUALITY AT EVERY STEP (Matches Reference Screenshot Layout) */}
      <section className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Process Flow */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                  Our Culinary Standards
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 mt-1">
                  Quality at Every Step
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  How we craft authentic, safe, and hygienic food for homes and businesses
                </p>
              </div>

              {/* 4 Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-lg bg-gold-100 text-gold-700 flex items-center justify-center mb-3">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gold-600 uppercase">Step 01</span>
                    <h3 className="font-bold text-navy-950 text-sm mt-0.5">Sourcing</h3>
                    <p className="text-xs text-slate-500 mt-1">Fresh ingredients from regional farmers</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase">Step 02</span>
                    <h3 className="font-bold text-navy-950 text-sm mt-0.5">Grading</h3>
                    <p className="text-xs text-slate-500 mt-1">Strict quality and sorting check</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-royal flex items-center justify-center mb-3">
                    <ChefHat className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-royal uppercase">Step 03</span>
                    <h3 className="font-bold text-navy-950 text-sm mt-0.5">Crafting</h3>
                    <p className="text-xs text-slate-500 mt-1">Authentic traditional recipes</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                    <Package className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-amber-600 uppercase">Step 04</span>
                    <h3 className="font-bold text-navy-950 text-sm mt-0.5">Sealing</h3>
                    <p className="text-xs text-slate-500 mt-1">Aroma & freshness preserved</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Checklist Card */}
            <div className="lg:col-span-4 bg-gradient-to-br from-cream-100 to-amber-50 rounded-xl p-6 border border-amber-200/60">
              <h3 className="font-serif font-bold text-navy-950 text-base mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Our Quality Promise</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>100% authentic regional Indian spices</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>No harmful artificial flavours or chemical colours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pure cold-pressed oils used in pickles & podis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Hygienic processing facility in Hyderabad</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pan-India retail & commercial supply network</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Thin Horizontal Divider Line */}
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="w-full h-px bg-slate-200/80"></div>
      </div>

      {/* 3. SHOP BY CATEGORY SECTION (Matches Reference Screenshot Layout) */}
      <section className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              Shop by Category
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Explore our complete range of authentic Indian food products
            </p>
          </div>
          <Link
            to="/catalogue"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-royal hover:text-navy-900 group"
          >
            <span>View All Products (75)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid - 7 Categories across full width */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/catalogue?category=${cat.id}`}
              className="group bg-white rounded-xl border border-slate-200 hover:border-gold-400 p-3 text-center shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-3 bg-slate-100 border-2 border-slate-100 group-hover:border-gold-300 transition-colors">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-xs text-navy-950 group-hover:text-royal transition-colors line-clamp-2 min-h-[32px] flex items-center justify-center">
                {cat.name}
              </h3>
              <span className="text-[11px] font-medium text-slate-400 mt-1">
                {cat.count} Products
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Thin Horizontal Divider Line */}
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="w-full h-px bg-slate-200/80"></div>
      </div>

      {/* 4. FEATURED PRODUCTS SHOWCASE */}
      <section className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Selection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              Featured Food Showcase
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Discover authentic gravies, pickles, batters, and podis crafted for culinary excellence
            </p>
          </div>
          <Link
            to="/catalogue"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-royal hover:text-navy-900 group"
          >
            <span>Browse Full Catalogue</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/catalogue"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl shadow-md transition-all text-sm group"
          >
            <span>Explore All 75 Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Thin Horizontal Divider Line */}
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="w-full h-px bg-slate-200/80"></div>
      </div>

      {/* 5. COMPANY STORY / BRAND SECTION (Matches Reference Screenshot Layout) */}
      <section className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Story Visual & Text */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                  Our Story
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-navy-950">
                  Rooted in Tradition, <br />Made for Today
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  At <strong>Narayan-Varchas</strong>, we bring you the authentic taste of Indian kitchens with high-quality ingredients, traditional recipes, and strict hygiene standards. Our products are crafted with care to make your cooking easier, tastier, and healthier.
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Whether you run a culinary establishment, a restaurant, or seek traditional heritage flavours for everyday home dining, our ready gravies, artisanal podis, stone-ground batters, and hand-cured pickles bring effortless authenticity to every meal.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  to="/story"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold rounded-lg text-xs sm:text-sm shadow-sm transition-all"
                >
                  <span>Read Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Why Choose Narayan-Varchas (Right Side Panel) */}
            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-10 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-center">
              <h3 className="text-base sm:text-lg font-serif font-bold text-navy-950 mb-4">
                Why Choose Narayan-Varchas?
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-100 text-gold-700 flex items-center justify-center shrink-0">
                    <ChefHat className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-950 text-sm">Authentic Indian Recipes</h4>
                    <p className="text-slate-500">Traditional recipes crafted with authentic regional taste.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-950 text-sm">High Quality Ingredients</h4>
                    <p className="text-slate-500">Sourced responsibly from trusted regional farmers and producers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-royal flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-950 text-sm">No Artificial Preservatives</h4>
                    <p className="text-slate-500">Pure, natural ingredients packed with genuine aroma and taste.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-950 text-sm">Hygienic & Safe Processing</h4>
                    <p className="text-slate-500">Maintained with strict quality standards at every single step.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Thin Horizontal Divider Line */}
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="w-full h-px bg-slate-200/80"></div>
      </div>

      {/* 6. READY FOR EVERY OCCASION (Matches Reference Screenshot Layout) */}
      <section className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
            Ready for Every Occasion
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            From everyday family meals to festival feasts and hospitality service
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            to="/catalogue?category=gravy-bases-sauces"
            className="group relative rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all"
          >
            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
                alt="Everyday Cooking"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold text-navy-950 text-sm group-hover:text-royal">Everyday Cooking</h3>
              <p className="text-xs text-slate-500 mt-0.5">Gravies & Sauces</p>
            </div>
          </Link>

          <Link
            to="/catalogue?category=veg-pickles"
            className="group relative rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all"
          >
            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
                alt="Traditional Meals"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold text-navy-950 text-sm group-hover:text-royal">Traditional Meals</h3>
              <p className="text-xs text-slate-500 mt-0.5">Pickles & Karam Podi</p>
            </div>
          </Link>

          <Link
            to="/catalogue?category=instant-foods-premixes"
            className="group relative rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all"
          >
            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
                alt="Quick & Healthy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold text-navy-950 text-sm group-hover:text-royal">Quick & Healthy</h3>
              <p className="text-xs text-slate-500 mt-0.5">Instant Foods & Premixes</p>
            </div>
          </Link>

          <Link
            to="/catalogue?category=indian-snack-marinates"
            className="group relative rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all"
          >
            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80"
                alt="Special Occasions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold text-navy-950 text-sm group-hover:text-royal">Special Occasions</h3>
              <p className="text-xs text-slate-500 mt-0.5">Marinades & Non-Veg Pickles</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Thin Horizontal Divider Line */}
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="w-full h-px bg-slate-200/80"></div>
      </div>

      {/* 7. CONTACT & DIRECT ENQUIRY SECTION */}
      <section className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-royal rounded-2xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3 py-1 bg-gold-400 text-navy-950 rounded-md text-xs font-bold uppercase tracking-wider">
                Direct Contact & Enquiries
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold">
                {COMPANY_INFO.name}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Connect directly with us for retail orders, distributor tie-ups, institutional supply, or customized bulk packaging. Our team in Hyderabad is ready to assist you.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call: <a href="tel:9409409159" className="font-bold hover:underline">9409409159</a> / <a href="tel:9993419595" className="font-bold hover:underline">9993419595</a></span>
                </div>
                <div className="text-slate-400">•</div>
                <div>Location: Hyderabad, Telangana</div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={createWhatsAppUrl(COMPANY_INFO.defaultWhatsApp, "Hello Narayan-Varchas Foods, I want to submit an enquiry.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl shadow-md transition-all text-sm"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Enquire via WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-xl transition-all text-sm"
              >
                <span>Wholesale & Partnership Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

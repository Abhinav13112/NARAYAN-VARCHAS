import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ChefHat, 
  ShieldCheck, 
  Leaf, 
  Heart, 
  Award, 
  ArrowRight, 
  Package, 
  Truck, 
  CheckCircle2,
  Users
} from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function StoryPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION (Matches Reference Screenshot `media_1795269185069_561dc2e7.jpg`) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/70 via-cream-100 to-[#faf8f5] border-b border-slate-200/80 pt-10 sm:pt-14 pb-16">
        <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-block px-3 py-1 bg-gold-100 border border-gold-300 text-navy-950 text-xs font-bold uppercase tracking-wider rounded-full">
                Our Story
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-navy-950 leading-tight">
                Authentic Flavours <br />
                <span className="text-royal">From Our Home to Yours</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium max-w-xl mx-auto lg:mx-0">
                Tradition in Every Bite — Always
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                At <strong>{COMPANY_INFO.name}</strong>, we bring the true taste of tradition to every kitchen. Our pickles, gravies, batters, and premixes are crafted with authentic regional ingredients, time-tested recipes, and uncompromising hygiene.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/catalogue"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold rounded-xl shadow-md transition-all text-sm group"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-slate-300 text-navy-950 font-semibold rounded-xl hover:bg-slate-50 transition-all text-sm"
                >
                  <span>Contact Our Team</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
                  alt="Authentic Indian Kitchen Heritage"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>

          </div>

          {/* 4 Feature Badges Bar directly under hero */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <ChefHat className="w-6 h-6 text-gold-600 mx-auto mb-2" />
              <div className="text-xs font-bold text-navy-950">100% Authentic</div>
              <div className="text-[11px] text-slate-500">Traditional Recipes</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-royal mx-auto mb-2" />
              <div className="text-xs font-bold text-navy-950">Hygienic & Safe</div>
              <div className="text-[11px] text-slate-500">Strict Quality Standards</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <Sparkles className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <div className="text-xs font-bold text-navy-950">Freshly Prepared</div>
              <div className="text-[11px] text-slate-500">Small Batches</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <Truck className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
              <div className="text-xs font-bold text-navy-950">Supply with Care</div>
              <div className="text-[11px] text-slate-500">Telangana & Pan-India</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. A JOURNEY ROOTED IN TRADITION */}
      <section className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                Our Heritage
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
                A Journey Rooted in Tradition
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong>Narayan-Varchas Foods Private Limited</strong> was established from a simple and deeply cherished belief: that authentic, wholesome food connects people and sustains cultural heritage.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                What began as a focused initiative to preserve and share the distinctive flavours of Andhra and Telangana culinary culture has blossomed into a full product line spanning artisanal pickles, slow-cooked gravy sauces, wholesome instant food premixes, and stone-ground batters.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                By blending age-old preparation techniques with modern hygiene standards, we empower home cooks, chefs, and dining institutions to serve authentic food with consistency and pride.
              </p>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-amber-50 to-cream-100 p-8 rounded-2xl border border-gold-200 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-gold-200 text-gold-700 flex items-center justify-center mx-auto text-2xl font-serif">
                “
              </div>
              <blockquote className="font-serif text-lg sm:text-xl font-bold text-navy-950 italic leading-snug">
                "We wanted every home and culinary establishment to experience the same authentic, soulful taste that we grew up with."
              </blockquote>
              <div className="pt-2">
                <span className="text-xs font-bold text-navy-950 uppercase tracking-wider block">
                  The Narayan-Varchas Philosophy
                </span>
                <span className="text-[11px] text-slate-500">
                  Hyderabad, Telangana
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHAT WE STAND FOR */}
      <section className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
            Our Core Values
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 mt-1">
            What We Stand For
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            The fundamental principles guiding every recipe, batch, and delivery
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-lg bg-gold-100 text-gold-700 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-navy-950 text-base">Authenticity</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              True traditional tastes, just like home. We preserve original recipes without modern shortcuts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-navy-950 text-base">Quality</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Only the best ingredients. Hand-picked raw spices, premium pulses, and cold-pressed pure oils.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-royal flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-navy-950 text-base">Health & Safety</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Hygienic, clean, and safe production. Free from unwanted chemical fillers and harmful adulterants.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-navy-950 text-base">Customer Trust</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We treat every customer and trade partner as an extended family member deserving the best food.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FROM FARM TO YOUR KITCHEN (PROCESS STEPS) */}
      <section className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
              Our Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 mt-1">
              From Farm to Your Kitchen
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Carefully sourced ingredients, traditional recipes, and modern hygiene standards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <span className="text-xs font-extrabold text-gold-600 block mb-1">01</span>
              <span className="text-xs font-bold text-navy-950 block">Sourced from Trusted Farmers</span>
              <span className="text-[10px] text-slate-500 mt-1 block">Fresh agricultural produce</span>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <span className="text-xs font-extrabold text-gold-600 block mb-1">02</span>
              <span className="text-xs font-bold text-navy-950 block">Carefully Selected</span>
              <span className="text-[10px] text-slate-500 mt-1 block">Graded for top purity</span>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <span className="text-xs font-extrabold text-gold-600 block mb-1">03</span>
              <span className="text-xs font-bold text-navy-950 block">Cleaned & Prepared</span>
              <span className="text-[10px] text-slate-500 mt-1 block">Purified RO washing</span>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <span className="text-xs font-extrabold text-gold-600 block mb-1">04</span>
              <span className="text-xs font-bold text-navy-950 block">Traditional Recipes</span>
              <span className="text-[10px] text-slate-500 mt-1 block">Authentic culinary method</span>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <span className="text-xs font-extrabold text-gold-600 block mb-1">05</span>
              <span className="text-xs font-bold text-navy-950 block">Hygienic Processing</span>
              <span className="text-[10px] text-slate-500 mt-1 block">Sanitized workstations</span>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <span className="text-xs font-extrabold text-gold-600 block mb-1">06</span>
              <span className="text-xs font-bold text-navy-950 block">Freshly Packed</span>
              <span className="text-[10px] text-slate-500 mt-1 block">Aroma-locking packaging</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12 text-center">
        <div className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            Experience the True Taste of Narayan-Varchas
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Browse our full 75-product showcase across gravies, marinades, pickles, podis, batters, and premixes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/catalogue"
              className="px-6 py-3 bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all"
            >
              Browse Full Catalogue
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-xl text-xs sm:text-sm transition-all"
            >
              Business & Wholesale Enquiries
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

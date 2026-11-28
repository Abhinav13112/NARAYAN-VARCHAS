import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Sparkles,
  ShieldCheck,
  ChefHat,
  Award,
  MessageCircle,
  Phone,
  X,
  ChevronRight,
  Layers,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, CATEGORIES, PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { createWhatsAppUrl } from '../lib/whatsapp';

export default function CataloguePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const searchParam = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState(searchParam);

  // Sync state with URL params
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    setSearchQuery(searchParam);
  }, [searchParam]);

  const handleCategorySelect = (catId) => {
    setSelectedCategory(catId);
    const newParams = new URLSearchParams(searchParams);
    if (catId === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', catId);
    }
    setSearchParams(newParams);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const newParams = new URLSearchParams(searchParams);
    if (query) {
      newParams.set('search', query);
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSearchParams({});
  };

  // Filter products by category and search
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.categoryId === selectedCategory;
      const matchesSearch = !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeCategoryObj = CATEGORIES.find(c => c.id === selectedCategory);

  return (
    <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-8 space-y-8">

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link to="/" className="hover:text-navy-950 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/catalogue" className="hover:text-navy-950 transition-colors">Catalogue</Link>
        {activeCategoryObj && (
          <>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-navy-950">{activeCategoryObj.name}</span>
          </>
        )}
      </nav>

      {/* Top Banner (Matches Reference Screenshot `media_1795269160324_6ef22b44.jpg`) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-gold-600 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Complete Product Catalogue</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-navy-950">
              {activeCategoryObj ? activeCategoryObj.name : "All Products"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-2xl leading-relaxed">
              {activeCategoryObj
                ? activeCategoryObj.tagline
                : "Explore our complete range of authentic Indian food products made with tradition and quality."}
            </p>
          </div>

          {/* Value Quality Badges */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Authentic Ingredients</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-100 text-amber-800 text-xs font-semibold">
              <ChefHat className="w-4 h-4 text-amber-600" />
              <span>Traditional Recipes</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100 text-royal text-xs font-semibold">
              <Award className="w-4 h-4 text-royal" />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>

        {/* Highlight Banner Inside Header */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-amber-50 via-cream-100 to-amber-50/50 p-4 rounded-xl border border-gold-200">
          <div>
            <span className="font-serif font-bold text-navy-950 text-sm sm:text-base">
              Authentic Pickles & Gravies — Bring Home the Traditional Flavours of India
            </span>
            <p className="text-xs text-slate-600 mt-0.5">
              Available for wholesale distribution, hotels, catering, and home delivery.
            </p>
          </div>
          <a
            href={createWhatsAppUrl(COMPANY_INFO.defaultWhatsApp, "Hello Narayan-Varchas Foods, I want to inquire about bulk ordering.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-navy-950 hover:bg-navy-900 text-white rounded-lg text-xs font-bold transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            <span>Enquire Now</span>
          </a>
        </div>
      </div>

      {/* Main Content Layout: Sidebar + Grid (Exact structure of Reference `media_1795269160324_6ef22b44.jpg`) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">

        {/* Left Sidebar: Categories Navigation */}
        <aside className="lg:col-span-3 space-y-6 lg:border-r lg:border-slate-200/80 lg:pr-6">
          <div className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm sticky top-24">

            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 mb-3">
              <h2 className="font-bold text-sm text-navy-950 flex items-center gap-2">
                <Layers className="w-4 h-4 text-royal" />
                <span>Categories</span>
              </h2>
              <span className="text-xs font-semibold text-slate-400">
                75 Items
              </span>
            </div>

            {/* Category Items List with subtle dividers */}
            <ul className="space-y-1 divide-y divide-slate-100/70">
              <li className="pb-1">
                <button
                  onClick={() => handleCategorySelect('all')}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left ${selectedCategory === 'all'
                      ? 'bg-navy-900 text-white font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                    }`}
                >
                  <span>All Products</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${selectedCategory === 'all' ? 'bg-navy-800 text-gold-300' : 'bg-slate-100 text-slate-500'
                    }`}>
                    75
                  </span>
                </button>
              </li>

              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <li key={cat.id} className="pt-1">
                    <button
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors text-left ${isSelected
                          ? 'bg-navy-900 text-white font-bold shadow-sm'
                          : 'text-slate-700 hover:bg-slate-100 font-medium'
                        }`}
                    >
                      <span className="line-clamp-1">{cat.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded shrink-0 ml-2 ${isSelected ? 'bg-navy-800 text-gold-300' : 'bg-slate-100 text-slate-500'
                        }`}>
                        {cat.count}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Sidebar Contact Help Box */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 bg-slate-50/80 p-3.5 rounded-lg border border-slate-200">
              <h3 className="font-bold text-xs text-navy-950 mb-1">
                Custom Orders & Distribution
              </h3>
              <p className="text-[11px] text-slate-500 mb-3 leading-relaxed">
                Need bulk packing or wholesale supply for your restaurant or retail store?
              </p>

              <div className="space-y-2 text-xs">
                <a
                  href={`tel:9409409159`}
                  className="flex items-center gap-2 text-navy-950 font-semibold hover:text-royal"
                >
                  <Phone className="w-3.5 h-3.5 text-royal" />
                  <span>+91 94094 09159</span>
                </a>
                <a
                  href={createWhatsAppUrl(COMPANY_INFO.defaultWhatsApp, "Hello, I want to discuss wholesale distribution.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 bg-[#25D366] text-white rounded text-[11px] font-bold shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp Enquiries</span>
                </a>
              </div>
            </div>

          </div>
        </aside>

        {/* Right Area: Search, Filter Tabs & Product Grid */}
        <main className="lg:col-span-9 space-y-6">

          {/* Top Controls: Search Bar & Active Filters */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search products by name or ingredient..."
                className="w-full pl-9 pr-9 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange({ target: { value: '' } })}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Results Count & Clear Button */}
            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto text-xs text-slate-500">
              <span>
                Showing <strong>{filteredProducts.length}</strong> of <strong>{PRODUCTS.length}</strong> products
              </span>
              {(selectedCategory !== 'all' || searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="text-royal font-semibold hover:underline flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-serif font-bold text-navy-950">
                No matching food products found
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                We couldn't find any products matching "{searchQuery}". Try searching for another pickle, gravy base, or batter name.
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 text-white rounded-lg text-xs font-bold hover:bg-navy-800 transition-colors"
              >
                <span>View All 75 Products</span>
              </button>
            </div>
          )}

        </main>

      </div>

    </div>
  );
}

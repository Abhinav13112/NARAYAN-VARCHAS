import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DEFAULT_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80';

export default function ProductCard({ product, showCategory = true }) {
  return (
    <div className="group bg-white rounded-xl border border-slate-200/90 hover:border-gold-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Product Image Area with Official Company Branding (Pic 5 reference) */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/60 border-b border-slate-100 flex items-center justify-center p-3">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = DEFAULT_FALLBACK_IMAGE;
          }}
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category Tag */}
        {showCategory && (
          <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-navy-950 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm border border-slate-100 z-10">
            {product.categoryName}
          </span>
        )}

        {/* Featured Tag */}
        {product.isFeatured && (
          <span className="absolute top-3 right-3 bg-gold-400 text-navy-950 font-bold text-[10px] px-2 py-0.5 rounded shadow-sm z-10">
            Featured
          </span>
        )}

        {/* Official Company Logo Brand Seal in Image Section (As shown in Pic 5) */}
        <div className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2 py-1 rounded-md shadow-md border border-slate-200/80 flex items-center gap-1.5 z-10 transition-transform group-hover:scale-105">
          <img
            src="/logo.jpg"
            alt="Narayan-Varchas"
            className="h-4.5 w-auto object-contain rounded-[2px]"
          />
          <span className="text-[10px] font-bold text-navy-950 tracking-wider uppercase font-serif">
            Narayan-Varchas
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-navy-950 text-base group-hover:text-royal transition-colors line-clamp-1 mb-1">
            {product.name}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
            {product.description || "Authentic recipe crafted with premium natural ingredients and traditional methods."}
          </p>
        </div>

        {/* Clean Action CTA (Without WhatsApp msg box as requested in Pic 2) */}
        <div className="pt-2 border-t border-slate-100">
          <Link
            to={`/product/${product.id}`}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-navy-900 hover:bg-navy-800 text-white rounded-lg text-xs font-semibold transition-all shadow-sm group-hover:bg-royal"
          >
            <span>View Info</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

    </div>
  );
}

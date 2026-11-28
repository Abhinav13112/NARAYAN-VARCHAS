import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DEFAULT_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80';

export default function ProductCard({ product, showCategory = true }) {
  return (
    <div className="group bg-white rounded-xl border border-slate-200/90 hover:border-gold-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Product Image Area */}
      <div className="relative aspect-square overflow-hidden bg-slate-100 border-b border-slate-100">
        <img
          src={product.image ? (product.image.startsWith('http') ? product.image : `${product.image}?v=2`) : DEFAULT_FALLBACK_IMAGE}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = DEFAULT_FALLBACK_IMAGE;
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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

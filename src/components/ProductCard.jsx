import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { createWhatsAppUrl } from '../lib/whatsapp';

const DEFAULT_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80';

export default function ProductCard({ product, showCategory = true }) {
  const whatsappUrl = createWhatsAppUrl(
    COMPANY_INFO.defaultWhatsApp,
    `Hello Narayan-Varchas Foods, I am interested in inquiring about "${product.name}" (${product.categoryName}).`
  );

  return (
    <div className="group bg-white rounded-xl border border-slate-200 hover:border-gold-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Product Image Area */}
      <div className="relative aspect-square overflow-hidden bg-slate-50 border-b border-slate-100 flex items-center justify-center p-3">
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
          <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-navy-950 font-semibold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm border border-slate-100">
            {product.categoryName}
          </span>
        )}

        {/* Featured Tag */}
        {product.isFeatured && (
          <span className="absolute top-3 right-3 bg-gold-400 text-navy-950 font-bold text-[10px] px-2 py-0.5 rounded shadow-sm">
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

        {/* Action CTAs */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-navy-900 hover:bg-navy-800 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            <span>View Info</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
            title="Enquire on WhatsApp"
            className="inline-flex items-center justify-center p-2 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
          </a>
        </div>

      </div>

    </div>
  );
}

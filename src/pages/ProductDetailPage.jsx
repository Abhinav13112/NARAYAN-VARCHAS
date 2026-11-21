import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowLeft, 
  ShieldCheck, 
  Sparkles, 
  ChefHat, 
  Leaf, 
  Package, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Utensils, 
  Layers
} from 'lucide-react';
import { COMPANY_INFO, getProductById, getProductsByCategory, getCategoryById } from '../data/products';
import ProductCard from '../components/ProductCard';
import { createWhatsAppUrl } from '../lib/whatsapp';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const [activeTab, setActiveTab] = useState('overview');

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-serif font-bold text-navy-950">Product Not Found</h2>
        <p className="text-sm text-slate-500">The product you are looking for does not exist in our catalogue.</p>
        <Link
          to="/catalogue"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-navy-900 text-white rounded-lg text-xs font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Catalogue</span>
        </Link>
      </div>
    );
  }

  const category = getCategoryById(product.categoryId);
  const relatedProducts = getProductsByCategory(product.categoryId)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const whatsappMessage = `Hello Narayan-Varchas Foods, I am interested in inquiring about "${product.name}" (${product.categoryName}). Please share details regarding availability and ordering.`;
  const whatsappUrl = createWhatsAppUrl(COMPANY_INFO.defaultWhatsApp, whatsappMessage);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link to="/" className="hover:text-navy-950 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/catalogue" className="hover:text-navy-950 transition-colors">Catalogue</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to={`/catalogue?category=${product.categoryId}`} className="hover:text-navy-950 transition-colors">
          {product.categoryName}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-navy-950 truncate max-w-[200px]">{product.name}</span>
      </nav>

      {/* Main Product Display Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Image Showcase (Matches Reference Layout `media_1795269150146_eb84a65e.jpg`) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-inner flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.name}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-cover rounded-xl"
              />
              
              {/* Category Badge overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md text-navy-950 font-bold text-xs uppercase tracking-wider shadow-sm border border-slate-100">
                {product.categoryName}
              </div>

              {product.isFeatured && (
                <div className="absolute top-4 right-4 bg-gold-400 text-navy-950 font-bold text-xs px-2.5 py-1 rounded shadow-sm">
                  Featured Product
                </div>
              )}
            </div>

            {/* Quality Badges Bar (Matches reference layout icons) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <ChefHat className="w-5 h-5 text-gold-600 mx-auto mb-1" />
                <span className="text-[11px] font-bold text-slate-800 block">Traditional Recipe</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <Leaf className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <span className="text-[11px] font-bold text-slate-800 block">No Preservatives</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-royal mx-auto mb-1" />
                <span className="text-[11px] font-bold text-slate-800 block">Hygienic Process</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <Sparkles className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                <span className="text-[11px] font-bold text-slate-800 block">Premium Spices</span>
              </div>
            </div>

          </div>

          {/* Right Column: Structured Information & Enquiry CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <span className="inline-block px-3 py-1 bg-royal/10 text-royal font-bold text-xs rounded-full uppercase tracking-wider mb-2">
                {product.categoryName}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-navy-950">
                {product.name}
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Authentic Food Product by <strong>{COMPANY_INFO.name}</strong>
              </p>
            </div>

            {/* Description */}
            <div className="border-t border-b border-slate-100 py-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Product Description
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Product Specifications & Culinary Details */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2.5 text-xs text-slate-700">
              <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Category</span>
                <span className="font-bold text-navy-950">{product.categoryName}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Origin</span>
                <span className="font-bold text-navy-950">Hyderabad, Telangana (India)</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Brand</span>
                <span className="font-bold text-navy-950">{COMPANY_INFO.shortName}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-500 font-medium">Quality Assurance</span>
                <span className="font-bold text-emerald-700">100% Traditional & Hygienic</span>
              </div>
            </div>

            {/* Direct Enquiry Actions (Strictly Informational, No Checkout) */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Enquire about {product.name} on WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <a
                  href="tel:9409409159"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-navy-900 hover:bg-navy-800 text-white rounded-xl font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call 9409409159</span>
                </a>
                <a
                  href="tel:9993419595"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-navy-900 hover:bg-navy-800 text-white rounded-xl font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call 9993419595</span>
                </a>
              </div>
            </div>

            {/* Bulk & Wholesale Notice */}
            <div className="p-3.5 bg-amber-50/70 rounded-xl border border-gold-200 flex items-start gap-3 text-xs text-slate-700">
              <Package className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-navy-950 block">Retail, Restaurant & Bulk Packaging</span>
                <p className="text-slate-600 text-[11px] mt-0.5">
                  Available in standard retail packs and commercial bulk containers for food service establishments and supermarkets.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Tabs Section: Product Details & Guidance */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="border-b border-slate-200 flex items-center gap-2 px-6 pt-4 bg-slate-50">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-4 text-xs font-bold border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-navy-950 text-navy-950'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Product Overview
          </button>
          <button
            onClick={() => setActiveTab('category-info')}
            className={`pb-3 px-4 text-xs font-bold border-b-2 transition-colors ${
              activeTab === 'category-info'
                ? 'border-navy-950 text-navy-950'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Category Information
          </button>
          <button
            onClick={() => setActiveTab('wholesale')}
            className={`pb-3 px-4 text-xs font-bold border-b-2 transition-colors ${
              activeTab === 'wholesale'
                ? 'border-navy-950 text-navy-950'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Wholesale & Enquiries
          </button>
        </div>

        <div className="p-6 sm:p-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {activeTab === 'overview' && (
            <div className="space-y-4 max-w-3xl">
              <h4 className="font-bold text-navy-950 text-base">About {product.name}</h4>
              <p>
                {product.description}
              </p>
              <div className="pt-2">
                <h5 className="font-bold text-navy-950 mb-2">Quality & Authenticity Highlights:</h5>
                <ul className="space-y-1.5 list-disc pl-5 text-slate-600">
                  <li>Prepared according to authentic regional Indian culinary standards.</li>
                  <li>Blended with premium spices sourced directly from trusted growers.</li>
                  <li>Manufactured and packed in clean, safe, and hygienic food facilities.</li>
                  <li>Pure formulation without unnecessary artificial fillers or colors.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'category-info' && (
            <div className="space-y-4 max-w-3xl">
              <h4 className="font-bold text-navy-950 text-base">{product.categoryName}</h4>
              <p>
                {category?.tagline || "Authentic culinary solutions crafted for Indian cuisine enthusiasts and professional chefs."}
              </p>
              <p>
                Browse through our other products in the <strong>{product.categoryName}</strong> range or explore our complete 75-item catalogue.
              </p>
              <Link
                to={`/catalogue?category=${product.categoryId}`}
                className="inline-flex items-center gap-1.5 text-royal font-bold hover:underline"
              >
                <span>View all products in {product.categoryName}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {activeTab === 'wholesale' && (
            <div className="space-y-4 max-w-3xl">
              <h4 className="font-bold text-navy-950 text-base">Wholesale & Institutional Enquiries</h4>
              <p>
                <strong>{COMPANY_INFO.name}</strong> supplies hotels, caterers, modern trade supermarkets, and grocery distributors across Telangana and other Indian states.
              </p>
              <p>
                For custom order sizes, dealership inquiries, or institutional samples of {product.name}, reach out to our trade desk directly:
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#25D366] text-white rounded-lg font-bold text-xs inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Trade WhatsApp Enquiry</span>
                </a>
                <span className="text-slate-600 font-semibold">
                  Phone: 9409409159 / 9993419595
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products in the Same Category */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-950">
                More in {product.categoryName}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Explore related culinary staples from this category</p>
            </div>
            <Link
              to={`/catalogue?category=${product.categoryId}`}
              className="text-xs sm:text-sm font-bold text-royal hover:underline flex items-center gap-1"
            >
              <span>View Category</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} showCategory={false} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

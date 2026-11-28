import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Building2, 
  Store, 
  UtensilsCrossed, 
  ChefHat, 
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { createWhatsAppUrl } from '../lib/whatsapp';
import { submitEnquiry } from '../lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'Wholesale & Distribution',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your name and contact phone number.');
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    try {
      // 1. Submit to Supabase database (if configured)
      await submitEnquiry({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        enquiryType: formData.enquiryType,
        message: formData.message
      });

      setSubmitted(true);

      // 2. Format prefilled WhatsApp message
      const formattedMsg = `*New Business Enquiry*\n*Company:* ${COMPANY_INFO.name}\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}${formData.email ? `\n*Email:* ${formData.email}` : ''}\n*Type:* ${formData.enquiryType}\n*Message:* ${formData.message || 'I would like to inquire about your products.'}`;
      
      const whatsappUrl = createWhatsAppUrl(COMPANY_INFO.defaultWhatsApp, formattedMsg);

      // Open WhatsApp after a brief delay
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 500);

    } catch (err) {
      console.error(err);
      setErrorMessage('Failed to send enquiry. Please contact us directly via WhatsApp or phone.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO HEADER (Matches Reference Screenshot `media_1795269180640_687d434b.jpg`) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/70 via-cream-100 to-[#faf8f5] border-b border-slate-200/80 pt-10 sm:pt-14 pb-16">
        <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-gold-100 border border-gold-300 text-navy-950 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
              Business & Partnerships
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-navy-950 leading-tight">
              Let's Bring Authentic Flavours <br />
              <span className="text-royal">to More Homes</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
              Partner with <strong>{COMPANY_INFO.name}</strong> for authentic, high-quality Indian food products. We work with retailers, distributors, restaurants, cloud kitchens, and supermarkets across India.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600">
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-royal" />
                <span>Wide Product Range (75 Products)</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
                <span>Competitive Trade Pricing</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Consistent Supply</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & DIRECT ENQUIRY FORM */}
      <section className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h2 className="font-serif font-bold text-xl text-navy-950">
                Contact Details
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                Reach out for retail questions, distributor partnerships, bulk kitchen orders, or trade inquiries.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Phone Call Card */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy-100 text-navy-950 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Direct Contact Numbers
                    </span>
                    <a href="tel:9409409159" className="text-sm font-bold text-navy-950 hover:text-royal block mt-0.5">
                      +91 94094 09159
                    </a>
                    <a href="tel:9993419595" className="text-sm font-bold text-navy-950 hover:text-royal block">
                      +91 99934 19595
                    </a>
                    <span className="text-[10px] text-slate-400 mt-1 block">Mon – Sat (Business Hours)</span>
                  </div>
                </div>

                {/* WhatsApp Enquiry Card */}
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                      WhatsApp Quick Enquiry
                    </span>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Chat directly with our sales & customer care team.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <a
                        href={createWhatsAppUrl("919409409159", "Hello, I want to inquire about Narayan-Varchas Foods products.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-md shadow-sm transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>Chat: 9409409159</span>
                      </a>
                      <a
                        href={createWhatsAppUrl("919993419595", "Hello, I want to inquire about Narayan-Varchas Foods products.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10 text-xs font-bold rounded-md transition-all"
                      >
                        <span>Chat: 9993419595</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Company & Location Card */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold-100 text-gold-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold-700" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Registered Company
                    </span>
                    <p className="text-xs font-bold text-navy-950 mt-0.5">
                      {COMPANY_INFO.name}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Industry: {COMPANY_INFO.industry}
                    </p>
                    <p className="text-xs text-slate-500">
                      Location: Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Send Us A Message Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-navy-950 mb-1">
              Send us a Message
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Fill in your details and our team will get back to you immediately on WhatsApp and phone.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-navy-950 text-base">Enquiry Sent Successfully!</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your enquiry has been received. WhatsApp has been opened for direct instant communication with our team.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      enquiryType: 'Wholesale & Distribution',
                      message: ''
                    });
                  }}
                  className="px-4 py-2 bg-navy-900 text-white rounded-lg text-xs font-bold"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy-950 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-950 mb-1">
                      Contact Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9409409159"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy-950 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-950 mb-1">
                      Enquiry Type
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:bg-white font-medium"
                    >
                      <option value="Wholesale & Distribution">Wholesale & Distribution</option>
                      <option value="Retail Enquiry">Retail Customer Enquiry</option>
                      <option value="Restaurant / Cloud Kitchen Supply">Restaurant / Cloud Kitchen Supply</option>
                      <option value="Supermarket / Modern Trade">Supermarket / Modern Trade</option>
                      <option value="General Enquiry">General Information</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-950 mb-1">
                    Your Message / Requirements
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what food products, quantities, or details you need..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:bg-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold rounded-xl shadow-md transition-all text-sm disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Submitting...' : 'Send Message & Open WhatsApp'}</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  Direct enquiry to <strong>{COMPANY_INFO.name}</strong> • Immediate response guaranteed
                </p>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* 3. BUSINESS SEGMENTS (Matches Reference Screenshot `media_1795269180640_687d434b.jpg`) */}
      <section className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
            Wholesale & Commercial Supply
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 mt-1">
            Business Segments We Serve
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Tailored supply chains, consistent batch quality, and dedicated trade support
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-navy-100 text-royal flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-navy-950 text-base">Retailers & Distributors</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Expand your product range with fast-moving traditional pickles, podis, and batters.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-gold-100 text-gold-700 flex items-center justify-center">
              <Store className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-navy-950 text-base">Supermarkets & Modern Trade</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Attractive retail-ready packaging with complete barcode, branding, and long shelf stability.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-navy-950 text-base">Restaurants & Hotels</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Cut preparation time and kitchen overhead with consistent, restaurant-grade gravy bases and marinades.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
              <ChefHat className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-navy-950 text-base">Catering & Food Services</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Reliable, bulk-scale supply of batters, instant rice premixes, and podis for large events.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

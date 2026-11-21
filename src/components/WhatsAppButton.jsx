import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { createWhatsAppUrl } from '../lib/whatsapp';

export default function WhatsAppButton({ 
  phone = COMPANY_INFO.defaultWhatsApp, 
  message = "Hello, I am interested in knowing more about Narayan-Varchas Foods products.",
  children,
  className = "",
  variant = "primary" // "primary" | "outline" | "floating"
}) {
  const url = createWhatsAppUrl(phone, message);

  if (variant === "floating") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20ba59] hover:shadow-xl transition-all duration-300 font-medium ${className}`}
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline text-sm font-semibold tracking-wide">WhatsApp Enquiry</span>
      </a>
    );
  }

  if (variant === "outline") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10 rounded-lg text-sm font-medium transition-colors ${className}`}
      >
        <MessageCircle className="w-4 h-4 text-[#25D366]" />
        <span>{children || "WhatsApp Enquiry"}</span>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg font-medium shadow-sm transition-all duration-200 ${className}`}
    >
      <MessageCircle className="w-4 h-4 fill-white" />
      <span>{children || "WhatsApp Enquiry"}</span>
    </a>
  );
}

import { COMPANY_INFO } from '../data/products';

export function createWhatsAppUrl(phone = COMPANY_INFO.defaultWhatsApp, text = "Hello, I am interested in knowing more about Narayan-Varchas Foods products.") {
  const cleanPhone = String(phone).replace(/\D/g, '');
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

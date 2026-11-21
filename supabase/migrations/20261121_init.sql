-- ==========================================================
-- NARAYAN-VARCHAS FOODS PRIVATE LIMITED
-- Supabase Database Schema & Initial Migration
-- ==========================================================

-- 1. Categories Table
CREATE TABLE IF NOT EXISTS public.categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    count INTEGER NOT NULL DEFAULT 0,
    tagline TEXT,
    image TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Products Table
CREATE TABLE IF NOT EXISTS public.products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category_id TEXT NOT NULL REFERENCES public.categories(id) ON DELETE CASCADE,
    category_name TEXT NOT NULL,
    image TEXT,
    description TEXT,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Inquiries Table
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT NOT NULL,
    enquiry_type TEXT DEFAULT 'General',
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Row Level Security (RLS)
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Public read access for categories and products
CREATE POLICY "Allow public read access for categories" 
    ON public.categories FOR SELECT USING (true);

CREATE POLICY "Allow public read access for products" 
    ON public.products FOR SELECT USING (true);

-- Public insert access for customer enquiries
CREATE POLICY "Allow public insert for enquiries" 
    ON public.enquiries FOR INSERT WITH CHECK (true);

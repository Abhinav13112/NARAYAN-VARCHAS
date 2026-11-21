import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

/**
 * Submit an enquiry to Supabase if configured
 */
export async function submitEnquiry({ name, phone, email, enquiryType, message }) {
  if (!supabase) {
    console.warn('Supabase is not configured. Enquiry logged locally.');
    return { success: true, localOnly: true };
  }

  try {
    const { data, error } = await supabase
      .from('enquiries')
      .insert([
        {
          name,
          phone,
          email: email || null,
          enquiry_type: enquiryType || 'General Enquiry',
          message: message || ''
        }
      ]);

    if (error) {
      console.error('Supabase error inserting enquiry:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Failed to submit enquiry:', err);
    return { success: false, error: err };
  }
}

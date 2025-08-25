import { createClient } from '@supabase/supabase-js';

const URL = 'https://swjenskcpjbfmzopypjr.supabase.co';
const API_KEY = 'sb_publishable_AiZ-69xYJyo38Uo9FAY4yw_aCHgKYwN';
const supabase = createClient(URL, API_KEY)
export default supabase;

import { SupabaseClient, User, createClient } from '@supabase/supabase-js';

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseKey, environment.supabaseUrl);
  }
}

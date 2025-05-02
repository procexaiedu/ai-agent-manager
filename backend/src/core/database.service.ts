import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_CLIENT } from './database.constants';

@Injectable()
export class DatabaseService {
  constructor(
    @Inject(SUPABASE_CLIENT) private readonly supabase: SupabaseClient,
  ) {}

  getClient(): SupabaseClient {
    return this.supabase;
  }

  // You can add more specific methods here to interact with Supabase tables
  // For example:
  // async getUsers() {
  //   const { data, error } = await this.supabase.from('users').select('*');
  //   if (error) throw error;
  //   return data;
  // }
}

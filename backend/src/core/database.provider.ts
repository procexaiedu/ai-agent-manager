// src/core/database.provider.ts
import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_CLIENT } from './database.constants';

export const supabaseProvider: Provider = {
  provide: SUPABASE_CLIENT,
  inject: [ConfigService],
  useFactory: (configService: ConfigService): SupabaseClient => {
    const supabaseUrl = configService.get<string>('SUPABASE_URL');
    const supabaseServiceRoleKey = configService.get<string>(
      'SUPABASE_SERVICE_ROLE_KEY',
    );

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      throw new Error(
        'Supabase URL or Service Role Key not found in environment variables',
      );
    }

    return createClient(supabaseUrl, supabaseServiceRoleKey, {
      // Optional: Configure Supabase client options here
      // auth: {
      //   autoRefreshToken: true,
      //   persistSession: false, // Typically false for backend service roles
      //   detectSessionInUrl: false,
      // },
    });
  },
};

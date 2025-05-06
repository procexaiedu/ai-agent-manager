import { Module, Global } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Define the injection token
export const SUPABASE_CLIENT = 'SUPABASE_CLIENT';

@Global() // Optional: Make CoreModule global if its exports are needed everywhere
@Module({
  providers: [
    {
      provide: SUPABASE_CLIENT,
      useFactory: (configService: ConfigService): SupabaseClient => {
        const supabaseUrl = configService.get<string>('SUPABASE_URL');
        const supabaseKey = configService.get<string>('SUPABASE_SERVICE_ROLE_KEY');

        if (!supabaseUrl || !supabaseKey) {
          throw new Error('Supabase URL or Key not configured in environment variables');
        }

        return createClient(supabaseUrl, supabaseKey, {
          // Optional: Configure auth persistence, defaults to localStorage
          auth: {
             persistSession: false, // Typically false for backend service roles
             autoRefreshToken: false, // Typically false for backend service roles
             detectSessionInUrl: false // Typically false for backend service roles
          }
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [SUPABASE_CLIENT], // Export the provider
})
export class CoreModule {}

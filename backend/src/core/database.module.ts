import { Module } from '@nestjs/common';
import { supabaseProvider } from './database.provider';
import { SUPABASE_CLIENT } from './database.constants';
import { DatabaseService } from './database.service';

@Module({
  providers: [
    supabaseProvider,
    DatabaseService,
  ],
  // Export the token and the service so other modules can inject either
  exports: [
    SUPABASE_CLIENT, 
    DatabaseService,
  ], 
})
export class DatabaseModule {}

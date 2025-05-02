import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database.module'; 
import { AuthModule } from './api/auth/auth.module';
import { PlaygroundModule } from './api/playground/playground.module';
import { AgentConfigModule } from './api/agent-config/agent-config.module';
import { InboxModule } from './api/inbox/inbox.module';
import { KnowledgeModule } from './api/knowledge/knowledge.module';
import { PromptEngineerModule } from './api/prompt-engineer/prompt-engineer.module';
import { CrmModule } from './api/crm/crm.module';
import { DashboardModule } from './api/dashboard/dashboard.module';
import { SystemConfigModule } from './api/system-config/system-config.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    DatabaseModule, 
    AuthModule,
    PlaygroundModule,
    AgentConfigModule,
    InboxModule,
    KnowledgeModule,
    PromptEngineerModule,
    CrmModule,
    DashboardModule,
    SystemConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

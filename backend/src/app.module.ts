import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { ConfigModule } from './config/config.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [TransactionsModule, ConfigModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

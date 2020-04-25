import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [TransactionsModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

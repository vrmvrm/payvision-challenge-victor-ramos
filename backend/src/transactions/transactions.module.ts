import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { ApiService } from '../api/api.service';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, ApiService],
})
export class TransactionsModule {}

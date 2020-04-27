import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  TransactionQueryDto,
  TransactionEntity,
  TransactionResponseDto,
} from './dto/transaction.dto';

import { transactionFormat } from './utils/format/format.utils';
import { ApiService } from '../api/api.service';

@Injectable()
export class TransactionsService {

  constructor(private readonly api: ApiService) {}

  async getTransaction(id: string): Promise<TransactionResponseDto> {
    const transactions: TransactionEntity[] = await this.api.getTransactions();
    const transaction: TransactionEntity = transactions.find(t => t.id === id);
    if (!transaction) {
      throw new NotFoundException('Transaction not found!');
    }
    return transactionFormat(transaction);
  }

  async getTransactions(
    params: TransactionQueryDto,
  ): Promise<TransactionResponseDto[]> {
    const transactions: TransactionEntity[] = await this.api.getTransactions(params);
    return transactions.map(transactionFormat);
  }
}

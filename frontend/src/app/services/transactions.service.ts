import { Injectable } from '@angular/core';
import axios from 'axios';
import { TransactionQueryDto, TransactionResponseDto } from './dto/transaction.dto';

@Injectable()
export class TransactionsService {
  constructor() {}

  async getTransactions(params: TransactionQueryDto): Promise<TransactionResponseDto[]> {
    const { data } = await axios.get('http://localhost:3000/transactions', {
      params,
    });
    return data;
  }
}

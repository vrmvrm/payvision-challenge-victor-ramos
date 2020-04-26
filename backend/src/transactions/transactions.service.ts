import {
  Injectable,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
  ForbiddenException,
} from '@nestjs/common';
import axios from 'axios';
import * as HttpStatusCodes from 'http-status-codes';

import { ConfigService } from '../config/config.service';
import {
  TransactionQueryDto,
  TransactionEntity,
  TransactionResponseDto,
} from './dto/transaction.dto';

import { transactionFormat } from './utils/format/format.utils';

@Injectable()
export class TransactionsService {
  private readonly endpoint = this.config.get<string>('api.endpoint');
  private readonly username = this.config.get<string>('api.username');
  private readonly password = this.config.get<string>('api.password');

  constructor(private readonly config: ConfigService) {}

  private async makeRequest(
    params?: TransactionQueryDto,
  ): Promise<TransactionEntity[]> {
    try {
      const { data } = await axios.get(this.endpoint, {
        auth: {
          username: this.username,
          password: this.password,
        },
        params,
      });
      return data;
    } catch (e) {
      const { status, message } = e.response || e;
      switch (status) {
        case HttpStatusCodes.BAD_REQUEST:
          throw new BadRequestException('Invalid filters');
        case HttpStatusCodes.FORBIDDEN:
          throw new ForbiddenException('Invalid api credentials');
        default:
          throw new InternalServerErrorException(message);
      }
    }
  }

  async getTransaction(id: string): Promise<TransactionResponseDto> {
    const transactions: TransactionEntity[] = await this.makeRequest();
    const transaction: TransactionEntity = transactions.find(t => t.id === id);
    if (!transaction) {
      throw new NotFoundException('Transaction not found!');
    }
    return transactionFormat(transaction);
  }

  async getTransactions(
    params: TransactionQueryDto,
  ): Promise<TransactionResponseDto[]> {
    const transactions: TransactionEntity[] = await this.makeRequest(params);
    return transactions.map(transactionFormat);
  }
}

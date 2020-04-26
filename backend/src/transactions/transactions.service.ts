import {
  Injectable,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import axios from 'axios';

import { ConfigService } from '../config/config.service';
import {
  TransactionQueryDto,
  TransactionEntity,
  TransactionResponseDto,
} from './dto/transaction.dto';

@Injectable()
export class TransactionsService {
  private readonly endpoint = this.config.get<string>('api.endpoint');
  private readonly username = this.config.get<string>('api.username');
  private readonly password = this.config.get<string>('api.password');
  private readonly cardBrands = [
    {
      regex: /^5[1-5]/,
      brand: 'MasterCard',
    },
    {
      regex: /^3[47]/,
      brand: 'AMEX',
    },
    {
      regex: /^6(?:011|5[0-9]{2})/,
      brand: 'Discover',
    },
    {
      regex: /^3(?:0[0-5]|[68][0-9])/,
      brand: 'Diners Club',
    },
    {
      regex: /^4/,
      brand: 'VISA',
    },
  ];
  constructor(private readonly config: ConfigService) {}

  private async makeRequest(
    params?: TransactionQueryDto,
  ): Promise<TransactionEntity[]> {
    try {
      const response = await axios.get(this.endpoint, {
        auth: {
          username: this.username,
          password: this.password,
        },
        params,
      });
      return response.data;
    } catch (e) {
      if (e.response.status === 400) {
        throw new BadRequestException('Invalid filters');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  private getCardBrand(transaction: TransactionEntity): string {
    for (const { regex, brand } of this.cardBrands) {
      if (transaction.card.firstSixDigits.match(regex)) {
        return brand;
      }
    }
    return 'not brand';
  }

  async getTransaction(id: string): Promise<TransactionResponseDto> {
    const transactions: TransactionEntity[] = await this.makeRequest();
    const transaction: TransactionEntity = transactions.find(t => t.id === id);
    if (!transaction) {
      throw new NotFoundException('Transaction not found!');
    }
    const brand: string = this.getCardBrand(transaction);
    const transactionFormatted: TransactionResponseDto = {
      ...transaction,
      brand,
    };
    return transactionFormatted;
  }

  async getTransactions(
    params: TransactionQueryDto,
  ): Promise<TransactionResponseDto[]> {
    const transactions: TransactionEntity[] = await this.makeRequest(params);
    const transactionsFormatted: TransactionResponseDto[] = transactions.map(
      t => {
        return {
          ...t,
          brand: this.getCardBrand(t),
        };
      },
    );
    return transactionsFormatted;
  }
}

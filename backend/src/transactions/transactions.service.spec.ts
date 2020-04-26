import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsService } from './transactions.service';
import { ConfigService } from '../config/config.service';
import {
  TransactionQueryDto,
  TransactionResponseDto,
} from './dto/transaction.dto';
import { NotFoundException, BadRequestException } from '@nestjs/common';

describe('TransactionsService', () => {
  let service: TransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsService, ConfigService],
    }).compile();

    service = module.get<TransactionsService>(TransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a transactions array', async () => {
    const params: TransactionQueryDto = {};
    const newTransactions: TransactionResponseDto[] = await service.getTransactions(
      params,
    );
    expect(newTransactions.length).toBeGreaterThan(0);
  });

  it('should throw a bad request exception', async () => {
    const error = new BadRequestException('Invalid filters');
    const params: TransactionQueryDto = {
      action: '',
    };
    await expect(service.getTransactions(params)).rejects.toThrow(error);
  });

  it('should return a transaction element', async () => {
    const params: TransactionQueryDto = {};
    const transactions: TransactionResponseDto[] = await service.getTransactions(
      params,
    );
    const transaction: TransactionResponseDto = transactions.shift();
    const newTransaction: TransactionResponseDto = await service.getTransaction(
      transaction.id,
    );
    expect(newTransaction).toStrictEqual(transaction);
  });

  it('should throw a not found expection', async () => {
    const error = new NotFoundException('Transaction not found!');
    await expect(service.getTransaction('')).rejects.toThrow(error);
  });
});

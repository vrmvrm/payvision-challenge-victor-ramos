import { TransactionsService } from './transactions.service';
import {
  TransactionQueryDto,
  TransactionResponseDto,
} from './dto/transaction.dto';
import { NotFoundException, BadRequestException } from '@nestjs/common';

describe('TransactionsService', () => {
  let service: TransactionsService;
  
  const apiService = {
    getTransactions: jest.fn()
  }

  const exampleTransaction = {
    id: 1,
    card: {
      firstSixDigits: '123'
    }
  }

  beforeEach(async () => {
    service = new TransactionsService(apiService as any)
  });

  afterEach(() => {
    apiService.getTransactions.mockClear()
  })


  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a transactions array', async () => {
    apiService.getTransactions.mockImplementation(() => ([exampleTransaction]))
    const params: TransactionQueryDto = {};
    const newTransactions: TransactionResponseDto[] = await service.getTransactions(
      params,
    );
    expect(newTransactions.length).toEqual(1);
  });

  it('should throw a bad request exception', async () => {
    apiService.getTransactions.mockImplementation(() => {
      throw new BadRequestException('Invalid filters')
    })
    const error = new BadRequestException('Invalid filters');
    const params: TransactionQueryDto = {
      action: '',
    };
    await expect(service.getTransactions(params)).rejects.toThrow(error);
  });

  it('should return a transaction element', async () => {
    apiService.getTransactions.mockImplementation(() => ([exampleTransaction]))
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
    apiService.getTransactions.mockImplementation(() => ([exampleTransaction]))
    const error = new NotFoundException('Transaction not found!');
    await expect(service.getTransaction('')).rejects.toThrow(error);
  });
});

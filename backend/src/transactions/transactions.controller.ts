import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiUseTags } from '@nestjs/swagger';

import { TransactionsService } from './transactions.service';
import {
  TransactionQueryDto,
  TransactionResponseDto,
} from './dto/transaction.dto';

@Controller('transactions')
@ApiUseTags('Transactions')
export class TransactionsController {
  constructor(private readonly service: TransactionsService) {}

  @Get()
  @ApiOperation({
    title: 'Get transactions',
    description: 'Get transactions list',
  })
  @ApiOkResponse({
    type: [TransactionResponseDto],
  })
  async getTransactions(
    @Query() params: TransactionQueryDto,
  ): Promise<TransactionResponseDto[]> {
    return this.service.getTransactions(params);
  }

  @Get(':id')
  @ApiOperation({
    title: 'Get transaction',
    description: 'Get a specific transaction',
  })
  @ApiOkResponse({
    type: TransactionResponseDto,
  })
  async getTransaction(
    @Param('id') id: string,
  ): Promise<TransactionResponseDto> {
    return this.service.getTransaction(id);
  }
}

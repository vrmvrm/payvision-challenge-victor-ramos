import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './services/transactions.service';
import { TransactionResponseDto, TransactionQueryDto } from './services/dto/transaction.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public transactions: TransactionResponseDto[];
  public actions = [
    {
      name: 'Transaction type',
      value: null,
    },
    {
      name: 'Payment',
      value: 'payment',
    },
    {
      name: 'Credit',
      value: 'credit',
    },
  ];
  public currencies = [
    {
      name: 'Currency',
      value: null,
    },
    {
      name: 'EUR',
      value: 'EUR',
    },
    {
      name: 'USD',
      value: 'USD',
    },
    {
      name: 'JPY',
      value: 'JPY',
    },
  ];
  action: string;
  currency: string;

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit() {
    this.getTransactions();
  }

  onClick() {
    this.getTransactions();
  }

  getSelected(value) {
    if (value.value === 'null') {
      value.value = undefined;
    }
    if (value.name === 'actions') {
      this.action = value.value;
    }
    if (value.name === 'currencies') {
      this.currency = value.value;
    }
  }

  private async getTransactions() {
    const params: TransactionQueryDto = {
      action: this.action,
      currencyCode: this.currency,
    };
    this.transactions = await this.transactionsService.getTransactions(params);
  }
}

import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './services/transactions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public transactions;
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
    {
      name: 'Authorize',
      value: 'authorize',
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
    {
      name: 'GBP',
      value: 'GBP',
    },
  ];

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit() {
    this.getTransactions();
  }

  private async getTransactions() {
    this.transactions = await this.transactionsService.getTransactions(undefined);
  }
}

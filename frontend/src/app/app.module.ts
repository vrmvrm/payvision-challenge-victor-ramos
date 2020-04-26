import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionsService } from './services/transactions.service';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TransactionComponent, FilterComponent],
  imports: [BrowserModule, FormsModule],
  providers: [TransactionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

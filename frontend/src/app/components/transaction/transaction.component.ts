import { Component, OnInit, Input } from '@angular/core';
import { TransactionResponseDto } from 'src/app/services/dto/transaction.dto';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  @Input() transaction: TransactionResponseDto;
  public show = false;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.show = !this.show;
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-transaction',
    templateUrl: './transaction.component.html',
    styles: [],
})
export class TransactionComponent implements OnInit {
    @Input() transaction: any = {};

    constructor() {}

    ngOnInit() {
        console.log(this.transaction);
    }
}

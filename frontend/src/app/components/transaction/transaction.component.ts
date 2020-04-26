import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-transaction',
    templateUrl: './transaction.component.html',
    styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
    @Input() transaction: any = {};
    public show = false;
    constructor() {}

    ngOnInit() {}

    onClick() {
        this.show = !this.show;
    }
}

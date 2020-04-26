import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
    @Input() filters = {};
    @Input() name = {};

    @Output() value = new EventEmitter<any>();
    selected: string;

    constructor() {}

    ngOnInit() {
        this.selected = this.filters[0].value;
    }

    onEmit() {
        this.value.emit({
            name: this.name,
            value: this.selected,
        });
    }
}

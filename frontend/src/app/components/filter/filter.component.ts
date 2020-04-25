import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styles: [],
})
export class FilterComponent implements OnInit {
    @Input() filters = {};
    @Input() name = {};

    constructor() {}

    ngOnInit() {}
}

import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class TransactionsService {
    constructor() {}

    async getTransactions(params) {
        console.log('Entra SI!');
        const response = await axios.get('http://localhost:3000/transactions', { params });
        return response.data;
    }
}
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TransactionService {
  TRANSACTION_MOCK = [
    {
      name: 'Wire',
      amount: '$3.99',
      tax: '$0.39'
    },
    {
      name: 'Wood',
      amount: '$1899',
      tax: '$189.90'
    },
    {
      name: 'Truck',
      amount: '$32,000',
      tax: '$3,200'
    },
    {
      name: 'Clothing',
      amount: '$45',
      tax: '$4.50'
    },
    {
      name: 'Clothing',
      amount: '$45',
      tax: '$4.50'
    },
    {
      name: 'Clothing',
      amount: '$45',
      tax: '$4.50'
    },
    {
      name: 'Clothing',
      amount: '$45',
      tax: '$4.50'
    },
    {
      name: 'Clothing',
      amount: '$45',
      tax: '$4.50'
    },
    {
      name: 'Clothing',
      amount: '$45',
      tax: '$4.50'
    },
    {
      name: 'Clothing',
      amount: '$45',
      tax: '$4.50'
    },
    {
      name: 'Clothing',
      amount: '$45',
      tax: '$4.50'
    },
    {
      name: 'Clothing',
      amount: '$45',
      tax: '$4.50'
    },
    {
      name: 'Clothing',
      amount: '$45',
      tax: '$4.50'
    },
    {
      name: 'Clothing',
      amount: '$45',
      tax: '$4.50'
    },
    {
      name: 'Clothing',
      amount: '$45',
      tax: '$4.50'
    },
    {
      name: 'Clothing',
      amount: '$45',
      tax: '$4.50'
    },
    {
      name: 'Clothing',
      amount: '$45',
      tax: '$4.50'
    }
  ];

  getTransaction() {
    return Observable.of(this.TRANSACTION_MOCK);
  }
}
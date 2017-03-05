import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
//import { Client } from 'ws';
//import { EventEmitter } from 'events';
//import * as DuplexEmitter from 'duplex-emitter';
//
//import * as _ from 'underscore';
// var Client = require('../../server/client.js');

// import { Client } from 'server/client';

@Injectable()
export class TransactionService {
  TRANSACTION_MOCK = [
    {
      name: 'Bunnings',
      description: 'Woodhouse 88 x 88mm 2.4m H3 Pink Primed Timber Posts x4',
      amount: '$208.72',
      date: '04/03/17'
    },
    {
      name: 'Bunnings',
      description: 'Woodhouse 66 x 18mm 5.4m Pine Moulding Fj Half Splayed Primed x8',
      amount: '$138.24',
      date: '04/03/17'
    },
    {
      name: 'Mitre 10',
      description: 'Dewalt 18V SDS+ Li-Ion Rotary Hammer',
      amount: '$76.99',
      date: '04/03/16'
    }
  ];

  getTransaction() {
    return Observable.of(this.TRANSACTION_MOCK);
  }
  // public Client = Client;
  // constructor(){
  //   console.log("STUFF!",Client);
  // }
}

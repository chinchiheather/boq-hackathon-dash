import { TransactionService } from './shared/transaction.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private tranServ: TransactionService){
    console.log(tranServ);
  }
}

import { Component } from "@angular/core";
import { TransactionService } from "../../shared/transaction.service";

@Component({
  selector: "list",
  templateUrl: "pages/list/list.component.html",
  styleUrls: ["pages/list/list.css"],
  providers: [TransactionService]
})
export class ListComponent {
  public transactions;

  constructor(private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.transactionService.getTransaction().subscribe(transactions => this.transactions = transactions);
  }

  onSubmit() {

  }
}
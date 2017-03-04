import { Component } from "@angular/core";

@Component({
  selector: "list",
  templateUrl: "pages/list/list.component.html",
  styleUrls: ["pages/list/list.css"]
})
export class ListComponent {
  transactions: [
    {
      name: 'Pencils',
      amount: '$3.99',
      tax: '$0.39'
    },
    {
      name: 'Laptop',
      amount: '$1899'
      tax: '$189.90'
    }
  ];

  constructor() {
    console.log('ListComponent');
  }
}
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { topmost } from "ui/frame";

@Component({
  selector: "dashboard",
  templateUrl: "pages/dashboard/dashboard.component.html",
  styleUrls: ["pages/dashboard/dashboard.css"]
})
export class DashboardComponent {
  page: Page;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.page = <Page>topmost().currentPage;
    console.log('hiding page');
    this.page.actionBarHidden = true;
  }

  onDetailsClick(event) {
    this.router.navigate(['/list']);
  }
}
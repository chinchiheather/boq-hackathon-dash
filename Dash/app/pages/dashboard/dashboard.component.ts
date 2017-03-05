import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "dashboard",
  templateUrl: "pages/dashboard/dashboard.component.html",
  styleUrls: ["pages/dashboard/dashboard.css"]
})
export class DashboardComponent {

  constructor(private router: Router) {

  }

  onDetailsClick(event) {
    this.router.navigate(['/list']);
  }
}
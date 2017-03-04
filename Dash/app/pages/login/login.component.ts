import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: 'pages/login/login.component.html',
  styleUrls: ['pages/login/login.css']
})
export class LoginComponent {

  constructor(private router: Router) {
    console.log('LoginComponent');
  }

  onLogin (event) {
    this.router.navigate(['/dashboard']);
  }
}

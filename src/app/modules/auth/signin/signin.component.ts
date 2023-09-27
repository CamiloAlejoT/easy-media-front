import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  constructor(
    private router: Router
  ) { }

  navigateLogin() {
    this.router.navigate(['auth/login'])
  }

}

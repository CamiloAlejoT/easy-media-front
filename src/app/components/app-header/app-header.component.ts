import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

  constructor(
    private router: Router
  ) {

  }

  navigate(url: string) {
    this.router.navigate([`publications/${url}`])
  }


}

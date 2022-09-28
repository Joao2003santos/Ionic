import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router){

  }

  pageDetails() {
    this.router.navigate(['/detalhes'])
  }

  pageHome() {
    this.router.navigate(['/home'])
  }
}
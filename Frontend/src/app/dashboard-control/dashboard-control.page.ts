import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-control',
  templateUrl: './dashboard-control.page.html',
  styleUrls: ['./dashboard-control.page.scss'],
  standalone: false
})
export class DashboardControlPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  getOut() {
    this.router.navigateByUrl('/login-page');
  }

}

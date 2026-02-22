import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
  standalone: false
})
export class LoginPagePage implements OnInit {

  email: string = '';
  password: string = '';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  getlogin() {
    this.router.navigateByUrl('/dashboard-control');
  }

}

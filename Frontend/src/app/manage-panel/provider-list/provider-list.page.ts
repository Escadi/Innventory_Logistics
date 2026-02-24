import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.page.html',
  styleUrls: ['./provider-list.page.scss'],
  standalone: false
})
export class ProviderListPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToAdminHome() {
    this.router.navigateByUrl('/dashboard-control/manage-home');
  }


}

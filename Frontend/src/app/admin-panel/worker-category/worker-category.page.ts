import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worker-category',
  templateUrl: './worker-category.page.html',
  styleUrls: ['./worker-category.page.scss'],
  standalone: false
})
export class WorkerCategoryPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToAdminHome() {
    this.router.navigateByUrl('/dashboard-control/admin-home');
  }

}

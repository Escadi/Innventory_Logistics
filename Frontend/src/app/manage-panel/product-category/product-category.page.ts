import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.page.html',
  styleUrls: ['./product-category.page.scss'],
  standalone: false
})
export class ProductCategoryPage implements OnInit {

  //VARIABLES PARA EL MODAL
  isModalOpen = false;
  isEditModal = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * -----------------------------------------------------------------------------------------
   * METODOS PARA EL MODAL
   * -----------------------------------------------------------------------------------------
   */

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  /**
   * -----------------------------------------------------------------------------------------
   * METODOS PARA LA NAVEGACION
   * -----------------------------------------------------------------------------------------
   */

  goToAdminHome() {
    this.router.navigateByUrl('/dashboard-control/manage-home');
  }

}

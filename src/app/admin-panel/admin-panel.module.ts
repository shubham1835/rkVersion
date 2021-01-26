import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { AdminPanelRouting } from './admin-panel-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateCategoryComponent, 
    ManageCategoryComponent, 
    ManageProductComponent, 
    ManageOrderComponent, 
    CreateProductComponent, 
    AdminIndexComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRouting,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminPanelModule { }

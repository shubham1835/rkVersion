import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChairComponent } from './chair/chair.component';
import { BedComponent } from './bed/bed.component';
import { ProductRoutingModule } from './product-routing/product-routing.module';
import { DinningComponent } from './dinning/dinning.component';



@NgModule({
  declarations: [
    ChairComponent,
    BedComponent, 
    DinningComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChairComponent } from '../chair/chair.component';
import { BedComponent } from '../bed/bed.component';
import { DinningComponent } from '../dinning/dinning.component';

const itemRoutes: Routes = [
  { path: 'chair', component: ChairComponent },
  { path: 'bed', component: BedComponent },
  { path: 'dinning', component: DinningComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(itemRoutes)
  ],
  exports: [ RouterModule ]
})
export class ProductRoutingModule { }

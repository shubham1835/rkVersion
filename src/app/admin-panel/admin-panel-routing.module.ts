import { Routes, RouterModule } from "@angular/router";
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const adminRoutes: Routes = [
    {path: 'admin-index', component: AdminIndexComponent, children: [
        {path: 'create-category', component: CreateCategoryComponent, outlet: 'add'},
        {path: 'manage-category', component: ManageCategoryComponent, outlet: 'manage'}
    ]},
]

@NgModule({
    declarations:[],

    imports: [ 
        RouterModule.forChild(adminRoutes),
        CommonModule
    ],

    exports: [ RouterModule ],
    
})

export class AdminPanelRouting {}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.css']
})
export class AdminIndexComponent implements OnInit {

  selectedPage: string;
  selectedMenu = 'create';
  constructor() { }

  ngOnInit(): void {
  }

  createCategory(){
    this.selectedMenu = 'create';
  }
  manageCategory(){
    this.selectedMenu = 'manage';
  }

  addProduct(){
    this.selectedMenu = 'addProduct';
  }

  manageProduct(){
    this.selectedMenu = 'manageProduct';
  }

  manageOrder(){
    this.selectedMenu = 'manageOrder';
  }
}

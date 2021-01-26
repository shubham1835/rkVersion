import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {

  allCategory = [
    {srNo: '1', categoryName: 'Chair'},
    {srNo: '2', categoryName: 'Bed'},
    {srNo: '3', categoryName: 'Sofa'},
    {srNo: '4', categoryName: 'Dinning Table'},
    {srNo: '5', categoryName: 'Study Table'},
    {srNo: '6', categoryName: 'Wadrobe'},
    {srNo: '7', categoryName: 'Cabinet'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  deleteCategory(categoryName,i){
    console.log('111',categoryName,' ',i);
    this.allCategory.splice(i, 1);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  allProduct = [
    {srNo: '1', itemCode: 'Chair', price:1000, item: 'Image.png'},
    {srNo: '2', itemCode: 'Bed', price:1000, item: 'Image.png'},
    {srNo: '3', itemCode: 'Sofa', price:1000, item: 'Image.png'},
    {srNo: '4', itemCode: 'Dinning Table', price:1000, item: 'Image.png'},
    {srNo: '5', itemCode: 'Study Table', price:1000, item: 'Image.png'},
    {srNo: '6', itemCode: 'Wadrobe', price:1000, item: 'Image.png'},
    {srNo: '7', itemCode: 'Cabinet', price:1000, item: 'Image.png'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

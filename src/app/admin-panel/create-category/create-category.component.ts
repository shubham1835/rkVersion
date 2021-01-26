import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  createcCategoryForm = new FormGroup({
    categoryName: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

  saveEnterCategoryDtl(){
    console.log(this.createcCategoryForm);
  }

}

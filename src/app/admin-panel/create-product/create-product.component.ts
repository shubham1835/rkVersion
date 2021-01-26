import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  addProductForm = new FormGroup({
    itemName: new FormControl(''),
    itemType: new FormControl(''),
    itemPrice: new FormControl(''),
    itemQuantity: new FormControl(''),
    file: new FormControl(''),
    description: new FormControl(''),
  });
  selectedFile: any;
  StringOrNumber:  string | number;
  readonly fileName = 'jai';

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
  }

  categoryFile(event){
    this.selectedFile = event.target.files[0].name;
    console.log('222 12 ',event);
    console.log('222 1 ',this.selectedFile);
    // this.StringOrNumber = 'jai';
    console.log()
  }

  getItemDetails(){
    console.log('222',this.addProductForm);

    const itemDetails: any = {};
    // const itemDetails = new FormData()
    // itemDetails.append('itemName', this.addProductForm.value.itemName)
    // itemDetails.append('itemType', this.addProductForm.value.itemType)
    // itemDetails.append('itemPrice', this.addProductForm.value.itemPrice)
    // itemDetails.append('itemQuantity', this.addProductForm.value.itemQuantity)
    // itemDetails.append('itemDesc', this.addProductForm.value.description)
    // itemDetails.append('avatar', this.selectedFile)
    itemDetails.itemName = this.addProductForm.value.itemName
    itemDetails.itemType = this.addProductForm.value.itemType
    itemDetails.itemPrice = this.addProductForm.value.itemPrice
    itemDetails.itemQuantity = this.addProductForm.value.itemQuantity
    itemDetails.itemDesc = this.addProductForm.value.description
    itemDetails.avatar = this.selectedFile;

    this.authSvc.saveItemDetails(itemDetails).subscribe(res => {
      console.log('222 12 ',res);
    })
  }

}

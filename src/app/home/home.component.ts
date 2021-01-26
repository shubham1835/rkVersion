import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgSalesGallery: any = [
    { routerPath: './chair', imgUrl: 'assets/product/bed/unnamed.png'},
    { routerPath: './chair', imgUrl: 'assets/product/bed/unnamed.png'},
    { routerPath: './chair', imgUrl: 'assets/product/bed/unnamed.png'},
    { routerPath: './chair', imgUrl: 'assets/product/bed/unnamed.png'},
    { routerPath: './chair', imgUrl: 'assets/product/bed/unnamed.png'},
    { routerPath: './chair', imgUrl: 'assets/product/bed/unnamed.png'},
  ];

  itemCategory: any = [
    {}
  ]
  constructor(private router: Router, private appSvc: AppService,
     private authSvc: AuthService) { }

  ngOnInit(): void {
    const getIndexUrl = 'api/crud'
    this.appSvc.getTable(getIndexUrl).subscribe(res => {
      console.log('111 1 => ',res);
    });
    // this.registerDataCheck();
  }

  registerDataCheck(){
    const body = {
      name: 'Raksha',
      email: 'raksha@gmail.com',
      phone: '8888877777',
      password: '123456677'
    }
    this.authSvc.saveRegisteration(body).subscribe(res => {
      console.log('111 2 ',res);
    })
  }

  navigateToItems(product){
    alert(product);
    switch(product){
      case 'chair':
      this.router.navigate(['./chair']);
      break;

      case 'bed':
      this.router.navigate(['./bed']);
      break;

      case 'dinning':
      this.router.navigate(['./dinning']);
      break;

      case 'wadrobe':
      this.router.navigate[('./chair')];
      break;
    }
  }

}

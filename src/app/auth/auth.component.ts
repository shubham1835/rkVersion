import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

  setRegister = false;
  loginForm = new FormGroup({
    userName: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  registeration = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.pattern(/^[A-Za-z]{2,10}$/)]),
    email: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
  isRegisterSubmit = true;
  isLoginSubmit = true;
  registerRes: any;

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  setRegisterCard(){
    this.setRegister = true;
  }

  checkLoginValueChange(){
    this.isLoginSubmit = this.loginForm.invalid;
  }
  onSubmitLogin(){
    const loginBody: any = {};
    loginBody.username = this.loginForm.value.userName;
    loginBody.password = this.loginForm.value.password;

    this.authSvc.getUserLogin(loginBody).subscribe((res: any) => {
      if(res.message !== "Incorect username"){
        this.loginForm.reset();
        this.router.navigate(['./home']);
      }
    })
  }

  /**
   * On input value check
   */
  checkValueChange(){
    this.isRegisterSubmit = this.registeration.invalid;
    this.getSelectedValue();
  }

  /**
   * Check value change service
   */
  getSelectedValue(){
    this.registeration.get('name').valueChanges.subscribe(res =>
      console.log('122 12 ',res))
  }
  
/**
 * User submit registeration form
 */
  onSubmitRegister(){
    const registerBody: any = {};
    registerBody.name = this.registeration.value.name;
    registerBody.email = this.registeration.value.email;
    registerBody.phone = this.registeration.value.phone;
    registerBody.password = this.registeration.value.password;

    this.authSvc.saveRegisteration(registerBody).subscribe(res => {
      this.registerRes = res;
      if(true){
        this.setRegister = false;
      }
    })
  }

}

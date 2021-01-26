import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  formData: any;
  readonly rootUrl = 'http://localhost:8000/';
  constructor(private http: HttpClient) { }

  userRegister(formData: any){
    this.http.post(this.rootUrl+'auth/register',formData);
  }

  userLogin(formData: any){
    this.http.post(this.rootUrl+'auth/login',formData);
  }
}

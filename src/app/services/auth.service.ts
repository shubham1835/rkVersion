import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly rootUrl

  HttpUploadOptions = {
    headers: new HttpHeaders({ "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>" })
  }
  
  constructor(private httpClient: HttpClient) {
    this.rootUrl = 'http://localhost:3000';
   }

  saveRegisteration(body){
    return this.httpClient.post(`${this.rootUrl}/${'api/auth/register'}`, body)
  }

  getUserLogin(body){
    return this.httpClient.post(`${this.rootUrl}/${'api/auth/login'}`, body);
  }


  saveItemDetails(body){
    return this.httpClient.post(`${this.rootUrl}/${'api/crud/addItem'}`, body, this.HttpUploadOptions);
  }
}

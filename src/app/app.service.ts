import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  readonly rootUrl

  constructor(private httpClient: HttpClient) { 
    this.rootUrl = 'http://localhost:3000';
  }

  getTable(url: string){
    return this.httpClient.get(`${this.rootUrl}/${url}`);
  }

  
  
}

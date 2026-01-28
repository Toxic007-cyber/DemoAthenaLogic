import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private API = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  register(user: any)  {
    return this.http.post(`${this.API}/register`, user );
  }

  login(credentials: any){
    return this.http.post(`${this.API}/login`, credentials );
  }
}
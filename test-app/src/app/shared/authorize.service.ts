import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {//Used for Authentication and Authorization
  readonly authUrl="http://localhost:14703/api/Registers1/Login";
  
  constructor(private http:HttpClient) { }

  logIn(loginObj:any){
    console.log(loginObj);
    return this.http.post<any>(this.authUrl,loginObj);
  }

  logOut(){
    localStorage.clear();
    localStorage.removeItem('token');
  }

  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLogedIn(): boolean{
    return !!localStorage.getItem('token');
  }
}

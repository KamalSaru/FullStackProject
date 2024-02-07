import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminLogin } from '../entity/admin-login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
  url: string='http://localhost:8080/admin';

  constructor(private http:HttpClient) { }

  //Post register admin details----------------------------------------------
  adminLogin(adminLogin: AdminLogin):Observable<string>{
    //@ts-ignore
    return this.http.post<string>(this.url.concat('/login'), adminLogin, {responseType:'text'})
  }

//Post admin login details--------------------------------------------------------
adminRegister(adminLogin: AdminLogin): Observable<string>{
  //@ts-ignore
  return this.http.post<string>(this.url.concat('/register'), adminLogin, {responseType:'text'} )
  }
}


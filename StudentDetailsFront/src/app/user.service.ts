import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string='http://localhost:8080/user';

  constructor(private http:HttpClient) { }
  login(user: User): Observable<string>{
    //@ts-ignore//for suppress
    return this.http.post<string>(this.url.concat('/login'), user, {responseType:'text'})
  }

  register(user: User): Observable<string>{
    //@ts-ignore
    return this.http.post<string>(this.url.concat('/register'), user, {responseType:'text'})
  }
}

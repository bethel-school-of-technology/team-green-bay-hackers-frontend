import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL: string = "http://localhost:3000/api/users";

  constructor(private http: HttpClient, private router: Router) {}

  signUp(user: User) {
    return this.http.post(`${this.URL}`, user);
  }

  signIn(username: string, password: string) {
    return this.http.post(`${this.URL}/login`, {username, password})
    .pipe(tap((response: any) => {
      localStorage.setItem('tokenName', response.token);
      localStorage.setItem('userName', response.userName);
      localStorage.setItem('userId', response.thisUser);
    }))
  }

  getUserInfo(id: number){
    const token = localStorage.getItem('tokenName');
    let headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    return this.http.get(`${this.URL}/${id}`, {headers})
  }
}

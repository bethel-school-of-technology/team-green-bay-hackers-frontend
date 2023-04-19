import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
    let query = new HttpParams();
    query = query.append('username', username);
    query = query.append('password', password);

    return this.http.post(`${this.URL}/login`, { params: query, responseType: 'text'})
    .pipe(tap((response: any) => {
      localStorage.setItem('tokenName', "{}");
    }))
  }
}

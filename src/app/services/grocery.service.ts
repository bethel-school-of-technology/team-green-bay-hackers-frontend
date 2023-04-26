import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Grocery } from "../models/grocery";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  URL: string = "http://localhost:3000/api/list"

  constructor(private http: HttpClient) { }


  
  getItems(): Observable<Grocery[]> {
    return this.http.get<Grocery[]>(this.URL);
  }

  addItem(newItem: Grocery) {
    const token = localStorage.getItem('tokenName'); // Token
    let headers = new HttpHeaders().set("Authorization", 'Bearer '  + token);
    return this.http.post(this.URL, newItem, {headers});
  }

  updateItem(newItem: Grocery) {
    const token = localStorage.getItem('tokenName');
    let headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    return this.http.put<Grocery[]>(`${this.URL}/${newItem.listId}`, newItem, {headers})
  }

  deleteItem(itemId: string) {
    const token = localStorage.getItem('tokenName');
    let headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    return this.http.delete<any>(`${this.URL}/${itemId}`, {headers})
  }
}

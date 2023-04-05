import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grocery } from "../models/grocery";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  URL: string = "localhost.example"

  constructor(private http: HttpClient) { }

  getItems(): Observable<Grocery[]> {
    return this.http.get<Grocery[]>(this.URL);
  }

  addItem(newItem: Grocery) {
    return this.http.post(this.URL, newItem);
  }

  updateItem(newItem: Grocery) {
    return this.http.put<Grocery[]>(`${this.URL}/${newItem.listId}`, newItem)
  }

  deleteItem(itemId: string) {
    return this.http.delete<any>(`${this.URL}/${itemId}`)
  }
}

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
}

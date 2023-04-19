import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  searchSource: string = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=76f259eae67a4d039792ab892368b232"
  searchIdSource: string = "https://api.spoonacular.com/recipes/"
  similarSource: string = "https://api.spoonacular.com/recipes/"
  searchInputParam: string = "&ingredients=";

  constructor(private http: HttpClient) { }

findRecipe(searchInput: string): Observable<Recipe[]> {
  return this.http.get<Recipe[]>(this.searchSource + this.searchInputParam + searchInput);
}

findRecipeById(id: number): Observable<Recipe> {
  return this.http.get<Recipe>(this.searchIdSource + id + "/information?apiKey=76f259eae67a4d039792ab892368b232")
}

findSimilarRecipe(id: number): Observable<Recipe[]> {
  return this.http.get<Recipe[]>(this.similarSource + id + "/similar?apiKey=76f259eae67a4d039792ab892368b232&number=3")
}

}
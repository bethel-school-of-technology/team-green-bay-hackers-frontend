import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe, Random } from '../models/recipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  searchSource: string = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=573679d314fe4b9d9f4867e707f24f65"
  searchIdSource: string = "https://api.spoonacular.com/recipes/"
  similarSource: string = "https://api.spoonacular.com/recipes/"
  randomSource: string = "https://api.spoonacular.com/recipes/random?apiKey=573679d314fe4b9d9f4867e707f24f65&number=3"
  searchInputParam: string = "&ingredients=";

  constructor(private http: HttpClient) { }

findRecipe(searchInput: string): Observable<Recipe[]> {
  return this.http.get<Recipe[]>(this.searchSource + this.searchInputParam + searchInput);
}

findRecipeById(id: number): Observable<Recipe> {
  return this.http.get<Recipe>(this.searchIdSource + id + "/information?apiKey=573679d314fe4b9d9f4867e707f24f65")
}

findSimilarRecipe(id: number): Observable<Recipe[]> {
  return this.http.get<Recipe[]>(this.similarSource + id + "/similar?apiKey=573679d314fe4b9d9f4867e707f24f65&number=3")
}

findRandomRecipe(): Observable<Random> {
  return this.http.get<Random>(this.randomSource);
}

}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe, Random } from '../models/recipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  searchSource: string = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=312098b3d19041978ab0a8c5d5bc0a75"
  searchIdSource: string = "https://api.spoonacular.com/recipes/"
  similarSource: string = "https://api.spoonacular.com/recipes/"
  randomSource: string = "https://api.spoonacular.com/recipes/random?apiKey=312098b3d19041978ab0a8c5d5bc0a75"
  searchInputParam: string = "&ingredients=";

  constructor(private http: HttpClient) { }

findRecipe(searchInput: string): Observable<Recipe[]> {
  return this.http.get<Recipe[]>(this.searchSource + this.searchInputParam + searchInput);
}

findRecipeById(id: number): Observable<Recipe> {
  return this.http.get<Recipe>(this.searchIdSource + id + "/information?apiKey=d0bc8082617f45edb163dbcb85175b6e")
}

findSimilarRecipe(id: number): Observable<Recipe[]> {
  return this.http.get<Recipe[]>(this.similarSource + id + "/similar?apiKey=d0bc8082617f45edb163dbcb85175b6e&number=3")
}

findRandomRecipe(): Observable<Random> {
  return this.http.get<Random>(this.randomSource);
}

}
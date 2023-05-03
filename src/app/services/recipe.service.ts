import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe, Random } from '../models/recipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  searchSource: string = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=bf01a60d746a4dfba1e815d0b2728d74"
  searchIdSource: string = "https://api.spoonacular.com/recipes/"
  similarSource: string = "https://api.spoonacular.com/recipes/"
  randomSource: string = "https://api.spoonacular.com/recipes/random?apiKey=bf01a60d746a4dfba1e815d0b2728d74&number=3"
  searchInputParam: string = "&ingredients=";

  constructor(private http: HttpClient) { }

findRecipe(searchInput: string): Observable<Recipe[]> {
  return this.http.get<Recipe[]>(this.searchSource + this.searchInputParam + searchInput);
}

findRecipeById(id: number): Observable<Recipe> {
  return this.http.get<Recipe>(this.searchIdSource + id + "/information?apiKey=bf01a60d746a4dfba1e815d0b2728d74")
}

findSimilarRecipe(id: number): Observable<Recipe[]> {
  return this.http.get<Recipe[]>(this.similarSource + id + "/similar?apiKey=bf01a60d746a4dfba1e815d0b2728d74&number=3")
}

findRandomRecipe(): Observable<Random> {
  return this.http.get<Random>(this.randomSource);
}

}
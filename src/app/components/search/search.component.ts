import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';
<<<<<<< HEAD
import { debounceTime, delay, distinctUntilChanged, switchMap } from "rxjs";
=======
import { NgForm } from '@angular/forms';
>>>>>>> 31e1a4db3fa42c3d02705c53d1624e37e2138f9a

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

<<<<<<< HEAD
  public recipeList: Recipe[] = [];

  constructor(public recipeService: RecipeService) { }

  recipeSearch(): void {
this.recipeService.findRecipe()
          .subscribe((response) => {
            this.recipeList = response;
          })
=======
  recipeList: Recipe[] = [];

  searchText: string = "";

  constructor(public recipeService: RecipeService) { }

  searchRecipe(form: NgForm): void {
    
    this.recipeService.findRecipe(form.value.search).subscribe(response => {
      console.log(response);
      this.recipeList = response;
    })
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText)
>>>>>>> 31e1a4db3fa42c3d02705c53d1624e37e2138f9a
  }
}


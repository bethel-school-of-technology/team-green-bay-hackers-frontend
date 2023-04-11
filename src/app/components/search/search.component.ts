import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { debounceTime, delay, distinctUntilChanged, switchMap } from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public recipeList: Recipe[] = [];

  constructor(public recipeService: RecipeService) { }

  recipeSearch(): void {
this.recipeService.findRecipe()
          .subscribe((response) => {
            this.recipeList = response;
          })
  }
}

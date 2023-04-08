import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

recipeList: Recipe[] = [];

constructor(public recipeService: RecipeService) { }

searchRecipe(): void {
  this.recipeService.findRecipe().subscribe(response => {
    console.log(response);
    this.recipeList = response;
  })
}
}

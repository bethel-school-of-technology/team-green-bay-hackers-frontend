import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {

id: number = 0;

currentRecipe: Recipe = new Recipe();

similarRecipe: Recipe[] = [];

constructor(private recipeService: RecipeService, private actRoute: ActivatedRoute) { }

ngOnInit(): void {
  const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
  this.id = parseInt(routeId);
  this.recipeService.findRecipeById(this.id).subscribe(foundRecipe => {
    console.log(foundRecipe);
    this.currentRecipe = foundRecipe;
this.findSimilarRecipe();
  })
}

findSimilarRecipe() {
  const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
  this.id = parseInt(routeId);
  this.recipeService.findSimilarRecipe(this.id).subscribe(response => {
    console.log(response);
    this.similarRecipe = response
  })
}

}

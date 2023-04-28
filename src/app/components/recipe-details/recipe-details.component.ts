import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { GroceryService } from 'src/app/services/grocery.service';
import { ActivatedRoute } from '@angular/router';
import { Ingredients, Recipe } from 'src/app/models/recipe';
import { Grocery } from 'src/app/models/grocery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {

  id: number = 0;

  currentRecipe: Recipe = new Recipe();

  getSimilarRecipe: Recipe[] = [];
  showSimilarRecipe: Recipe[] = [];
  ingredientList: Ingredients[] = [];

  newItem: Grocery = new Grocery();

  constructor(private recipeService: RecipeService, private actRoute: ActivatedRoute, private groceryService: GroceryService, private router: Router) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.recipeService.findRecipeById(this.id).subscribe(foundRecipe => {
      this.currentRecipe = foundRecipe;
      this.ingredientList = this.currentRecipe.extendedIngredients;
      this.findSimilarRecipe();
    })
  }

  findSimilarRecipe() {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.recipeService.findSimilarRecipe(this.id).subscribe(response => {
      this.getSimilarRecipe = response;
      this.getRecipeInfo();
    });
  }

  getRecipeInfo() {
    console.log(this.getSimilarRecipe);
    for (let recipe of this.getSimilarRecipe) {
      this.id = recipe.id;
      this.recipeService.findRecipeById(this.id).subscribe(response => {
        this.showSimilarRecipe.push(response);
      })
    }
  }

  addToList(name: string) {
    this.newItem.title = name;
    this.groceryService.addItem(this.newItem).subscribe(() => {
      window.alert("Successfully Added to Shopping List")
    }, error => {
      console.log("Error: ", error);
      if (error.status == 401 || error.status == 403) {
        this.router.navigate(['sign-in']);
      }
    });
  }
}

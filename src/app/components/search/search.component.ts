import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Recipe, Random } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  recipeList: Recipe[] = [];
  randomList: Random = new Random();
  randomRecipes: Recipe[] = [];

  searchText: string = "";

  constructor(public recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.findRandomRecipe().subscribe(response => {
      console.log(response);
      this.randomList = response;
      this.randomRecipes = this.randomList.recipes;
    })
  }

  searchRecipe(form: NgForm): void {
    this.recipeService.findRecipe(form.value.search).subscribe(response => {
      console.log(response);
      this.recipeList = response;
    })
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText)
  }
}

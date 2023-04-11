import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

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
  }
}


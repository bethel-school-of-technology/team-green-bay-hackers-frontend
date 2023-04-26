import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { GroceryNewComponent } from './components/grocery-new/grocery-new.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { SearchComponent } from './components/search/search.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

const routes: Routes = [

  { 
    path: "" , redirectTo: "recipes" , pathMatch: "full" //Blake
  },
  {
    path: "recipes",
    component: SearchComponent
  },
  {
    path: "recipes/:id",
    component: RecipeDetailsComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent //Jaedyn
  },
  {
    path: "sign-in",
    component: SignInComponent //Jaedyn
  },
  {
    path: "grocery-list",
    component: GroceryListComponent //Jaedyn
  },
  {
    // path: "grocery-new",
    // component: GroceryNewComponent //Jaedyn
    path: "grocery-list/add",
    component: GroceryNewComponent
  },
  {
    path: "grocery-list",
    component: GroceryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

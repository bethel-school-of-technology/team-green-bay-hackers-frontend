import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { GroceryNewComponent } from './components/grocery-new/grocery-new.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [

  { 
    path: "" , redirectTo: "recipes" , pathMatch: "full" //Blake
  },
  // { 
  //   path: "home" , component: HomeComponent //Blake
  // },
  {
    path: "recipes",
    component: SearchComponent
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
    component: GroceryNewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

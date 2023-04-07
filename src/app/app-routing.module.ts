import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { GroceryNewComponent } from './components/grocery-new/grocery-new.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';

const routes: Routes = [

  { 
    path: "" , redirectTo: "home" , pathMatch: "full" //Blake
  },
  // { 
  //   path: "home" , component: HomeComponent //Blake
  // },
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
    path: "grocery-new",
    component: GroceryNewComponent //Jaedyn
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

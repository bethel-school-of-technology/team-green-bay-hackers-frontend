import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './components/sign-up/sign-up.component'
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
// import { ItemNewComponent } from './components/item-new/item-new.component';
import { GroceryNewComponent } from './components/grocery-new/grocery-new.component';
import { SearchComponent } from './components/search/search.component';
import { MatCardModule } from '@angular/material/card';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,//Jaedyn
    SignInComponent,//Jaedyn
    HomeComponent, // Blake
    GroceryNewComponent, SearchComponent, RecipeDetailsComponent //Jaedyn
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

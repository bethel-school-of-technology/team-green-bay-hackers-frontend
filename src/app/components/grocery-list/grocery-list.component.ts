import { Component, OnInit } from '@angular/core';
import { Grocery } from 'src/app/models/grocery';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit{
  groceryList: Grocery[] = [];

  constructor(private groceryService: GroceryService) { }

  ngOnInit(): void {
    this.groceryService.getItems().subscribe(Grocery => {
      this.groceryList = Grocery;
    });
  }

  delete(id: string){

    this.groceryService.deleteItem(id).subscribe(response => {
      // this.statueList = response;
      console.log(response);
      // this.router.navigateByUrl("/products");

    }) //removes the statue after refreshing the page
  }
}
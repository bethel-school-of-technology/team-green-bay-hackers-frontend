import { Component } from '@angular/core';
import { Grocery } from 'src/app/models/grocery';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent {

  groceryList: Grocery[] = [];

  constructor(private groceryService: GroceryService) { }

  ngOnInit(): void {
    this.groceryService.getItems().subscribe(grocery => {
      console.log(grocery);
      this.groceryList = grocery;
    });
  }

  delete(listId: any): void {
    this.groceryService.deleteItem(listId).subscribe();
    for (let recipe of this.groceryList) {
      var index = this.groceryList.indexOf(recipe);
      if (recipe.listId == listId) {
        this.groceryList.splice(index, 1);
      }
    }
  }

  changeInCart(editItem: Grocery) {
    if (editItem.inCart === true) {
      editItem.inCart = false;
      this.groceryService.updateItem(editItem).subscribe();
    } else {
      editItem.inCart = true;
      this.groceryService.updateItem(editItem).subscribe();
    }
  }
}

import { Component } from '@angular/core';
import { Grocery } from 'src/app/models/grocery';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent {

  getGroceryList: Grocery[] = [];
  showGroceryList: Grocery[] = [];



  constructor(private groceryService: GroceryService) { }

  ngOnInit(): void {
    const user = parseInt(localStorage.getItem('userId')!);
    this.groceryService.getItems().subscribe(grocery => {
      console.log("UserId: " + user);
      this.getGroceryList = grocery;
      for (let item of this.getGroceryList) {
        if (item.userId == user) {
          this.showGroceryList.push(item);
        }
      }
    });
  }

  delete(listId: any): void {
    this.groceryService.deleteItem(listId).subscribe();
    for (let recipe of this.getGroceryList) {
      var index = this.getGroceryList.indexOf(recipe);
      if (recipe.listId == listId) {
        this.getGroceryList.splice(index, 1);
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

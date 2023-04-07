import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grocery } from 'src/app/models/grocery';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-grocery-new',
  templateUrl: './grocery-new.component.html',
  styleUrls: ['./grocery-new.component.css']
})
export class GroceryNewComponent {
  newGrocery: Grocery = new Grocery();

  constructor(private groceryService: GroceryService, private router: Router) { }

  ngOnInit(): void {
  }

  addGrocery() {
    this.groceryService.addItem(this.newGrocery).subscribe(() => {
      window.alert("Created Grocery Successfully");
      this.router.navigate(['grocery']); //Where does this route to?
    }, error => {
      console.log('Error: ', error)
      if (error.status === 401 || error.status === 403) {
        this.router.navigate(['sign-in']);
      }
    });
  }
}

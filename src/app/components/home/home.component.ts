import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpContext } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  //here
  constructor(private userService: UserService) { }

  displayMessage: boolean = false;
  user: User = new User();

  ngOnInit(): void {
    this.welcomeMessage();
  }

  welcomeMessage() {
    const userToken = localStorage.getItem('tokenName');
    const userId = parseInt(localStorage.getItem('userId')!);
    this.userService.getUserInfo(userId).subscribe(response => {
      console.log(response);
      this.user = response;
      if (userToken != null) {
        console.log("Welcome " + this.user.username);
        this.displayMessage = true;
      }
    });
  }

  signOut() {
    localStorage.clear();
  }

}

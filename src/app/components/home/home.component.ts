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

  welcomeMessage(){
    
    const userToken = localStorage.getItem('tokenName');
    let headers = new HttpHeaders().set("Authorization", 'Bearer '  + userToken);

    // var username = this.httpContext.user.findFirst(claimTypes.main).value;

    if(userToken != null){
      console.log("Welcome " + userToken);
      this.displayMessage = true;
    }

    this.userService.getUserInfo(3).subscribe(response => {
      //Find a way to get user info
      //Find a way to get the user ID
      console.log(response);
      this.user = response;
    })
  }

  // getUserInfo(){
  //   this.userService.getUserInfo(3).subscribe(response => {
  //     console.log(response);
  //     this.user = response;
  //   })
  // }



  ngOnInit(): void{
    this.welcomeMessage();
  }
}

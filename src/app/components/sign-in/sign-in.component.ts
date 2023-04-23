import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnit(): void {

  }

  signin(){
    this.userService.signIn(this.username, this.password).subscribe((response:any) => {
      this.router.navigateByUrl('/grocery-list');
    }, error => {
      console.log('Error: ', error);
      window.alert('Unsuccessful Login');
      this.router.navigateByUrl('/sign-in');
    });
  }
  
}

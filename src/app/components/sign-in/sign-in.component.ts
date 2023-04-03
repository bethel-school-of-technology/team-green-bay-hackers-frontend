import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnit(): void {

  }

  signin(){
    this.userService.signIn(this.email, this.password).subscribe((response:any) => {
      this.router.navigateByUrl('/Placeholder');
    }, error => {
      console.log('Error: ', error);
      window.alert('Unsuccessful Login');
      this.router.navigateByUrl('/signin');
    });
  }
  
}

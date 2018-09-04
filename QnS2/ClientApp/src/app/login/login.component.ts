import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean; 
  error;

  constructor(
    private router: Router, 
    private authService: AuthService) { }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => { 
        console.log(result);
        if (result)
          this.router.navigate(['/']);
        else  
          this.invalidLogin = true;        
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          this.invalidLogin = true; 
          this.error = error.originalError;
        }
        else throw error;
      });
  }
}

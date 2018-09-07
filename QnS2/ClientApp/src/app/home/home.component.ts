import { Router } from '@angular/router';

import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public adminRole = environment.admin;
  public userRoles: number;
  constructor(private authService: AuthService, private router:Router) { }
  
  public ngOnInit(){
    this.userRoles = 1;
    if(!this.authService.isLoggedIn()) this.router.navigate(['/login']);  
  }

}

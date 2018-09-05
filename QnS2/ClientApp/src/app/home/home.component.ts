
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  adminRole = environment.admin;
  constructor(private authService: AuthService) { }
}

import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent implements OnInit {
  public Role: string;
  
  public RolesAccount = ["Questioner", "Answer"];
  
  constructor(private homeComponent: HomeComponent, private authService: AuthService) { }

  ngOnInit() {
    this.Role = this.RolesAccount[0];
  }

  public changeRole(item){

    this.Role = item;

    if(item == this.RolesAccount[1])
      item = 2;
    else
      item = 1;

    this.homeComponent.userRoles = item;
  }
}

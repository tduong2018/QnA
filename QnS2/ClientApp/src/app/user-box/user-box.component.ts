import { AuthService } from './../services/auth.service';
import { AuthGuard } from './../auth-guard.service';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { UserService } from '../services/User.service';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent implements OnInit {

  public Role: string;
  public Account = <User>{};
  public RolesAccount = ["Questioner", "Answer"];
  
  constructor(private homeComponent: HomeComponent, private _Account: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.Role = this.RolesAccount[0];
    this._Account.getCustom('Account').subscribe(result => this.Account = result as User);
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

interface User{
  userID: string;
  avatar: string;
  fullname: string;
  userEmail: string;
}

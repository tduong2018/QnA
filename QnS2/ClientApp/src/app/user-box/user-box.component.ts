import { environment } from './../../environments/environment';
import { AuthService } from './../services/auth.service';
import { AuthGuard } from './../auth-guard.service';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { UserService } from '../services/User.service';
import { CardCommentComponent } from '../card-comment/card-comment.component';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent implements OnInit {

  public Role: string;
  public Account = <User>{};
  public RolesAccount: any[] = [];

  constructor(private _homeComponent: HomeComponent, private _Account: UserService, private _authService: AuthService) { }

  ngOnInit() {

    this.Role = "Questioner";
    this._Account.getCustom('Account').subscribe(result => this.Account = result as User);
    this.RolesAccount = this._authService.getRoleName();
    let ngAtive = CardCommentComponent;
  }

  public changeRole(item){
    this._homeComponent.userRoles = item;
    this.Role = item;
  }
}

interface User{
  userID: string;
  avatar: string;
  fullname: string;
  userEmail: string;
}

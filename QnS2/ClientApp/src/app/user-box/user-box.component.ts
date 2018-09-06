import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent implements OnInit {
  public Role: string;
  
  public RolesAccount = ["Questioner", "Answer"];
  
  constructor() { }

  ngOnInit() {
    this.Role = this.RolesAccount[0];
  }

  public changeRole(item){
    this.Role = item;

  }
}

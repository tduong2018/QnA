import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent implements OnInit {
  public Role: string;
  Role ="";
  public RolesAccount = ["Answer","Questioner"];
  constructor() { }

  ngOnInit() {
  }

  public answerPage(){
    this.Role = this.RolesAccount[0];
  }

  public questionerPage(){
    this.Role = this.RolesAccount[1];
  }
}

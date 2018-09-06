import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent implements OnInit {
  public Role: string;
  
  public RolesAccount = ["Answer","Questioner"];
  
  constructor() { }

  ngOnInit() {
    this.Role = this.RolesAccount[0];
  }

  public answerPage(){
    this.Role = this.RolesAccount[0];
  }

  public questionerPage(){
    this.Role = this.RolesAccount[1];
  }
}

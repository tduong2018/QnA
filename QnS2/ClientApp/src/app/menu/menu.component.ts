import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public Categorys = ["All", "C#", "Angular", "ASP.NET MVC", "ASP.NET MVC Core"];
  public Category: string;
  constructor() { }

  ngOnInit() {
    this.Category = this.Categorys[0];
  }

  public selectCategory(item){
    this.Category = item;
  }
}

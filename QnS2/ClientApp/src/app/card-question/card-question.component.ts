import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-question',
  templateUrl: './card-question.component.html',
  styleUrls: ['./card-question.component.css']
})
export class CardQuestionComponent implements OnInit {
  public isSetting = false;
  public isCollapsed = false;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

}

interface card{
  
}

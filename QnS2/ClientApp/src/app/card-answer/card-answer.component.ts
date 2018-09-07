import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-answer',
  templateUrl: './card-answer.component.html',
  styleUrls: ['./card-answer.component.css']
})
export class CardAnswerComponent implements OnInit {
  
  @Input('cards') card;

  public isCollapsed = false;

  constructor() { }

  ngOnInit() {}

}

interface card_answer{
  userId:string;
  questionId:number;
  title:string;
  createDate:Date;
  contentQuestion:string;
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-answer',
  templateUrl: './card-answer.component.html',
  styleUrls: ['./card-answer.component.css']
})
export class CardAnswerComponent implements OnInit {
  
  @Input('userQuestion') Question;

  public isCollapsed = false;

  constructor() { }

  ngOnInit() {}

}

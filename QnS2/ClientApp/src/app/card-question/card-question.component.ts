import { CardCommentComponent } from './../card-comment/card-comment.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-question',
  templateUrl: './card-question.component.html',
  styleUrls: ['./card-question.component.css']
})
export class CardQuestionComponent implements OnInit {
  public isSetting = false;
  public isCollapsed = false;
  countComment;
  @Input('userQuestion') Question;
  constructor() { }

  ngOnInit() {
  }

}

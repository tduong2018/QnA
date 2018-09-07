import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../services/Comment.service';

@Component({
  selector: 'app-card-comment',
  templateUrl: './card-comment.component.html',
  styleUrls: ['./card-comment.component.css']
})
export class CardCommentComponent implements OnInit {

  @Input('questionID') questionId; 

  public listAnswer;

  constructor(private _comment: CommentService) { }

  ngOnInit() {
    this._comment.get(this.questionId +'').subscribe(data => this.listAnswer = data);
  }

}

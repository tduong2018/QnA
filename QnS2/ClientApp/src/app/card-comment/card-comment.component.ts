import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../services/Comment.service';
import { UserService } from '../services/User.service';

@Component({
  selector: 'app-card-comment',
  templateUrl: './card-comment.component.html',
  styleUrls: ['./card-comment.component.css']
})
export class CardCommentComponent implements OnInit {

  @Input('questionID') questionId;
  @Input('comment') comment;
  public comments = "";
  public Account :User[] = [];

  public Answers;

  constructor(private _comment: CommentService, private _Account: UserService) { }

  ngOnInit() {
    this._Account.getCustom('Account').subscribe(result => this.Account = result as User[]);
    this.get();
  }

  get(){
    this._comment.get(this.questionId + '').subscribe( data => this.Answers = data );
  }

  postComment(){
    //console.log(this.comments);
    let input : Comment = { QuestionId: this.questionId,ContentAnswer:this.comments };
    this._comment.create(input).subscribe(()=>{this.get()});
    this.comments="";
  }
}

interface Comment{
  QuestionId: string;
  ContentAnswer: string;
}

interface User{
  userID: string;
  avatar: string;
  fullname: string;
  userEmail: string;
}

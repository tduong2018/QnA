import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MakeQuestionComponent } from '../make-question/make-question.component';
import { QuestionService } from '../services/Question.service';
import { UserService } from '../services/User.service';

@Component({
  selector: 'app-questioner',
  templateUrl: './questioner.component.html',
  styleUrls: ['./questioner.component.css']
})
export class QuestionerComponent implements OnInit {
  public Questions : any ;
  public m:MakeQuestionComponent;
  constructor(private _modalService: NgbModal, private _Account: UserService, private _question:QuestionService) { }

  ngOnInit() {
    this._question.getCustom('ListQuestionByUserId').subscribe(question => this.Questions = question);
  }

  public CreatQuestion() {
    this._modalService.open(MakeQuestionComponent);
  }
}
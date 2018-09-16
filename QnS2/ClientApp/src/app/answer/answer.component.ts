import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MakeQuestionComponent } from '../make-question/make-question.component';
import { QuestionService } from '../services/Question.service';
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  public Questions : any ;
  constructor(private modalService: NgbModal, private _http:HttpClient, private question:QuestionService) { }

  ngOnInit() {
    this.question.getAll().subscribe(question => this.Questions = question);
  }

  public CreatQuestion() {
    this.modalService.open(MakeQuestionComponent);
  }

}
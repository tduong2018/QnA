import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MakeQuestionComponent } from '../make-question/make-question.component';
import { QuestionService } from '../services/Question.service';

@Component({
  selector: 'app-questioner',
  templateUrl: './questioner.component.html',
  styleUrls: ['./questioner.component.css']
})
export class QuestionerComponent implements OnInit {

  public Questions : any ;
  constructor(private modalService: NgbModal, private _http:HttpClient, private question:QuestionService) { }

  ngOnInit() {
    this.question.getCustom('getListQuestion').subscribe(question => this.Questions = question);
  }

  public CreatQuestion() {
    this.modalService.open(MakeQuestionComponent);
  }
}

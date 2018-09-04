import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MakeQuestionComponent } from '../make-question/make-question.component';

@Component({
  selector: 'app-questioner',
  templateUrl: './questioner.component.html',
  styleUrls: ['./questioner.component.css']
})
export class QuestionerComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    let makeQuestion: MakeQuestionComponent;
    makeQuestion.open;
  }
}

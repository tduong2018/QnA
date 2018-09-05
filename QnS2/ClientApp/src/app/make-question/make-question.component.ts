import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-make-question',
  templateUrl: './make-question.component.html',
  styleUrls: ['./make-question.component.css']
})
export class MakeQuestionComponent implements OnInit {
  public modal;
  public ObjectQuestion;

  public form = new FormGroup({
    questionTitle: new FormControl('',
    [
      Validators.required
    ]),
    questionContent: new FormControl('',
    [
      Validators.required,
      Validators.minLength(10)
    ]),
  });

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  public saveSubmit(ObjectQuestion){
    
    this.ObjectQuestion = ObjectQuestion.value;

    this.activeModal.close();
    
  }

  public get questionTitle(){
    return this.form.get('questionTitle');
  }

  public get questionContent(){
    return this.form.get('questionContent');
  }
}

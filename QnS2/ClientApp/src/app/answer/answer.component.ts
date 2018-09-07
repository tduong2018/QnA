import { Component, OnInit } from '@angular/core';
import { AnwserService } from '../services/Anwser.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  public cards_answer:any;

  constructor(private _anwser : AnwserService) { }

  ngOnInit() {
    this._anwser.get('74d2c91b-2bdf-4f5b-b9c6-d6a2bd2fd1fd').subscribe(card => this.cards_answer = card);
  }

}
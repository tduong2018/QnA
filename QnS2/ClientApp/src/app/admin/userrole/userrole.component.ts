import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.css']
})

export class UserroleComponent implements OnInit {
  @Input() id;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}

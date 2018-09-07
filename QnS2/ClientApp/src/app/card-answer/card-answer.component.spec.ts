import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnswerComponent } from './card-answer.component';

describe('CardAnswerComponent', () => {
  let component: CardAnswerComponent;
  let fixture: ComponentFixture<CardAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

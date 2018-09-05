import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleMangageComponent } from './role.mangage.component';

describe('Role.MangageComponent', () => {
  let component: RoleMangageComponent;
  let fixture: ComponentFixture<RoleMangageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleMangageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleMangageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

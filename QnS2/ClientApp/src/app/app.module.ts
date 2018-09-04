import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AnswerComponent } from './answer/answer.component';
import { QuestionerComponent } from './questioner/questioner.component';
import { MakeQuestionComponent } from './make-question/make-question.component';
import { AdminComponent } from './admin/admin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AnswerComponent,
    QuestionerComponent,
    MakeQuestionComponent,
    AdminComponent,
    NotfoundComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: '', 
        component: LoginComponent
      },
      {
        path: 'answer', 
        component: AnswerComponent
      },
      {
        path: 'questioner', 
        component: QuestionerComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: '**',
        component: NotfoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

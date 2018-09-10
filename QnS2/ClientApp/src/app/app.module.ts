import { AdminUserService } from './services/admin.user.service';
import { QuestionerComponent } from './questioner/questioner.component';
import { AnswerComponent } from './answer/answer.component';
import { MakeQuestionComponent } from './make-question/make-question.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { AppErrorHandler } from './common/app-error-handler';
import { SignupComponent } from './signup/signup.component';
import { CardQuestionComponent } from './card-question/card-question.component';
import { RoleMangageComponent } from './admin/rolemangage/role.mangage.component';
import { RoleService } from './services/role.service';
import { RoleComponent } from './admin/role/role.component';
import { UsermanageComponent } from './admin/usermanage/usermanage.component';
import { UserroleComponent } from './admin/userrole/userrole.component';
import { UserBoxComponent } from './user-box/user-box.component';
import { MenuComponent } from './menu/menu.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CardAnswerComponent } from './card-answer/card-answer.component';
import { CardCommentComponent } from './card-comment/card-comment.component';
import { AnwserService } from './services/Anwser.service';
import { CommentService } from './services/Comment.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { QuestionService } from './services/Question.service';
import { UserService } from './services/User.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    NoAccessComponent,
    MakeQuestionComponent,
    AnswerComponent,
    NotfoundComponent,
    QuestionerComponent,
    SignupComponent,
    CardQuestionComponent,
    RoleMangageComponent,
    RoleComponent,
    UsermanageComponent,
    UserroleComponent,
    UserBoxComponent,
    MenuComponent,
    CardAnswerComponent,
    CardCommentComponent
  ],
  imports: [
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSpinnerModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'admin', component: AdminComponent,
        canActivate: [AdminAuthGuard],
        children: [
          {
            path: 'roles', component: RoleMangageComponent,
            canActivate: [AdminAuthGuard]
          },
          {
            path: 'roles/new', component: RoleComponent,
            canActivate: [AdminAuthGuard]
          },
          {
            path: 'roles/:id', component: RoleComponent,
            canActivate: [AdminAuthGuard]
          },
          {
            path: 'users', component: UsermanageComponent,
            canActivate: [AdminAuthGuard]
          },
          {
            path: 'users/new', component: RoleComponent,
            canActivate: [AdminAuthGuard]
          },
          {
            path: 'users/:id', component: RoleComponent,
            canActivate: [AdminAuthGuard]
          }]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'make-question',
        component: MakeQuestionComponent
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
        path: '**',
        component: NotfoundComponent
      },
    ]),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:61759', 'localhost:61758'],
        blacklistedRoutes: ['']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    RoleService,
    AdminUserService,
    UserService,
    AnwserService,
    CommentService,
    NgbActiveModal,
    QuestionService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  entryComponents: [UserroleComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

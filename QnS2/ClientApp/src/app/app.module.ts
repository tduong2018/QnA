import { QuestionerComponent } from './questioner/questioner.component';
import { AnswerComponent } from './answer/answer.component';
import { MakeQuestionComponent } from './make-question/make-question.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { AppErrorHandler } from './common/app-error-handler';
import { SignupComponent } from './signup/signup.component';
import { CardQuestionComponent } from './card-question/card-question.component';
import { RoleMangageComponent } from './admin/rolemangage/role.mangage.component';
import { RoleService } from './services/role.service';
import { RoleComponent } from './admin/role/role.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent,
    MakeQuestionComponent,
    AnswerComponent,
    QuestionerComponent,
    SignupComponent,
    CardQuestionComponent,
    RoleMangageComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent 
      },
      { 
        path: 'admin', component: AdminComponent, 
        canActivate: [AdminAuthGuard] 
      },
      { 
        path: 'admin/role', component: RoleMangageComponent, 
        canActivate: [AdminAuthGuard] 
      },
      { 
        path: 'admin/roles/new', component: RoleComponent, 
        canActivate: [AdminAuthGuard] 
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
        component:NotFoundComponent
      },
    ]),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:61759','localhost:61758'],
        blacklistedRoutes: ['']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    RoleService,
    {provide:ErrorHandler, useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

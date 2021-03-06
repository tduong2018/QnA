import { environment } from './../../environments/environment';
import { AdminAuthGuard } from './../admin-auth-guard.service';
import { UserRegistration } from './../Models/user.registration.interface';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, catchError, finalize } from 'rxjs/operators';
import { Token } from '../Models/Token';
import { Router } from '@angular/router';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class AuthService {
  currentUser: any;
  baseUrl: string = '';
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private router: Router,private spinner: NgxSpinnerService) {
    let token = localStorage.getItem('token');
    if (token) {
      this.currentUser = jwtHelper.decodeToken(token);
    }
    this.baseUrl = environment.baseUrl;
  }

  login(credentials) {
    this.spinner.show();
    return this.http.post<Token>(this.baseUrl + '/auth/login', JSON.stringify(credentials), { headers: this.headers }).pipe(
      finalize(() => this.spinner.hide()),
      map(response => {
        let result = response;

        if (result) {
          localStorage.setItem('token', result.auth_token);

          this.currentUser = this.jwtHelper.decodeToken(localStorage.getItem('token'));

          return true;
        }
        else return false;
      }),
      catchError(this.HandleError));
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    return token && !this.jwtHelper.isTokenExpired(token);
  }

  hasRole(role) {
    let roles: any[];
    if (this.currentUser != null) 
      roles = this.currentUser.roles;
    if (roles != null) {
      if (roles.indexOf(role) >= 0) return true;
    }
    return false;
  }

  getRoleName(){
    let roles: any[] = [];
    let tmp: any[] = [];
    if (this.currentUser != null) 
      roles = this.currentUser.roles;
    if (roles != null) {
      if (roles instanceof Array)
      {
        return roles
      }
      tmp.push(roles);
      return tmp;
    }
  }

  register(userRegistration) {
    this.spinner.show();
    let body = JSON.stringify(userRegistration);
    return this.http.post(this.baseUrl + '/accounts', body, { headers: this.headers }).
      pipe(
        finalize(() => this.spinner.hide()),
        map(response => true),
        catchError(this.HandleError));
  }

  private HandleError(error: Response) {
    var modelStateErrors: string = '';
    var serverError = error["error"];
    console.log(serverError);
    for (var key in serverError) {
      if (serverError[key])
        modelStateErrors += serverError[key] + '\n';
    }
    if (error.status == 400)
      return throwError(new BadInput(modelStateErrors)); //createPost
    if (error.status == 404)
      return throwError(new NotFoundError(modelStateErrors));
    return throwError(new AppError(modelStateErrors));
  }
}


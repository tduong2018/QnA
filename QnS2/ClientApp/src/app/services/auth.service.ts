import { UserRegistration } from './../Models/user.registration.interface';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, catchError } from 'rxjs/operators';
import { Token } from '../Models/Token';
import { Router } from '@angular/router';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { ConfigService } from '../utils/config.service';

@Injectable()
export class AuthService {
  currentUser: any;
  baseUrl: string = '';
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private router: Router, private configService: ConfigService) {
    let token = localStorage.getItem('token');
    if (token) {
      this.currentUser = jwtHelper.decodeToken(token);
    }
    this.baseUrl = configService.getApiURI();
  }

  login(credentials) {
    return this.http.post<Token>(this.baseUrl+'/auth/login', JSON.stringify(credentials), { headers: this.headers }).pipe(
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


  register(userRegistration) {
    let body = JSON.stringify(userRegistration);
    return this.http.post(this.baseUrl+'/accounts', body, { headers: this.headers }).
      pipe(
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


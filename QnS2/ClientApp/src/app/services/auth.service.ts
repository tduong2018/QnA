import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { Token } from '../Models/Token';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  currentUser: any; 

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService,private router: Router) {
    let token = localStorage.getItem('token');
    if (token) {
      this.currentUser = jwtHelper.decodeToken(token);
    }
  }

  login(credentials) { 
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<Token>('/api/auth/login', JSON.stringify(credentials),{headers: headers}).pipe(
    map(response => {
      let result = response;
      
      if (result ) {
        localStorage.setItem('token', result.auth_token);

        this.currentUser = this.jwtHelper.decodeToken(localStorage.getItem('token'));

        return true; 
      }
      else return false; 
    }));
  }

  logout() { 
    localStorage.removeItem('token');
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn() { 
    let token = localStorage.getItem('token');
    return !token && !this.jwtHelper.isTokenExpired(token);
  }
}


import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { catchError, map, retry, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';
import { throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class DataService {
  private baseUrl: string = ''
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private url: string, private http: HttpClient,private spinner: NgxSpinnerService) {
    this.baseUrl = environment.baseUrl;
  }

  getAll() {
    this.spinner.show();
    return this.http.get(this.baseUrl + '/' + this.url)
      .pipe(
        finalize(() => this.spinner.hide()),
        map(response => response),
        catchError(this.HandleError));
  }

  get(id) {
    this.spinner.show();
    return this.http.get(this.baseUrl + '/' + this.url + '/' + id)
      .pipe(
        finalize(() => this.spinner.hide()),
        map(response => response),
        catchError(this.HandleError));
  }

  create(resource) {
    this.spinner.show();
    return this.http.post(this.baseUrl + '/' + this.url, JSON.stringify(resource), { headers: this.headers })
      .pipe(
        finalize(() => this.spinner.hide()),
        retry(3),
        map(response => response),
        catchError(this.HandleError));;
  }

  update(id,resource) {
    this.spinner.show();
    return this.http.put(this.baseUrl + '/' + this.url + '/' + id, JSON.stringify(resource), { headers: this.headers })
      .pipe(
        finalize(() => this.spinner.hide()),
        map(response => response),
        catchError(this.HandleError));
  }

  delete(id) {
    return this.http.delete(this.baseUrl + '/' + this.url + '/' + id).
      pipe(
        
        map(response => response),
        catchError(
          this.HandleError
        ));
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

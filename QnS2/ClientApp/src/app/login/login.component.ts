import { SignupComponent } from './../signup/signup.component';
import { environment } from './../../environments/environment';
import { AuthService } from './../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { Subscription } from 'rxjs';
import { Credentials } from '../Models/credentials.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  brandNew: boolean;
  invalidLogin: boolean;
  private subscription: Subscription;
  credentials: Credentials = { email: '', password: '' };
  error;

  ngOnInit() {
    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.brandNew = param['brandNew'];
        if (!param['email'])
          this.credentials.email = '';
        else
          this.credentials.email = param['email'];
      });
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal) { }

  signIn(credential) {
    this.authService.login(credential)
      .subscribe(result => {
        console.log(result);
        if (result) {
          if (this.authService.hasRole(environment.admin)) this.router.navigate(['/admin']);
          else this.router.navigate(['/']);
        }
        else
          this.invalidLogin = true;
      },
        (error: AppError) => {
          if (error instanceof BadInput) {
            this.invalidLogin = true;
            this.error = error.originalError;
          }
          else throw error;
        });
  }

  open() {
    this.modalService.open(SignupComponent);
  }
}

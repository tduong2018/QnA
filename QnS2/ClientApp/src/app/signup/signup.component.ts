import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { UserRegistration } from '../Models/user.registration.interface';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;
  constructor(private authService: AuthService, 
    private router: Router,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  registerUser({ value, valid }: { value: UserRegistration, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.authService.register(value).pipe(
        finalize(() => this.isRequesting = false))
        .subscribe(
          result => {
            if (result) {
              this.toastr.success('Please login!', 'Account was created!');
              this.activeModal.dismiss();
              this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
            }
          },
          (error: AppError) => {
            if (error instanceof BadInput) { 
              this.errors = error.originalError;
            }
            else throw error;
          });
    }
  }
}

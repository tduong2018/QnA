import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { UserRegistration } from '../Models/user.registration.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser({ value, valid }: { value: UserRegistration, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.authService.register(value.email, value.password, value.firstName, value.lastName, value.location).pipe(
        finalize(() => this.isRequesting = false))
        .subscribe(
          result => {
            if (result) {
              this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
            }
          },
          errors => this.errors = errors);
    }
  }
}

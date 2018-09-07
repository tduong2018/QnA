import { AuthGuard } from './auth-guard.service';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class AdminAuthGuard extends AuthGuard {

  canActivate() {
    let isAuthenticated = super.canActivate();
    if (!isAuthenticated)
      return false; 

    if (this.authService.hasRole(environment.admin))
      return true; 

    this.router.navigate(['/no-access']);
    return false;
  }
}

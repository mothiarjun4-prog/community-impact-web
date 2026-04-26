import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if (!this.authService.isLoggedIn()) {
      return this.router.createUrlTree(['/login']);
    }

    const userRole = this.authService.getUserRole();
    const expectedRole = route.data['role'];

    if (expectedRole && userRole !== expectedRole) {
      // Redirect to user's correct dashboard if they try to access another role's page
      if (userRole === 'ngo') return this.router.createUrlTree(['/ngo/dashboard']);
      if (userRole === 'volunteer') return this.router.createUrlTree(['/volunteer/dashboard']);
      if (userRole === 'victim') return this.router.createUrlTree(['/victim/dashboard']);
      return this.router.createUrlTree(['/']);
    }

    return true;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if user is authenticated
    if (this.authService.isAuthenticated()) {
      return true; // Allow access to the route
    } else {
      // If not authenticated, redirect to login page with return URL
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false; // Prevent access to the route
    }
  }
}
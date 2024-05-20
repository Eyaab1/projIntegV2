import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_KEY = 'user';
  private authenticated = false;
  isAnAdmin ='';

  constructor(
    private router: Router,
    private userService: UserService 
  ) {}

  login(email: string, password: string): void { // Removed `remember` parameter
    this.userService.getUserByEmail(email).subscribe((authenticatedUser) => {
      if (authenticatedUser && authenticatedUser.password === password) {
        localStorage.setItem(this.USER_KEY, JSON.stringify(authenticatedUser));
        localStorage.setItem(this.isAnAdmin,authenticatedUser.type.toString())
        if (authenticatedUser.type === 'administrateur') {
          window.location.href = 'http://localhost:8000/admin';
        } else {
          this.router.navigate(['/userInter']);
        }
      } else {
        alert('User not found or incorrect password');
      }
    });
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
    sessionStorage.removeItem(this.USER_KEY);
    alert('You have been logged out');
    this.router.navigate(['/homepage']);
    // window.location.reload();
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.USER_KEY) || !!sessionStorage.getItem(this.USER_KEY);
  }


  setAuthenticated(value: boolean): void {
    this.authenticated = value;
  }
  getCurrentUser(): User | null {
    const storedUser = localStorage.getItem(this.USER_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post('/login', credentials).pipe(
      catchError(error => {
        console.error('Login failed:', error);
        return throwError(error);
      })
    );
  }
  
  logout(): Observable<any> {
    return this.http.get('/logout').pipe(
      catchError(error => {
        console.error('Logout failed:', error);
        return throwError(error);
      })
    );
  }

  // Method to check if the user is authenticated
  isAuthenticated(): boolean {
    // Implement your authentication logic here
    // For demonstration purposes, let's assume the user is authenticated if they have a token stored in localStorage
    return !!localStorage.getItem('token');
  }
}

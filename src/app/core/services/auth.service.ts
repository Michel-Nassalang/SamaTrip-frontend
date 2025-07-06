import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { RegisterUser, LoginUser, LoginResponse } from '../models/user.model';
import { PlatformService } from './platform.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth';
  constructor(private http: HttpClient, private platformService: PlatformService) {}

  register(user: RegisterUser): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  login(credentials: LoginUser): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        if (this.platformService.isBrowser()) {
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('userRole', response.role);
        }
      })
    );
  }

  logout(): void {
    if (this.platformService.isBrowser()) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userRole');
    }
  }

  isLoggedIn(): boolean {
    return this.platformService.isBrowser() && !!localStorage.getItem('authToken');
  }

  getToken(): string | null {
    return this.platformService.isBrowser() ? localStorage.getItem('authToken') : null;
  }

  getUserRole(): string | null {
    return this.platformService.isBrowser() ? localStorage.getItem('userRole') : null;
  }
}

import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class UserService {

  private apiUrl = 'http://localhost:8080';

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();
  private isBrowser: boolean;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  loadUser(): Observable<User | null> {
    if (!this.isBrowser) {
      return of(null);
    }
    return this.http.get<User>('/api/users/me').pipe(
      tap(user => this.userSubject.next(user)),
      catchError(() => {
        this.userSubject.next(null);
        return of(null);
      })
    );
  }


  clearUser() {
    this.userSubject.next(null);
  }

  get currentUser(): User | null {
    return this.userSubject.value;
  }
}
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isUserLoggedInSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  constructor() {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const storedLoginState = sessionStorage.getItem('isUserLoggedIn') === 'true';
      const storedUser = sessionStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUserSubject.next(JSON.parse(storedUser));
      }
      this.isUserLoggedInSubject.next(storedLoginState);
    }
   }

   get isUserLoggedIn$(): Observable<boolean> {
    return this.isUserLoggedInSubject.asObservable();
  }

  get currentUser$(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  //  signUp(userData: {
  //   username: string;
  //   email: string;
  //   password: string;
  // }): Observable<User> {
  //   return this.http.post<User>('http://localhost:3000/users', userData).pipe(
  //     tap((user) => {
  //       this.handleLogin(user);
  //     })
  //   );
  // }

  // login(credentials: {
  //   email: string;
  //   password: string;
  // }): Observable<User> {
  //   return this.http.post<User>('http://localhost:3000/auth/login', credentials).pipe(
  //     tap((user) => {
  //       this.handleLogin(user);
  //     })
  //   );
  // }

  logout(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem('isUserLoggedIn');
      sessionStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      this.isUserLoggedInSubject.next(false);
    }
  }

  private handleLogin(user: User): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem('isUserLoggedIn', 'true');
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      this.isUserLoggedInSubject.next(true);
    }
  }
}
 
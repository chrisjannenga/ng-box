import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

const BACKEND_URL = environment.apiURL + '/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient, private router: Router ) { }

  private token: string;
  private authStatusListener = new BehaviorSubject<boolean>(false);
  private isAuthenticated = false;
  private tokenTimer: any;
  private userId: string;

  private saveAuthData(token: string, expirationDate: Date, userId: string ) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
  }

  getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    if (!token && !expirationDate) {
      return;
    }
    return {
      token,
      expirationDate: new Date(expirationDate),
      userId
    };
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userId;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(firstName: string, lastName: string, username: string, email: string, password: string) {
    const fullName = `${firstName} ${lastName}`;
    const userData = {firstName, lastName, fullName, username, email, password};

    this.http.post(BACKEND_URL + 'signup', userData).subscribe(response => {
      this.router.navigate(['/dashboard']);
    }, error => {
      this.authStatusListener.next(false);
    });
  }

  login(email: string, password: string) {
    const userData = {email, password};
    this.http.post<{token: string, expiresIn: number, userId: string}>(BACKEND_URL + 'login', userData).subscribe(response => {
      const token = response.token;
      this.token = token;
      if (token) {
        const expiresInDuration = response.expiresIn;
        this.setAuthTimer(expiresInDuration);
        this.isAuthenticated = true;
        this.userId = response.userId;
        this.authStatusListener.next(true);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
        this.saveAuthData(token, expirationDate, this.userId);
        this.router.navigate(['/welcome']);
      }
    }, error => {
      this.authStatusListener.next(false);
    });
  }

  fakeLogin() {
    this.authStatusListener.next(true);
    this.isAuthenticated = true;
  }

  autoAuthUser() {
    const authInfo = this.getAuthData();
    if (!authInfo) {
       return;
      }

    const now = new Date();
    const expiresIn = authInfo.expirationDate.getTime() - now.getTime();

    if (expiresIn > 0) {
      this.token = authInfo.token;
      this.isAuthenticated = true;
      this.userId = authInfo.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.userId = null;
    this.clearAuthData();
    this.router.navigate(['/']);
    clearTimeout(this.tokenTimer);
  }


}

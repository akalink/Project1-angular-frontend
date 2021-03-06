import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public setToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public setUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    if (user && user !== undefined) {
      return JSON.parse(user);
    }

    return {};
  }

  public logout() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getUser() && this.getToken();
  }

  public getRole() {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      if(JSON.parse(user).userRole === 'Employee'){
        return 2;
      } else if(JSON.parse(user).userRole === 'Finance Manager'){
        return 1;
      }
    }
    return null;
  }
}

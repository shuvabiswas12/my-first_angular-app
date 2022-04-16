import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = false;
  constructor(private http: HttpClient) {}

  isLoggedIn() {
    return this.loggedIn;
  }

  login(credentials) {
    return this.http.post('/api/authenticate', 
      JSON.stringify(credentials));
  }

  logout() {}
}

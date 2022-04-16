import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = false;
  currentUser: string = 'Admin';
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  isLoggedIn() {
    let user = localStorage.getItem('token');
    if (user) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    return this.loggedIn;
  }

  login(credentials) {
    // return this.http.post('/api/authenticate', JSON.stringify(credentials));
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJhZG1pbiI6dHJ1ZSwiZW1haWwiOiJleG1hcGxlLkBlbWFpbC5jb20ifQ.u5oQSwkIFeJd5dQtg3MOYf2w3u-q-n_q6hFuTSNgXqw';

    let tokenExpirationdate = this.jwtHelper.getTokenExpirationDate(token);
    let isTokenExpire = this.jwtHelper.isTokenExpired(token);
    let datas = this.jwtHelper.decodeToken(token);

    console.log('Token expiration date: ' + tokenExpirationdate);
    console.log('Is Token expire: ' + isTokenExpire);
    console.log('datas: ' + JSON.stringify(datas));

    this.currentUser = datas?.admin ? 'User' : 'Admin';

    localStorage.setItem('token', token);

    const observable = new Observable((subscriber) => {
      subscriber.next(token);
    });

    return observable;
  }

  logout() {}
}

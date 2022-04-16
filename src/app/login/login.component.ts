import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean = false;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  signIn(credentials) {
    this.authService.login(credentials).subscribe((result) => {
      if (result) this.router.navigate(['/']);
      else this.invalidLogin = true;
    });
  }
}

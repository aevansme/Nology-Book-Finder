import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authSvc: AuthService) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.authSvc.googleSignin().then((response) => {
      this.router.navigate(['/search']);
    })
  }

}

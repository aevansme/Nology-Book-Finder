import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignIn() {
    this.router.navigate(['/login'])
  }
  onSignOut() {
    this.authSvc.signOut();
  }

}

import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../shared/services/collection.service';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  items = [];

  constructor(private authSvc: AuthService, 
              private router: Router,
              private collectionSvc: CollectionService) { }

  ngOnInit(): void {
    // Redirect Unauthenticated Users. TODO: Place this in a guard for 'auth' routes
    if (!this.authSvc.isLoggedIn$.value) {
      this.router.navigate(['/login']);
      return;
    }

    // Retrieve this users collection :)
    this.collectionSvc.getUserCollection(this.authSvc.user$.value.uid)
                      .toPromise()
                      .then(response => {
                        this.items = response.docs.map(d => d.data());
                      });
  }
}

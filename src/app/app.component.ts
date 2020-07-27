import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { fadeAnimation } from './shared/animations/fadeAnimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'bookfinder';

  constructor(public authSvc: AuthService) {}

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}



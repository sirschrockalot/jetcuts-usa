import { Component } from '@angular/core';

import { SocialloginService } from '../common/social-login-service.service';
import { SocialUsers } from '../model/social-users';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user: SocialUsers;
  isLoggedIn = false;

  constructor(private socialLoginService: SocialloginService) {}

  clicked() {
    this.user = this.socialLoginService.getSocialUser();
    console.log(this.user);
    this.isLoggedIn = true;
  }
}

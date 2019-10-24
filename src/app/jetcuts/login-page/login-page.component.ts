import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular4-social-login';

import { SocialloginService } from '../common/social-login-service.service';
import { SocialUsers } from '../model/social-users';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  response;
  socialUsers = new SocialUsers();

  constructor(public OAuth: AuthService, private socialLoginService: SocialloginService, private router: Router) {}

  public socialSignIn(socialProvider: string) {
    let socialPlatformProvider;
    if (socialProvider === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialProvider === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.OAuth.signIn(socialPlatformProvider).then(socialUsers => {
      // console.log(socialProvider, socialUsers);
      // console.log(socialUsers);
      // this.Savesresponse(socialusers);
      this.socialLoginService.holdSocialUser(socialUsers);
      // this.router.navigate(['/Dashboard']);
    });
  }
  // Savesresponse(socialusers: SocialUsers) {
  //   this.socialLoginService.Savesresponse(socialusers).subscribe((res: any) => {
  //     // debugger;
  //     console.log(res);
  //     this.socialusers = res;
  //     this.response = res.userDetail;
  //     localStorage.setItem('socialusers', JSON.stringify(this.socialusers));
  //     console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));
  //     this.router.navigate([`/Dashboard`]);
  //   });
  // }
}

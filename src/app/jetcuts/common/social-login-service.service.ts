import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SocialUsers } from '../model/social-users';

@Injectable({
  providedIn: 'root'
})
export class SocialloginService {
  users: SocialUsers;
  url;
  constructor(private http: HttpClient) {}

  Savesresponse(responce) {
    this.url = 'http://localhost:64726/Api/Login/Savesresponse';
    return this.http.post(this.url, responce);
  }

  holdSocialUser(socialUsers: SocialUsers) {
    this.users = socialUsers;
    console.log(socialUsers);
  }

  getSocialUser() {
    return this.users;
  }
}

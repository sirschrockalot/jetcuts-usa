import { TestBed, inject } from '@angular/core/testing';

import { SocialLoginServiceService } from './social-login-service.service';

describe('SocialLoginServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialLoginServiceService]
    });
  });

  it('should be created', inject([SocialLoginServiceService], (service: SocialLoginServiceService) => {
    expect(service).toBeTruthy();
  }));
});

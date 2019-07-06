import { TestBed } from '@angular/core/testing';

import { FirebaseAuthService } from './firebase-auth.service';

describe('FirebaseAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseAuthService = TestBed.get(FirebaseAuthService);
    expect(service).toBeTruthy();
  });
});

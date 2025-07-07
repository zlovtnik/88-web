import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

class MockAuthService {
  isAuthenticated = false;
}

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: MockAuthService;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    authService = new MockAuthService();
    router = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router },
      ],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should allow the authenticated user', () => {
    authService.isAuthenticated = true;
    expect(guard.canActivate()).toBeTrue();
  });

  it('should redirect unauthenticated user', () => {
    authService.isAuthenticated = false;
    expect(guard.canActivate()).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
  });
});

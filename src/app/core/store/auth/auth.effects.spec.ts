import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { Action } from '@ngrx/store';
import { AuthEffects } from './auth.effects';
import * as AuthActions from './auth.actions';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

describe('AuthEffects', () => {
  let actions$: Observable<Action>;
  let effects: AuthEffects;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', ['login', 'register']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router },
      ],
    });

    effects = TestBed.inject(AuthEffects);
  });

  it('should dispatch loginSuccess on successful login', (done) => {
    const auth = { token: '123' };
    authService.login.and.returnValue(of(auth));
    actions$ = of(AuthActions.login({ email: 'test@test.com', password: 'pass' }));

    effects.login$.subscribe((result) => {
      expect(result).toEqual(AuthActions.loginSuccess({ auth }));
      done();
    });
  });

  it('should dispatch loginFailure on failed login', (done) => {
    authService.login.and.returnValue(throwError(() => ({ message: 'fail' })));
    actions$ = of(AuthActions.login({ email: 'test@test.com', password: 'pass' }));

    effects.login$.subscribe((result) => {
      expect(result).toEqual(AuthActions.loginFailure({ error: 'fail' }));
      done();
    });
  });

  it('should dispatch registerSuccess on successful register', (done) => {
    const auth = { token: 'abc' };
    authService.register.and.returnValue(of(auth));
    actions$ = of(AuthActions.register({ userData: { email: 'a', password: 'b' } }));

    effects.register$.subscribe((result) => {
      expect(result).toEqual(AuthActions.registerSuccess({ auth }));
      done();
    });
  });

  it('should dispatch registerFailure on failed register', (done) => {
    authService.register.and.returnValue(throwError(() => ({ message: 'regfail' })));
    actions$ = of(AuthActions.register({ userData: { email: 'a', password: 'b' } }));

    effects.register$.subscribe((result) => {
      expect(result).toEqual(AuthActions.registerFailure({ error: 'regfail' }));
      done();
    });
  });

  it('should navigate to / on loginSuccess', (done) => {
    actions$ = of(AuthActions.loginSuccess({ auth: { token: 't' } }));
    effects.loginSuccess$.subscribe(() => {
      expect(router.navigate).toHaveBeenCalledWith(['/']);
      done();
    });
  });

  it('should navigate to / on registerSuccess', (done) => {
    actions$ = of(AuthActions.registerSuccess({ auth: { token: 't' } }));
    effects.registerSuccess$.subscribe(() => {
      expect(router.navigate).toHaveBeenCalledWith(['/']);
      done();
    });
  });

  it('should navigate to /auth/login on logout', (done) => {
    actions$ = of(AuthActions.logout());
    effects.logout$.subscribe(() => {
      expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
      done();
    });
  });
});

import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthState } from '../../models';

export const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, AuthActions.register, (state) => ({ ...state, isLoading: true, error: null })),
  on(AuthActions.loginSuccess, AuthActions.registerSuccess, (state, { auth }) => ({
    ...state,
    ...auth,
    isLoading: false,
    error: null,
  })),
  on(AuthActions.loginFailure, AuthActions.registerFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(AuthActions.logout, () => initialState)
);

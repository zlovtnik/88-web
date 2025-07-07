import { createAction, props } from '@ngrx/store';
import { User, AuthState } from '../../models';

export const login = createAction('[Auth] Login', props<{ email: string; password: string }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ auth: AuthState }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());

export const register = createAction('[Auth] Register', props<{ userData: Partial<User> & { password: string } }>());
export const registerSuccess = createAction('[Auth] Register Success', props<{ auth: AuthState }>());
export const registerFailure = createAction('[Auth] Register Failure', props<{ error: string }>());

export const logout = createAction('[Auth] Logout');

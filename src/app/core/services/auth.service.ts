import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { User, AuthState, ApiResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = '/api/auth';
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'auth_user';

  private authStateSubject = new BehaviorSubject<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null
  });

  public authState$ = this.authStateSubject.asObservable();

  constructor(private http: HttpClient) {
    this.initializeAuth();
  }

  private initializeAuth(): void {
    const token = this.getStoredToken();
    const user = this.getStoredUser();
    
    if (token && user) {
      this.authStateSubject.next({
        user,
        token,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });
    }
  }

  login(email: string, password: string): Observable<AuthState> {
    this.setLoading(true);
    
    return this.http.post<ApiResponse<{ user: User; token: string }>>(`${this.API_URL}/login`, {
      email,
      password
    }).pipe(
      map(response => {
        if (response.success && response.data) {
          const { user, token } = response.data;
          this.storeAuthData(user, token);
          
          const authState: AuthState = {
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
            error: null
          };
          
          this.authStateSubject.next(authState);
          return authState;
        } else {
          throw new Error(response.error || 'Login failed');
        }
      }),
      catchError(error => {
        const authState: AuthState = {
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
          error: error.message || 'Login failed'
        };
        this.authStateSubject.next(authState);
        return throwError(() => error);
      })
    );
  }

  register(userData: Partial<User> & { password: string }): Observable<AuthState> {
    this.setLoading(true);
    
    return this.http.post<ApiResponse<{ user: User; token: string }>>(`${this.API_URL}/register`, userData).pipe(
      map(response => {
        if (response.success && response.data) {
          const { user, token } = response.data;
          this.storeAuthData(user, token);
          
          const authState: AuthState = {
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
            error: null
          };
          
          this.authStateSubject.next(authState);
          return authState;
        } else {
          throw new Error(response.error || 'Registration failed');
        }
      }),
      catchError(error => {
        const authState: AuthState = {
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
          error: error.message || 'Registration failed'
        };
        this.authStateSubject.next(authState);
        return throwError(() => error);
      })
    );
  }

  logout(): void {
    this.clearAuthData();
    this.authStateSubject.next({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null
    });
  }

  refreshToken(): Observable<AuthState> {
    const token = this.getStoredToken();
    if (!token) {
      return throwError(() => new Error('No token to refresh'));
    }

    return this.http.post<ApiResponse<{ user: User; token: string }>>(`${this.API_URL}/refresh`, { token }).pipe(
      map(response => {
        if (response.success && response.data) {
          const { user, token } = response.data;
          this.storeAuthData(user, token);
          
          const authState: AuthState = {
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
            error: null
          };
          
          this.authStateSubject.next(authState);
          return authState;
        } else {
          throw new Error(response.error || 'Token refresh failed');
        }
      }),
      catchError(error => {
        this.logout();
        return throwError(() => error);
      })
    );
  }

  forgotPassword(email: string): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${this.API_URL}/forgot-password`, { email });
  }

  resetPassword(token: string, newPassword: string): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${this.API_URL}/reset-password`, {
      token,
      newPassword
    });
  }

  changePassword(currentPassword: string, newPassword: string): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${this.API_URL}/change-password`, {
      currentPassword,
      newPassword
    });
  }

  updateProfile(userData: Partial<User>): Observable<User> {
    return this.http.put<ApiResponse<User>>(`${this.API_URL}/profile`, userData).pipe(
      map(response => {
        if (response.success && response.data) {
          const updatedUser = response.data;
          this.updateStoredUser(updatedUser);
          
          const currentState = this.authStateSubject.value;
          this.authStateSubject.next({
            ...currentState,
            user: updatedUser
          });
          
          return updatedUser;
        } else {
          throw new Error(response.error || 'Profile update failed');
        }
      })
    );
  }

  getCurrentUser(): User | null {
    return this.authStateSubject.value.user;
  }

  getToken(): string | null {
    return this.authStateSubject.value.token;
  }

  isAuthenticated(): boolean {
    return this.authStateSubject.value.isAuthenticated;
  }

  hasPermission(permission: string): boolean {
    const user = this.getCurrentUser();
    return user?.permissions.includes(permission as any) || false;
  }

  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user?.role === role;
  }

  private setLoading(isLoading: boolean): void {
    const currentState = this.authStateSubject.value;
    this.authStateSubject.next({
      ...currentState,
      isLoading,
      error: null
    });
  }

  private storeAuthData(user: User, token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  private clearAuthData(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  private getStoredToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private getStoredUser(): User | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
  }

  private updateStoredUser(user: User): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }
} 
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  template: `
    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <h1>🏛️ Tax Data Warehouse</h1>
          <p>Sign in to your account</p>
        </div>

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="login-form">
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Email</mat-label>
            <input matInput formControlName="email" type="email" placeholder="Enter your email">
            <mat-icon matSuffix>email</mat-icon>
            <mat-error *ngIf="loginForm.get('email')?.hasError('required')">
              Email is required
            </mat-error>
            <mat-error *ngIf="loginForm.get('email')?.hasError('email')">
              Please enter a valid email
            </mat-error>
          </mat-form-field>

          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Password</mat-label>
            <input matInput formControlName="password" type="password" placeholder="Enter your password">
            <mat-icon matSuffix>lock</mat-icon>
            <mat-error *ngIf="loginForm.get('password')?.hasError('required')">
              Password is required
            </mat-error>
          </mat-form-field>

          <div class="form-actions">
            <mat-checkbox formControlName="rememberMe" class="remember-me">
              Remember me
            </mat-checkbox>
            <a routerLink="/auth/forgot-password" class="forgot-password">
              Forgot password?
            </a>
          </div>

          <button 
            mat-raised-button 
            color="primary" 
            type="submit" 
            class="login-button"
            [disabled]="loginForm.invalid || isLoading"
          >
            <mat-icon *ngIf="isLoading">hourglass_empty</mat-icon>
            {{ isLoading ? 'Signing in...' : 'Sign In' }}
          </button>
        </form>

        <div class="login-footer">
          <p>Don't have an account? <a routerLink="/auth/register">Sign up</a></p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `@use '../../../../styles/themes/theme-variables' as theme;
    .login-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, theme.$dark-bg-primary 0%, theme.$dark-bg-secondary 100%);
      padding: 2rem;
    }

    .login-card {
      background: rgba(26, 26, 46, 0.95);
      border-radius: 20px;
      padding: 3rem;
      box-shadow: 0 20px 40px rgba(0, 255, 159, 0.3);
      width: 100%;
      max-width: 400px;
      backdrop-filter: blur(10px);
      border: 1.5px solid theme.$electric-purple;
    }

    .login-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .login-header h1 {
      color: theme.$neon-green;
      margin-bottom: 0.5rem;
      font-size: 2rem;
      text-shadow: 0 0 10px theme.$neon-green;
    }

    .login-header p {
      color: theme.$dark-text-secondary;
      margin: 0;
    }

    .login-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .full-width {
      width: 100%;
    }

    .form-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .remember-me {
      color: theme.$dark-text-secondary;
    }

    .forgot-password {
      color: theme.$electric-purple;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.2s;
    }

    .forgot-password:hover {
      color: theme.$neon-green;
      text-decoration: underline;
    }

    .login-button {
      height: 48px;
      font-size: 1.1rem;
      font-weight: 500;
      background: linear-gradient(90deg, theme.$neon-green 0%, theme.$electric-purple 100%);
      color: theme.$dark-bg-primary;
      box-shadow: 0 0 10px theme.$neon-green;
      border-radius: 8px;
      border: none;
      transition: background 0.2s, box-shadow 0.2s;
    }

    .login-button:hover {
      background: linear-gradient(90deg, theme.$electric-purple 0%, theme.$neon-green 100%);
      box-shadow: 0 0 20px theme.$electric-purple;
    }

    .login-footer {
      text-align: center;
      margin-top: 2rem;
      padding-top: 1rem;
      border-top: 1px solid theme.$dark-bg-tertiary;
    }

    .login-footer p {
      color: theme.$dark-text-secondary;
      margin: 0;
    }

    .login-footer a {
      color: theme.$electric-purple;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }

    .login-footer a:hover {
      color: theme.$neon-green;
      text-decoration: underline;
    }

    @media (max-width: 480px) {
      .login-container {
        padding: 1rem;
      }

      .login-card {
        padding: 2rem;
      }

      .login-header h1 {
        font-size: 1.5rem;
      }
    }
    `
  ]
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  returnUrl: string = '/dashboard';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });

    // Get return URL from route parameters or default to '/dashboard'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe({
        next: (authState) => {
          this.isLoading = false;
          if (authState.isAuthenticated) {
            this.snackBar.open('Successfully signed in!', 'Close', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top'
            });
            this.router.navigate([this.returnUrl]);
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.snackBar.open(error.message || 'Login failed. Please try again.', 'Close', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['error-snackbar']
          });
        }
      });
    }
  }
} 
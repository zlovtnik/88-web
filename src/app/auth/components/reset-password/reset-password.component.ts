import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule
  ],
  template: `
    <div class="reset-password-container">
      <div class="reset-password-card">
        <div class="reset-password-header">
          <h1>🏛️ Tax Data Warehouse</h1>
          <p>Set new password</p>
        </div>

        <form [formGroup]="resetPasswordForm" (ngSubmit)="onSubmit()" class="reset-password-form">
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>New Password</mat-label>
            <input matInput formControlName="newPassword" type="password" placeholder="Enter new password">
            <mat-icon matSuffix>lock</mat-icon>
            <mat-error *ngIf="resetPasswordForm.get('newPassword')?.hasError('required')">
              New password is required
            </mat-error>
            <mat-error *ngIf="resetPasswordForm.get('newPassword')?.hasError('minlength')">
              Password must be at least 6 characters
            </mat-error>
          </mat-form-field>

          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Confirm New Password</mat-label>
            <input matInput formControlName="confirmPassword" type="password" placeholder="Confirm new password">
            <mat-icon matSuffix>lock</mat-icon>
            <mat-error *ngIf="resetPasswordForm.get('confirmPassword')?.hasError('required')">
              Please confirm your password
            </mat-error>
            <mat-error *ngIf="resetPasswordForm.get('confirmPassword')?.hasError('passwordMismatch')">
              Passwords do not match
            </mat-error>
          </mat-form-field>

          <button 
            mat-raised-button 
            color="primary" 
            type="submit" 
            class="submit-button"
            [disabled]="resetPasswordForm.invalid || isLoading"
          >
            <mat-icon *ngIf="isLoading">hourglass_empty</mat-icon>
            {{ isLoading ? 'Resetting...' : 'Reset Password' }}
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .reset-password-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
      padding: 2rem;
    }

    .reset-password-card {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      padding: 3rem;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      width: 100%;
      max-width: 400px;
      backdrop-filter: blur(10px);
    }

    .reset-password-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .reset-password-header h1 {
      color: #333;
      margin-bottom: 0.5rem;
      font-size: 2rem;
    }

    .reset-password-header p {
      color: #666;
      margin: 0;
    }

    .reset-password-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .full-width {
      width: 100%;
    }

    .submit-button {
      height: 48px;
      font-size: 1.1rem;
      font-weight: 500;
    }
  `]
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  isLoading = false;
  token: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.resetPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });

    this.token = this.route.snapshot.queryParams['token'] || '';
  }

  private passwordMatchValidator(form: FormGroup) {
    const password = form.get('newPassword');
    const confirmPassword = form.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    
    return null;
  }

  onSubmit(): void {
    if (this.resetPasswordForm.valid && this.token) {
      this.isLoading = true;
      const { confirmPassword, ...resetData } = this.resetPasswordForm.value;

      this.authService.resetPassword(this.token, resetData.newPassword).subscribe({
        next: () => {
          this.isLoading = false;
          this.snackBar.open('Password reset successfully!', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
          this.router.navigate(['/auth/login']);
        },
        error: (error) => {
          this.isLoading = false;
          this.snackBar.open(error.message || 'Failed to reset password. Please try again.', 'Close', {
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
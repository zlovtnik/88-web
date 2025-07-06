import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Public routes
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'auth/login', loadComponent: () => import('./auth/components/login/login.component').then(m => m.LoginComponent) },
  { path: 'auth/register', loadComponent: () => import('./auth/components/register/register.component').then(m => m.RegisterComponent) },
  { path: 'auth/forgot-password', loadComponent: () => import('./auth/components/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent) },
  { path: 'auth/reset-password', loadComponent: () => import('./auth/components/reset-password/reset-password.component').then(m => m.ResetPasswordComponent) },
  
  // Protected routes
  { 
    path: 'dashboard', 
    loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard],
    data: { permissions: ['read_dashboard'] }
  },
  { 
    path: 'reports', 
    loadComponent: () => import('./features/reports/reports.component').then(m => m.ReportsComponent),
    canActivate: [AuthGuard],
    data: { permissions: ['read_reports'] }
  },
  { 
    path: 'analytics', 
    loadComponent: () => import('./features/analytics/analytics.component').then(m => m.AnalyticsComponent),
    canActivate: [AuthGuard],
    data: { permissions: ['read_dashboard'] }
  },
  { 
    path: 'settings', 
    loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent),
    canActivate: [AuthGuard],
    data: { permissions: ['read_settings'] }
  },
  { 
    path: 'tax-returns', 
    loadComponent: () => import('./features/financial-records/financial-records.component').then(m => m.FinancialRecordsComponent),
    canActivate: [AuthGuard],
    data: { permissions: ['read_tax_returns'] }
  },
  { 
    path: 'payments', 
    loadComponent: () => import('./features/budget/budget.component').then(m => m.BudgetComponent),
    canActivate: [AuthGuard],
    data: { permissions: ['read_payments'] }
  },
  { 
    path: 'audit', 
    loadComponent: () => import('./features/audit/audit.component').then(m => m.AuditComponent),
    canActivate: [AuthGuard],
    data: { permissions: ['read_audit'] }
  },
  { 
    path: 'users', 
    loadComponent: () => import('./features/user-management/user-management.component').then(m => m.UserManagementComponent),
    canActivate: [AuthGuard],
    data: { permissions: ['read_users'] }
  },
  
  // Error routes
  { path: 'unauthorized', loadComponent: () => import('./shared/components/unauthorized/unauthorized.component').then(m => m.UnauthorizedComponent) },
  { path: '**', redirectTo: '/dashboard' }
];

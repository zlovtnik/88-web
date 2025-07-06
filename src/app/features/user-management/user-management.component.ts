import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="user-management-container">
      <div class="header">
        <h1>👥 User Management</h1>
        <p>Manage users and permissions</p>
      </div>
      
      <div class="content">
        <mat-card>
          <mat-card-header>
            <mat-card-title>Users</mat-card-title>
            <mat-card-subtitle>Manage system users and roles</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>This feature is under development. Coming soon!</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-raised-button color="primary">
              <mat-icon>person_add</mat-icon>
              Add User
            </button>
            <button mat-stroked-button>
              <mat-icon>security</mat-icon>
              Manage Roles
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .user-management-container {
      padding: 2rem;
      min-height: 100vh;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .header h1 {
      color: #fff;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .header p {
      color: #ccc;
      font-size: 1.2rem;
    }

    .content {
      max-width: 800px;
      margin: 0 auto;
    }

    mat-card {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 15px;
      backdrop-filter: blur(10px);
    }

    mat-card-actions {
      display: flex;
      gap: 1rem;
      padding: 1rem;
    }
  `]
})
export class UserManagementComponent {} 
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="budget-container">
      <div class="header">
        <h1>💳 Payment Processing</h1>
        <p>Manage payments and transactions</p>
      </div>
      
      <div class="content">
        <mat-card>
          <mat-card-header>
            <mat-card-title>Payments</mat-card-title>
            <mat-card-subtitle>Process and track payments</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>This feature is under development. Coming soon!</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-raised-button color="primary">
              <mat-icon>payment</mat-icon>
              Process Payment
            </button>
            <button mat-stroked-button>
              <mat-icon>history</mat-icon>
              Payment History
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .budget-container {
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
export class BudgetComponent {} 
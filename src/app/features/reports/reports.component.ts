import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="reports-container">
      <div class="reports-header">
        <h1 class="neon-text">Financial Reports</h1>
        <p class="subtitle">Comprehensive fiscal analysis and reporting</p>
      </div>
      
      <div class="reports-grid">
        <div class="report-card neon-glow">
          <div class="report-header">
            <h3>📊 Quarterly Report</h3>
            <span class="status active">Active</span>
          </div>
          <div class="report-content">
            <p>Q4 2024 Financial Performance Analysis</p>
            <div class="report-metrics">
              <div class="metric">
                <span class="label">Revenue:</span>
                <span class="value">$2.4M</span>
              </div>
              <div class="metric">
                <span class="label">Expenses:</span>
                <span class="value">$1.6M</span>
              </div>
              <div class="metric">
                <span class="label">Profit:</span>
                <span class="value positive">$800K</span>
              </div>
            </div>
          </div>
          <button class="neon-button">View Report</button>
        </div>
        
        <div class="report-card neon-glow">
          <div class="report-header">
            <h3>📈 Annual Summary</h3>
            <span class="status pending">Pending</span>
          </div>
          <div class="report-content">
            <p>2024 Complete Financial Overview</p>
            <div class="report-metrics">
              <div class="metric">
                <span class="label">Total Revenue:</span>
                <span class="value">$8.7M</span>
              </div>
              <div class="metric">
                <span class="label">Growth Rate:</span>
                <span class="value positive">+18.7%</span>
              </div>
              <div class="metric">
                <span class="label">Market Share:</span>
                <span class="value">12.3%</span>
              </div>
            </div>
          </div>
          <button class="neon-button">Generate Report</button>
        </div>
        
        <div class="report-card neon-glow">
          <div class="report-header">
            <h3>💰 Cash Flow Analysis</h3>
            <span class="status active">Active</span>
          </div>
          <div class="report-content">
            <p>Monthly Cash Flow Tracking</p>
            <div class="report-metrics">
              <div class="metric">
                <span class="label">Inflow:</span>
                <span class="value positive">$450K</span>
              </div>
              <div class="metric">
                <span class="label">Outflow:</span>
                <span class="value negative">$320K</span>
              </div>
              <div class="metric">
                <span class="label">Net Flow:</span>
                <span class="value positive">$130K</span>
              </div>
            </div>
          </div>
          <button class="neon-button">View Report</button>
        </div>
      </div>
      
      <div class="data-table-section">
        <div class="table-container neon-glow">
          <h3>Recent Transactions</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024-12-15</td>
                <td>Software License Renewal</td>
                <td>Technology</td>
                <td class="negative">-$15,000</td>
                <td><span class="status-badge completed">Completed</span></td>
              </tr>
              <tr>
                <td>2024-12-14</td>
                <td>Client Payment - Project Alpha</td>
                <td>Revenue</td>
                <td class="positive">+$125,000</td>
                <td><span class="status-badge completed">Completed</span></td>
              </tr>
              <tr>
                <td>2024-12-13</td>
                <td>Office Supplies</td>
                <td>Operations</td>
                <td class="negative">-$2,500</td>
                <td><span class="status-badge pending">Pending</span></td>
              </tr>
              <tr>
                <td>2024-12-12</td>
                <td>Consulting Services</td>
                <td>Revenue</td>
                <td class="positive">+$85,000</td>
                <td><span class="status-badge completed">Completed</span></td>
              </tr>
              <tr>
                <td>2024-12-11</td>
                <td>Marketing Campaign</td>
                <td>Marketing</td>
                <td class="negative">-$8,750</td>
                <td><span class="status-badge processing">Processing</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .reports-container {
      padding: 2rem;
      min-height: 100vh;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
    }
    
    .reports-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .reports-header h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
      text-shadow: 0 0 20px #00ff88;
    }
    
    .subtitle {
      color: #888;
      font-size: 1.2rem;
    }
    
    .reports-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }
    
    .report-card {
      background: rgba(26, 26, 46, 0.8);
      border: 2px solid #8800ff;
      border-radius: 15px;
      padding: 2rem;
      transition: all 0.3s ease;
      box-shadow: 0 0 30px rgba(136, 0, 255, 0.3);
    }
    
    .report-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 50px rgba(136, 0, 255, 0.5);
    }
    
    .report-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }
    
    .report-header h3 {
      color: #fff;
      margin: 0;
      font-size: 1.3rem;
    }
    
    .status {
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: bold;
    }
    
    .status.active {
      background: rgba(0, 255, 136, 0.2);
      color: #00ff88;
      border: 1px solid #00ff88;
    }
    
    .status.pending {
      background: rgba(255, 136, 0, 0.2);
      color: #ff8800;
      border: 1px solid #ff8800;
    }
    
    .report-content p {
      color: #ccc;
      margin-bottom: 1.5rem;
    }
    
    .report-metrics {
      margin-bottom: 1.5rem;
    }
    
    .metric {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }
    
    .metric .label {
      color: #888;
    }
    
    .metric .value {
      font-weight: bold;
    }
    
    .metric .value.positive {
      color: #00ff88;
    }
    
    .metric .value.negative {
      color: #ff0088;
    }
    
    .neon-button {
      background: linear-gradient(45deg, #00ff88, #8800ff);
      border: none;
      color: #000;
      padding: 0.75rem 1.5rem;
      border-radius: 25px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
    }
    
    .neon-button:hover {
      transform: scale(1.05);
      box-shadow: 0 0 30px rgba(0, 255, 136, 0.8);
    }
    
    .data-table-section {
      margin-top: 3rem;
    }
    
    .table-container {
      background: rgba(26, 26, 46, 0.8);
      border: 2px solid #ff0088;
      border-radius: 15px;
      padding: 2rem;
      box-shadow: 0 0 30px rgba(255, 0, 136, 0.3);
    }
    
    .table-container h3 {
      color: #fff;
      margin-bottom: 1.5rem;
      text-align: center;
    }
    
    .data-table {
      width: 100%;
      border-collapse: collapse;
      color: #fff;
    }
    
    .data-table th {
      background: rgba(255, 0, 136, 0.2);
      padding: 1rem;
      text-align: left;
      border-bottom: 2px solid #ff0088;
      font-weight: bold;
    }
    
    .data-table td {
      padding: 1rem;
      border-bottom: 1px solid rgba(255, 0, 136, 0.3);
    }
    
    .data-table tr:hover {
      background: rgba(255, 0, 136, 0.1);
    }
    
    .status-badge {
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: bold;
    }
    
    .status-badge.completed {
      background: rgba(0, 255, 136, 0.2);
      color: #00ff88;
      border: 1px solid #00ff88;
    }
    
    .status-badge.pending {
      background: rgba(255, 136, 0, 0.2);
      color: #ff8800;
      border: 1px solid #ff8800;
    }
    
    .status-badge.processing {
      background: rgba(136, 0, 255, 0.2);
      color: #8800ff;
      border: 1px solid #8800ff;
    }
  `]
})
export class ReportsComponent {} 
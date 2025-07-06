import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h1 class="neon-text">Fiscal Data Dashboard</h1>
        <p class="subtitle">Real-time financial insights and analytics</p>
      </div>
      
      <div class="kpi-grid">
        <div class="kpi-card neon-glow">
          <div class="kpi-icon">💰</div>
          <div class="kpi-content">
            <h3>Total Revenue</h3>
            <div class="kpi-value">$2.4M</div>
            <div class="kpi-change positive">+12.5%</div>
          </div>
        </div>
        
        <div class="kpi-card neon-glow">
          <div class="kpi-icon">📊</div>
          <div class="kpi-content">
            <h3>Profit Margin</h3>
            <div class="kpi-value">34.2%</div>
            <div class="kpi-change positive">+2.1%</div>
          </div>
        </div>
        
        <div class="kpi-card neon-glow">
          <div class="kpi-icon">📈</div>
          <div class="kpi-content">
            <h3>Growth Rate</h3>
            <div class="kpi-value">18.7%</div>
            <div class="kpi-change positive">+5.3%</div>
          </div>
        </div>
        
        <div class="kpi-card neon-glow">
          <div class="kpi-icon">⚡</div>
          <div class="kpi-content">
            <h3>Efficiency</h3>
            <div class="kpi-value">87.3%</div>
            <div class="kpi-change negative">-1.2%</div>
          </div>
        </div>
      </div>
      
      <div class="charts-section">
        <div class="chart-container neon-glow">
          <h3>Revenue Trends</h3>
          <div class="chart-placeholder">
            <div class="chart-bars">
              <div class="bar" style="height: 60%"></div>
              <div class="bar" style="height: 80%"></div>
              <div class="bar" style="height: 45%"></div>
              <div class="bar" style="height: 90%"></div>
              <div class="bar" style="height: 75%"></div>
              <div class="bar" style="height: 95%"></div>
            </div>
          </div>
        </div>
        
        <div class="chart-container neon-glow">
          <h3>Expense Breakdown</h3>
          <div class="chart-placeholder">
            <div class="pie-chart">
              <div class="pie-segment" style="--angle: 40deg; --color: #00ff88;"></div>
              <div class="pie-segment" style="--angle: 25deg; --color: #ff0088;"></div>
              <div class="pie-segment" style="--angle: 20deg; --color: #8800ff;"></div>
              <div class="pie-segment" style="--angle: 15deg; --color: #ff8800;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 2rem;
      min-height: 100vh;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
    }
    
    .dashboard-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .dashboard-header h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
      text-shadow: 0 0 20px #00ff88;
    }
    
    .subtitle {
      color: #888;
      font-size: 1.2rem;
    }
    
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }
    
    .kpi-card {
      background: rgba(26, 26, 46, 0.8);
      border: 2px solid #00ff88;
      border-radius: 15px;
      padding: 2rem;
      display: flex;
      align-items: center;
      gap: 1.5rem;
      transition: all 0.3s ease;
      box-shadow: 0 0 30px rgba(0, 255, 136, 0.3);
    }
    
    .kpi-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 50px rgba(0, 255, 136, 0.5);
    }
    
    .kpi-icon {
      font-size: 3rem;
      filter: drop-shadow(0 0 10px #00ff88);
    }
    
    .kpi-content h3 {
      color: #fff;
      margin: 0 0 0.5rem 0;
      font-size: 1.1rem;
    }
    
    .kpi-value {
      font-size: 2rem;
      font-weight: bold;
      color: #00ff88;
      margin-bottom: 0.25rem;
    }
    
    .kpi-change {
      font-size: 0.9rem;
      font-weight: bold;
    }
    
    .kpi-change.positive {
      color: #00ff88;
    }
    
    .kpi-change.negative {
      color: #ff0088;
    }
    
    .charts-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
    }
    
    .chart-container {
      background: rgba(26, 26, 46, 0.8);
      border: 2px solid #8800ff;
      border-radius: 15px;
      padding: 2rem;
      box-shadow: 0 0 30px rgba(136, 0, 255, 0.3);
    }
    
    .chart-container h3 {
      color: #fff;
      margin-bottom: 1.5rem;
      text-align: center;
    }
    
    .chart-placeholder {
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .chart-bars {
      display: flex;
      align-items: end;
      gap: 1rem;
      height: 100%;
    }
    
    .bar {
      width: 40px;
      background: linear-gradient(to top, #00ff88, #8800ff);
      border-radius: 5px 5px 0 0;
      animation: pulse 2s infinite;
    }
    
    .pie-chart {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: conic-gradient(
        #00ff88 0deg 144deg,
        #ff0088 144deg 234deg,
        #8800ff 234deg 306deg,
        #ff8800 306deg 360deg
      );
      position: relative;
      animation: rotate 10s linear infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `]
})
export class DashboardComponent {} 
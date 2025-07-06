import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="analytics-container">
      <div class="analytics-header">
        <h1 class="neon-text">Advanced Analytics</h1>
        <p class="subtitle">Deep insights and predictive analysis</p>
      </div>
      
      <div class="analytics-grid">
        <div class="analytics-card neon-glow">
          <h3>📊 Performance Metrics</h3>
          <div class="metric-chart">
            <div class="chart-line">
              <div class="line-segment" style="--height: 60%; --color: #00ff88;"></div>
              <div class="line-segment" style="--height: 75%; --color: #00ff88;"></div>
              <div class="line-segment" style="--height: 45%; --color: #ff0088;"></div>
              <div class="line-segment" style="--height: 85%; --color: #00ff88;"></div>
              <div class="line-segment" style="--height: 90%; --color: #00ff88;"></div>
              <div class="line-segment" style="--height: 95%; --color: #8800ff;"></div>
            </div>
          </div>
          <div class="insights">
            <div class="insight positive">
              <span class="icon">📈</span>
              <span>Strong upward trend detected</span>
            </div>
          </div>
        </div>
        
        <div class="analytics-card neon-glow">
          <h3>🎯 Predictive Analysis</h3>
          <div class="prediction-chart">
            <div class="prediction-line">
              <div class="actual" style="--height: 70%;"></div>
              <div class="forecast" style="--height: 85%;"></div>
            </div>
          </div>
          <div class="insights">
            <div class="insight positive">
              <span class="icon">🔮</span>
              <span>Q1 2025: +15% projected growth</span>
            </div>
          </div>
        </div>
        
        <div class="analytics-card neon-glow">
          <h3>🌍 Market Analysis</h3>
          <div class="market-chart">
            <div class="market-segments">
              <div class="segment" style="--size: 40%; --color: #00ff88;">
                <span class="label">Tech</span>
              </div>
              <div class="segment" style="--size: 25%; --color: #ff0088;">
                <span class="label">Finance</span>
              </div>
              <div class="segment" style="--size: 20%; --color: #8800ff;">
                <span class="label">Healthcare</span>
              </div>
              <div class="segment" style="--size: 15%; --color: #ff8800;">
                <span class="label">Other</span>
              </div>
            </div>
          </div>
          <div class="insights">
            <div class="insight neutral">
              <span class="icon">📊</span>
              <span>Market diversification stable</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="insights-section">
        <div class="insights-container neon-glow">
          <h3>AI-Powered Insights</h3>
          <div class="insights-grid">
            <div class="insight-card">
              <div class="insight-header">
                <span class="icon">🤖</span>
                <span class="title">Revenue Optimization</span>
              </div>
              <p>AI analysis suggests 23% revenue increase potential through pricing optimization and market expansion strategies.</p>
              <div class="confidence">Confidence: 94%</div>
            </div>
            
            <div class="insight-card">
              <div class="insight-header">
                <span class="icon">⚡</span>
                <span class="title">Cost Reduction</span>
              </div>
              <p>Identified $150K annual savings opportunity through process automation and vendor consolidation.</p>
              <div class="confidence">Confidence: 87%</div>
            </div>
            
            <div class="insight-card">
              <div class="insight-header">
                <span class="icon">🎯</span>
                <span class="title">Risk Assessment</span>
              </div>
              <p>Low risk profile maintained with 12% volatility reduction through portfolio diversification.</p>
              <div class="confidence">Confidence: 91%</div>
            </div>
            
            <div class="insight-card">
              <div class="insight-header">
                <span class="icon">🚀</span>
                <span class="title">Growth Opportunities</span>
              </div>
              <p>3 new market segments identified with $2.1M revenue potential over next 18 months.</p>
              <div class="confidence">Confidence: 89%</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="real-time-section">
        <div class="real-time-container neon-glow">
          <h3>Real-Time Data Stream</h3>
          <div class="data-stream">
            <div class="stream-item">
              <span class="timestamp">14:32:15</span>
              <span class="event">Transaction processed: $45,000</span>
              <span class="status success">✓</span>
            </div>
            <div class="stream-item">
              <span class="timestamp">14:31:42</span>
              <span class="event">Market data updated</span>
              <span class="status info">ℹ</span>
            </div>
            <div class="stream-item">
              <span class="timestamp">14:31:18</span>
              <span class="event">Risk alert: Portfolio rebalancing needed</span>
              <span class="status warning">⚠</span>
            </div>
            <div class="stream-item">
              <span class="timestamp">14:30:55</span>
              <span class="event">AI model retrained successfully</span>
              <span class="status success">✓</span>
            </div>
            <div class="stream-item">
              <span class="timestamp">14:30:23</span>
              <span class="event">New client onboarded</span>
              <span class="status success">✓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .analytics-container {
      padding: 2rem;
      min-height: 100vh;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
    }
    
    .analytics-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .analytics-header h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
      text-shadow: 0 0 20px #00ff88;
    }
    
    .subtitle {
      color: #888;
      font-size: 1.2rem;
    }
    
    .analytics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }
    
    .analytics-card {
      background: rgba(26, 26, 46, 0.8);
      border: 2px solid #00ff88;
      border-radius: 15px;
      padding: 2rem;
      transition: all 0.3s ease;
      box-shadow: 0 0 30px rgba(0, 255, 136, 0.3);
    }
    
    .analytics-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 50px rgba(0, 255, 136, 0.5);
    }
    
    .analytics-card h3 {
      color: #fff;
      margin-bottom: 1.5rem;
      text-align: center;
    }
    
    .metric-chart, .prediction-chart, .market-chart {
      height: 150px;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .chart-line {
      display: flex;
      align-items: end;
      gap: 1rem;
      height: 100%;
    }
    
    .line-segment {
      width: 30px;
      background: var(--color);
      border-radius: 5px 5px 0 0;
      height: var(--height);
      animation: pulse 2s infinite;
    }
    
    .prediction-line {
      display: flex;
      align-items: end;
      gap: 1rem;
      height: 100%;
    }
    
    .actual {
      width: 30px;
      background: #00ff88;
      border-radius: 5px 5px 0 0;
      height: var(--height);
    }
    
    .forecast {
      width: 30px;
      background: #8800ff;
      border-radius: 5px 5px 0 0;
      height: var(--height);
      opacity: 0.7;
    }
    
    .market-segments {
      display: flex;
      gap: 0.5rem;
      height: 100%;
    }
    
    .segment {
      background: var(--color);
      border-radius: 5px;
      width: var(--size);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    
    .segment .label {
      color: #000;
      font-weight: bold;
      font-size: 0.8rem;
    }
    
    .insights {
      margin-top: 1rem;
    }
    
    .insight {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
    }
    
    .insight.positive {
      color: #00ff88;
    }
    
    .insight.neutral {
      color: #888;
    }
    
    .insights-section {
      margin-bottom: 3rem;
    }
    
    .insights-container {
      background: rgba(26, 26, 46, 0.8);
      border: 2px solid #8800ff;
      border-radius: 15px;
      padding: 2rem;
      box-shadow: 0 0 30px rgba(136, 0, 255, 0.3);
    }
    
    .insights-container h3 {
      color: #fff;
      margin-bottom: 2rem;
      text-align: center;
    }
    
    .insights-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    
    .insight-card {
      background: rgba(136, 0, 255, 0.1);
      border: 1px solid #8800ff;
      border-radius: 10px;
      padding: 1.5rem;
      transition: all 0.3s ease;
    }
    
    .insight-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 20px rgba(136, 0, 255, 0.3);
    }
    
    .insight-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    
    .insight-header .icon {
      font-size: 1.2rem;
    }
    
    .insight-header .title {
      color: #fff;
      font-weight: bold;
    }
    
    .insight-card p {
      color: #ccc;
      margin-bottom: 1rem;
      line-height: 1.5;
    }
    
    .confidence {
      color: #00ff88;
      font-size: 0.9rem;
      font-weight: bold;
    }
    
    .real-time-section {
      margin-top: 3rem;
    }
    
    .real-time-container {
      background: rgba(26, 26, 46, 0.8);
      border: 2px solid #ff0088;
      border-radius: 15px;
      padding: 2rem;
      box-shadow: 0 0 30px rgba(255, 0, 136, 0.3);
    }
    
    .real-time-container h3 {
      color: #fff;
      margin-bottom: 1.5rem;
      text-align: center;
    }
    
    .data-stream {
      max-height: 300px;
      overflow-y: auto;
    }
    
    .stream-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem;
      border-bottom: 1px solid rgba(255, 0, 136, 0.3);
      animation: slideIn 0.5s ease;
    }
    
    .stream-item:last-child {
      border-bottom: none;
    }
    
    .timestamp {
      color: #888;
      font-size: 0.8rem;
      min-width: 80px;
    }
    
    .event {
      color: #fff;
      flex: 1;
    }
    
    .status {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      font-weight: bold;
    }
    
    .status.success {
      background: rgba(0, 255, 136, 0.2);
      color: #00ff88;
      border: 1px solid #00ff88;
    }
    
    .status.warning {
      background: rgba(255, 136, 0, 0.2);
      color: #ff8800;
      border: 1px solid #ff8800;
    }
    
    .status.info {
      background: rgba(136, 0, 255, 0.2);
      color: #8800ff;
      border: 1px solid #8800ff;
    }
    
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
  `]
})
export class AnalyticsComponent {} 
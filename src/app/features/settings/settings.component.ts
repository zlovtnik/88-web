import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="settings-container">
      <div class="settings-header">
        <h1 class="neon-text">System Settings</h1>
        <p class="subtitle">Configure your fiscal data warehouse preferences</p>
      </div>
      
      <div class="settings-grid">
        <div class="settings-section neon-glow">
          <h3>🎨 Theme & Display</h3>
          <div class="setting-item">
            <label>Theme Mode</label>
            <select class="neon-select">
              <option>Cyberpunk Neon (Current)</option>
              <option>Dark Professional</option>
              <option>Light Modern</option>
            </select>
          </div>
          <div class="setting-item">
            <label>Animation Speed</label>
            <div class="slider-container">
              <input type="range" min="0" max="100" value="75" class="neon-slider">
              <span class="slider-value">75%</span>
            </div>
          </div>
          <div class="setting-item">
            <label>Glow Intensity</label>
            <div class="slider-container">
              <input type="range" min="0" max="100" value="60" class="neon-slider">
              <span class="slider-value">60%</span>
            </div>
          </div>
        </div>
        
        <div class="settings-section neon-glow">
          <h3>📊 Data Preferences</h3>
          <div class="setting-item">
            <label>Currency Format</label>
            <select class="neon-select">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
              <option>JPY (¥)</option>
            </select>
          </div>
          <div class="setting-item">
            <label>Date Format</label>
            <select class="neon-select">
              <option>MM/DD/YYYY</option>
              <option>DD/MM/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>
          <div class="setting-item">
            <label>Auto-refresh Interval</label>
            <select class="neon-select">
              <option>30 seconds</option>
              <option>1 minute</option>
              <option>5 minutes</option>
              <option>Manual</option>
            </select>
          </div>
        </div>
        
        <div class="settings-section neon-glow">
          <h3>🔔 Notifications</h3>
          <div class="setting-item">
            <label class="checkbox-label">
              <input type="checkbox" checked class="neon-checkbox">
              <span class="checkmark"></span>
              Real-time alerts
            </label>
          </div>
          <div class="setting-item">
            <label class="checkbox-label">
              <input type="checkbox" checked class="neon-checkbox">
              <span class="checkmark"></span>
              Email notifications
            </label>
          </div>
          <div class="setting-item">
            <label class="checkbox-label">
              <input type="checkbox" class="neon-checkbox">
              <span class="checkmark"></span>
              SMS alerts
            </label>
          </div>
          <div class="setting-item">
            <label class="checkbox-label">
              <input type="checkbox" checked class="neon-checkbox">
              <span class="checkmark"></span>
              Risk warnings
            </label>
          </div>
        </div>
        
        <div class="settings-section neon-glow">
          <h3>🔐 Security</h3>
          <div class="setting-item">
            <label>Session Timeout</label>
            <select class="neon-select">
              <option>15 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>Never</option>
            </select>
          </div>
          <div class="setting-item">
            <label class="checkbox-label">
              <input type="checkbox" checked class="neon-checkbox">
              <span class="checkmark"></span>
              Two-factor authentication
            </label>
          </div>
          <div class="setting-item">
            <label class="checkbox-label">
              <input type="checkbox" checked class="neon-checkbox">
              <span class="checkmark"></span>
              Audit logging
            </label>
          </div>
        </div>
      </div>
      
      <div class="advanced-settings">
        <div class="advanced-container neon-glow">
          <h3>⚙️ Advanced Configuration</h3>
          <div class="advanced-grid">
            <div class="advanced-item">
              <h4>API Configuration</h4>
              <div class="setting-item">
                <label>Base URL</label>
                <input type="text" value="https://api.fiscalwarehouse.com/v1" class="neon-input">
              </div>
              <div class="setting-item">
                <label>Timeout (seconds)</label>
                <input type="number" value="30" class="neon-input">
              </div>
            </div>
            
            <div class="advanced-item">
              <h4>Database Settings</h4>
              <div class="setting-item">
                <label>Connection Pool Size</label>
                <input type="number" value="10" class="neon-input">
              </div>
              <div class="setting-item">
                <label>Query Timeout</label>
                <input type="number" value="60" class="neon-input">
              </div>
            </div>
            
            <div class="advanced-item">
              <h4>Performance</h4>
              <div class="setting-item">
                <label>Cache Duration</label>
                <select class="neon-select">
                  <option>5 minutes</option>
                  <option>15 minutes</option>
                  <option>1 hour</option>
                </select>
              </div>
              <div class="setting-item">
                <label class="checkbox-label">
                  <input type="checkbox" checked class="neon-checkbox">
                  <span class="checkmark"></span>
                  Enable data compression
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="actions-section">
        <button class="neon-button primary">💾 Save Settings</button>
        <button class="neon-button secondary">🔄 Reset to Default</button>
        <button class="neon-button danger">🗑️ Clear All Data</button>
      </div>
    </div>
  `,
  styles: [`
    .settings-container {
      padding: 2rem;
      min-height: 100vh;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
    }
    
    .settings-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .settings-header h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
      text-shadow: 0 0 20px #00ff88;
    }
    
    .subtitle {
      color: #888;
      font-size: 1.2rem;
    }
    
    .settings-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }
    
    .settings-section {
      background: rgba(26, 26, 46, 0.8);
      border: 2px solid #00ff88;
      border-radius: 15px;
      padding: 2rem;
      transition: all 0.3s ease;
      box-shadow: 0 0 30px rgba(0, 255, 136, 0.3);
    }
    
    .settings-section:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 50px rgba(0, 255, 136, 0.5);
    }
    
    .settings-section h3 {
      color: #fff;
      margin-bottom: 1.5rem;
      text-align: center;
    }
    
    .setting-item {
      margin-bottom: 1.5rem;
    }
    
    .setting-item label {
      display: block;
      color: #ccc;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    
    .neon-select {
      width: 100%;
      background: rgba(0, 255, 136, 0.1);
      border: 2px solid #00ff88;
      border-radius: 8px;
      padding: 0.75rem;
      color: #fff;
      font-size: 1rem;
      transition: all 0.3s ease;
    }
    
    .neon-select:focus {
      outline: none;
      box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
    }
    
    .neon-select option {
      background: #1a1a2e;
      color: #fff;
    }
    
    .slider-container {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .neon-slider {
      flex: 1;
      height: 6px;
      background: rgba(0, 255, 136, 0.2);
      border-radius: 3px;
      outline: none;
      -webkit-appearance: none;
    }
    
    .neon-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      background: #00ff88;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
    }
    
    .slider-value {
      color: #00ff88;
      font-weight: bold;
      min-width: 40px;
    }
    
    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
      color: #ccc;
    }
    
    .neon-checkbox {
      display: none;
    }
    
    .checkmark {
      width: 20px;
      height: 20px;
      border: 2px solid #00ff88;
      border-radius: 4px;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .neon-checkbox:checked + .checkmark {
      background: #00ff88;
      box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
    }
    
    .neon-checkbox:checked + .checkmark::after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #000;
      font-weight: bold;
    }
    
    .advanced-settings {
      margin-bottom: 3rem;
    }
    
    .advanced-container {
      background: rgba(26, 26, 46, 0.8);
      border: 2px solid #8800ff;
      border-radius: 15px;
      padding: 2rem;
      box-shadow: 0 0 30px rgba(136, 0, 255, 0.3);
    }
    
    .advanced-container h3 {
      color: #fff;
      margin-bottom: 2rem;
      text-align: center;
    }
    
    .advanced-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .advanced-item h4 {
      color: #8800ff;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }
    
    .neon-input {
      width: 100%;
      background: rgba(136, 0, 255, 0.1);
      border: 2px solid #8800ff;
      border-radius: 8px;
      padding: 0.75rem;
      color: #fff;
      font-size: 1rem;
      transition: all 0.3s ease;
    }
    
    .neon-input:focus {
      outline: none;
      box-shadow: 0 0 20px rgba(136, 0, 255, 0.5);
    }
    
    .actions-section {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .neon-button {
      padding: 1rem 2rem;
      border: none;
      border-radius: 25px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 1rem;
    }
    
    .neon-button.primary {
      background: linear-gradient(45deg, #00ff88, #8800ff);
      color: #000;
      box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
    }
    
    .neon-button.secondary {
      background: linear-gradient(45deg, #8800ff, #ff0088);
      color: #fff;
      box-shadow: 0 0 20px rgba(136, 0, 255, 0.5);
    }
    
    .neon-button.danger {
      background: linear-gradient(45deg, #ff0088, #ff8800);
      color: #fff;
      box-shadow: 0 0 20px rgba(255, 0, 136, 0.5);
    }
    
    .neon-button:hover {
      transform: scale(1.05);
      box-shadow: 0 0 30px rgba(0, 255, 136, 0.8);
    }
    
    .neon-button.primary:hover {
      box-shadow: 0 0 30px rgba(0, 255, 136, 0.8);
    }
    
    .neon-button.secondary:hover {
      box-shadow: 0 0 30px rgba(136, 0, 255, 0.8);
    }
    
    .neon-button.danger:hover {
      box-shadow: 0 0 30px rgba(255, 0, 136, 0.8);
    }
  `]
})
export class SettingsComponent {} 
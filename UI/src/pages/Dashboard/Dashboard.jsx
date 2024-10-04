import React from 'react';
import './overview.css';

const Overview = () => {
  return (
    <div className='overview'>
      {/* Monitoring Overview */}
      <div className='overview-section'>
        <h2>Monitoring Overview</h2>
        <div className='overview-stats'>
          <div className='stat'>
            <h3>Total Monitored Athletes</h3>
            <p>256</p>
          </div>
          <div className='stat'>
            <h3>Ongoing Competitions</h3>
            <p>12</p>
          </div>
          <div className='stat'>
            <h3>Monitored Events</h3>
            <p>34</p>
          </div>
        </div>
      </div>

      {/* Suspicious Activity Alerts */}
      <div className='overview-section'>
        <h2>Suspicious Activity Alerts</h2>
        <div className='overview-stats'>
          <div className='stat'>
            <h3>Total Alerts</h3>
            <p>45</p>
          </div>
          <div className='stat'>
            <h3>High-Risk Alerts</h3>
            <p>10</p>
          </div>
          <div className='stat'>
            <h3>Medium-Risk Alerts</h3>
            <p>25</p>
          </div>
          <div className='stat'>
            <h3>Low-Risk Alerts</h3>
            <p>10</p>
          </div>
        </div>
      </div>

      {/* Recent Investigations */}
      <div className='overview-section'>
        <h2>Recent Investigations</h2>
        <div className='overview-stats'>
          <div className='stat'>
            <h3>Open Investigations</h3>
            <p>5</p>
          </div>
          <div className='stat'>
            <h3>Closed Investigations (Last 30 Days)</h3>
            <p>3</p>
          </div>
          <div className='stat'>
            <h3>Pending Reports</h3>
            <p>2</p>
          </div>
        </div>
      </div>

      {/* Key Performance Indicators (KPIs) */}
      <div className='overview-section'>
        <h2>System Performance</h2>
        <div className='overview-stats'>
          <div className='stat'>
            <h3>Anomaly Detection Accuracy</h3>
            <p>92%</p>
          </div>
          <div className='stat'>
            <h3>False Positive Rate</h3>
            <p>3%</p>
          </div>
          <div className='stat'>
            <h3>System Uptime</h3>
            <p>99.8%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;

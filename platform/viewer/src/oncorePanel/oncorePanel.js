import React, { Component } from 'react';
import './OncorePanel.css';

class OncorePanel extends Component {
  render() {
    return (
      <div className="oncore-panel">
        <h3>Oncore Panel</h3>
        <div>
          <button className="render-roi-button">Show Rois</button>
        </div>
      </div>
    )
  }
}

export default OncorePanel;
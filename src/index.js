import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <div>
        <div className="search">
        <input
            type="text"
            placeholder="Search card..."
            onChange={this.handleSearch} />
        </div>

        <div className="guide">Hover over card to see cards golden version and characteristics</div>
        <div className="cards-grid">
        <App className="grid-items" />
        </div>
    </div>,
    document.getElementById('root'));
    registerServiceWorker();

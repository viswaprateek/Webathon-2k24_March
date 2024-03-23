import React from 'react';
import { Link } from 'react-router-dom';
import './Charts.css'; // Import your CSS file
import Stocks from './Stocks.js';
const Chart= () => {
  return (
    <div className="financial-charts">
      <header>
        <h1>Financial Charts</h1>
        <p>Explore various financial topics with interactive charts</p>
      </header>
      <div className="chart-container">
        <div className="chart-card">
          <h2>Credit</h2>
          <p>View credit-related financial charts</p>
          <Link to="/credit">Explore</Link>
        </div>
        <div className="chart-card">
          <h2>Debit</h2>
          <p>View debit-related financial charts</p>
          <Link to="/debit">Explore</Link>
        </div>
        <div className="chart-card">
          <h2>Budgeting</h2>
          <p>View budgeting-related financial charts</p>
          <Link to="/budgeting">Explore</Link>
        </div>
        <div className="chart-card">
          <h2>Improving</h2>
          <p>View charts on improving financial habits</p>
          <Link to="/improving">Explore</Link>
        </div>
        <div className="chart-card">
          <h2>Saving</h2>
          <p>View charts related to saving money</p>
          <Link to="/saving">Explore</Link>
        </div>
        <div className="chart-card">
          <h2>Borrowing and Repaying</h2>
          <p>View charts on borrowing and repaying loans</p>
          <Link to="/borrowing-repaying">Explore</Link>
        </div>
        <div className="chart-card">
          <h2>Investing</h2>
          <p>View charts related to investing money</p>
          <Link to="/investing">Explore</Link>
        </div>
        <div className="chart-card">
          <h2>Stocks</h2>
          <p>View charts on stock market trends</p>
          <Link to="/stocks">Explore</Link>
        </div>
        <div className="chart-card">
          <h2>Trades</h2>
          <p>View charts on trading activities</p>
          <Link to="/trades">Explore</Link>
        </div>
        <div className="chart-card">
          <h2>Fixed Deposits</h2>
          <p>View charts related to fixed deposit investments</p>
          <Link to="/fixed-deposits">Explore</Link>
        </div>
      </div>
    </div>
  );
};

export default Chart;

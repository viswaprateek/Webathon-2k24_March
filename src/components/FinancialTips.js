import React, { useState } from 'react';
import './StockSimulator.css'; // Import your CSS file

const FinancialTips = () => {
  const [balance, setBalance] = useState(10000);
  const [shares, setShares] = useState(0);
  const [stockPrice, setStockPrice] = useState(50);
  const [transaction, setTransaction] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  const companies = [
    "Asian Paints Ltd",
    "Britannia Industries Ltd",
    "Cipla Ltd",
    "Eicher Motors Ltd",
    "Nestle India Ltd",
    "Grasim Industries Ltd",
    "Hero MotoCorp Ltd",
    "Hindalco Industries Ltd",
    "Hindustan Unilever Ltd",
    "ITC Ltd",
    "Larsen & Toubro Ltd",
    "Mahindra & Mahindra Ltd",
    "Reliance Industries Ltd",
    "Tata Consumer Products Ltd",
    "Tata Motors Ltd",
    "Tata Steel Ltd",
    "Wipro Ltd",
    "Apollo Hospitals Enterprise Ltd",
    "Dr Reddys Laboratories Ltd",
    "Titan Company Ltd",
    "State Bank of India",
    "Bharat Petroleum Corporation Ltd",
    "Kotak Mahindra Bank Ltd"
  ];

  const handleBuyStock = () => {
    if (balance >= stockPrice) {
      const newBalance = balance - stockPrice;
      setBalance(newBalance);
      setShares(shares + 1);
      setTransaction(`Bought 1 share of ${selectedCompany}.`);
    } else {
      setTransaction('Insufficient balance to buy.');
    }
  };

  const handleSellStock = () => {
    if (shares > 0) {
      const newBalance = balance + stockPrice;
      setBalance(newBalance);
      setShares(shares - 1);
      setTransaction(`Sold 1 share of ${selectedCompany}.`);
    } else {
      setTransaction('No shares to sell.');
    }
  };

  return (
    <div className="stock-simulator">
      <header>
        <h1>Stock Simulator</h1>
        <p>Your Balance: ${balance}</p>
        <p>Shares Owned: {shares}</p>
        <p>Stock Price: ${stockPrice}</p>
        <p>{transaction}</p>
      </header>
      <div className="dropdown">
        <select onChange={(e) => setSelectedCompany(e.target.value)}>
          <option value="">Select a company</option>
          {companies.map(company => (
            <option key={company} value={company}>{company}</option>
          ))}
        </select>
      </div>
      <div className="buttons">
        <button onClick={handleBuyStock}>Buy Stock</button>
        <button onClick={handleSellStock}>Sell Stock</button>
      </div>
    </div>
  );
};

export default FinancialTips;

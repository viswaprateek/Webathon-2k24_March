import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to Financial Literacy Hub</h1>
        <p>Empowering students with financial knowledge</p>
      </header>
      <div className="card-container">
        <div className="card">
          <h2>Financial Charts</h2>
          <p>View interactive financial charts to understand trends and patterns.</p>
          <Link to="/charts">Explore</Link>
        </div>
        <div className="card">
          <h2>Financial Tips</h2>
          <p>Discover useful tips and tricks for managing your finances effectively.</p>
          <Link to="/tips">Learn More</Link>
        </div>
        <div className="card">
          <h2>Test Your Knowledge</h2>
          <p>Take quizzes to test your financial literacy and improve your skills.</p>
          <Link to="/quiz">Start Quiz</Link>
        </div>
        <div className="card">
          <h2>Educational Articles</h2>
          <p>Read articles on various financial topics to enhance your understanding.</p>
          <Link to="/articles">Read More</Link>
        </div>
      </div>
      <footer>
        <p>Ready to get started?</p>
        <Link to="/signup">Sign Up</Link>
      </footer>
    </div>
  );
};

export default HomePage;

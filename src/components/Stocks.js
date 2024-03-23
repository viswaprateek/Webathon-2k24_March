import React, { useState } from 'react';
import './Stocks.css'; // Import your CSS file

const Stocks = () => {
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What is the stock market?",
      options: [
        "A place to buy groceries",
        "A place where you can buy and sell shares of companies",
        "A park for exercising"
      ],
      correctAnswer: 1
    },
    {
      question: "What does 'NYSE' stand for?",
      options: [
        "New York Sports Exchange",
        "New York Stock Exchange",
        "National Youth Stock Exchange"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the difference between common stock and preferred stock?",
      options: [
        "Preferred stockholders have more voting rights",
        "Common stockholders have priority in dividend payments",
        "Preferred stockholders have priority in dividend payments and liquidation"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the role of a stockbroker?",
      options: [
        "To manage a company's finances",
        "To buy and sell stocks on behalf of clients",
        "To audit financial statements"
      ],
      correctAnswer: 1
    },
    {
      question: "What is a dividend?",
      options: [
        "A payment made by a company to its employees",
        "A portion of a company's profits distributed to shareholders",
        "A tax on stock transactions"
      ],
      correctAnswer: 1
    }
  ];

  const handleAnswer = (selectedOption) => {
    const updatedAnswers = [...quizAnswers, selectedOption];
    setQuizAnswers(updatedAnswers);

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="crazy-page">
      <header>
        <h1>Stocks</h1>
        <p>A stock, also known as equity, is a security that represents the ownership of a fraction of the issuing corporation. Units of stock are called "shares" which entitles the owner to a proportion of the corporation's assets and profits equal to how much stock they own. 

Stocks are bought and sold predominantly on stock exchanges and are the foundation of many individual investors' portfolios. Stock trades have to conform to government regulations meant to protect investors from fraudulent practices.</p>
      </header>
      <section className="information">
        <h2>Information</h2>
        <p>A stock, also known as equity, is a security that represents the ownership of a fraction of the issuing corporation. Units of stock are called "shares" which entitles the owner to a proportion of the corporation's assets and profits equal to how much stock they own. 

Stocks are bought and sold predominantly on stock exchanges and are the foundation of many individual investors' portfolios. Stock trades have to conform to government regulations meant to protect investors from fraudulent practices.</p>
      </section>
      <section className="case-study">
        <h2>Real-Life Case Study</h2>
        <p>
        Here's an example of a real-life case study involving stocks:

Case Study: Tesla Inc. (TSLA)

Overview:
Tesla Inc. is an American electric vehicle and clean energy company founded by Elon Musk in 2003. The company designs, manufactures, and sells electric vehicles, energy storage systems, and solar panels.

Background:
Tesla went public in 2010, offering shares at $17 per share. Since then, Tesla's stock price has experienced significant volatility, driven by factors such as production challenges, financial performance, technological advancements, and market sentiment.

Key Events:

Innovative Product Releases: Tesla gained attention and investor confidence through the release of innovative products such as the Model S, Model 3, Model X, and Model Y electric vehicles. These releases showcased Tesla's ability to disrupt the automotive industry and drive demand for sustainable transportation solutions.

Production Challenges: Tesla faced production challenges, including delays in meeting production targets and quality control issues. These challenges led to concerns among investors about the company's ability to scale production and deliver vehicles efficiently.

Financial Performance: Tesla's financial performance has been a subject of scrutiny and speculation. The company has experienced periods of losses and profitability, with fluctuations in revenue, gross margins, and operating expenses influencing investor sentiment and stock price movements.

Market Sentiment and Analyst Coverage: Tesla's stock price has been influenced by market sentiment and analyst coverage. Positive news, such as record vehicle deliveries, technological breakthroughs, or favorable analyst reports, often led to price surges, while negative news, regulatory concerns, or analyst downgrades could result in price declines.

Elon Musk's Influence: Elon Musk, Tesla's CEO, is known for his active presence on social media and bold statements, which have sometimes impacted Tesla's stock price. Musk's tweets about product updates, future plans, or controversial statements have triggered market reactions, causing volatility in Tesla's stock price.

Outcome:
Despite facing challenges and controversies, Tesla's stock has experienced remarkable growth over the years. The company's market capitalization has surged, making it one of the most valuable automakers globally. Tesla's stock price has become a focal point for investors, traders, and analysts, reflecting both the opportunities and risks associated with investing in innovative and disruptive companies.
        </p>
      </section>
      <section className="quiz">
        <h2>Quiz</h2>
        {currentQuestion < questions.length ? (
          <>
            <p>Question {currentQuestion + 1}: {questions[currentQuestion].question}</p>
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index}>
                  <button onClick={() => handleAnswer(index)}>{option}</button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>Quiz completed! Your score: {score}/{questions.length}</p>
        )}
      </section>
    </div>
  );
};

export default Stocks;

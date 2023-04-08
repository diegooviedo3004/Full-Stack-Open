import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const Header = () => <h1>Give feedback</h1>;

const StaticsLine = ({value, text}) => <>{text} {value}<br/></>

const Statistics = ({ good, neutral, bad }) => {
  const totalVotes = good + neutral + bad;
  const average = totalVotes > 0 ? (good * 1 + bad * -1) / totalVotes : 0;
  const positivePercentage = totalVotes > 0 ? (good / totalVotes) * 100 : 0;

  return (
    <>
      <h1>Statistics</h1>
      {totalVotes > 0 ? (
        <>
          <StaticsLine text={"good"} value={good}/>
          <StaticsLine text={"neutral"} value={neutral}/>
          <StaticsLine text={"bad"} value={bad}/>
          <StaticsLine text={"all"} value={totalVotes}/>
          <StaticsLine text={"average"} value={average}/>
          <StaticsLine text={"positive"} value={positivePercentage}/>
        </>
      ) : (
        <>No feedback given</>
      )}
    </>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleGoodClick = () =>
    setFeedback({ ...feedback, good: feedback.good + 1 });
  const handleNeutralClick = () =>
    setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
  const handleBadClick = () =>
    setFeedback({ ...feedback, bad: feedback.bad + 1 });

  return (
    <>
      <Header />
      <Button handleClick={handleGoodClick} text={"good"} />
      <Button handleClick={handleNeutralClick} text={"neutral"} />
      <Button handleClick={handleBadClick} text={"bad"} />
      <Statistics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'))
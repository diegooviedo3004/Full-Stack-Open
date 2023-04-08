import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const Header = () => <h1>Give feedback</h1>

const Content = ({ good, neutral, bad }) => {
  return (
    <>
      <h1>Statistics</h1>
      good {good} <br />
      neutral {neutral}<br />
      bad {bad}<br />
    </>
  )
}

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const sumGood = () => setFeedback({ ...feedback, good: feedback.good + 1 });
  const sumNeutral = () => setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
  const sumBad = () => setFeedback({ ...feedback, bad: feedback.bad + 1 });

  return (
    <>
      <Header />
      <Button text={"good"} handleClick={sumGood} />
      <Button text={"neutral"} handleClick={sumNeutral} />
      <Button text={"bad"} handleClick={sumBad} />
      <Content good={feedback.good} bad={feedback.bad} neutral={feedback.neutral} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'))
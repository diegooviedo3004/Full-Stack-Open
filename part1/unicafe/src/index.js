import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const Header = () => <h1>Give feedback</h1>

const Statistics = ({ good, neutral, bad }) => {

  let average = 0
  const totalVotes = good + neutral + bad


  if (totalVotes > 0) {
    console.log(good * 1 + bad * -1 / totalVotes)
    average = ((good * 1) + (neutral * 0) + (bad * -1)) / totalVotes
  }

  return (
    <>
      <h1>Statistics</h1>
      {totalVotes > 0 ? (
        <>
        good {good} <br />
        neutral {neutral}<br />
        bad {bad}<br />
        all {totalVotes} <br />
        average {average}<br />
        positive {(good / totalVotes) * 100}%
        </>
      ) : (
        <>No feedback given</>
      )}
      
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
      <Statistics good={feedback.good} bad={feedback.bad} neutral={feedback.neutral} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'))
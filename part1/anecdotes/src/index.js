import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const App = (props) => {

  const [selected, setSelected] = useState(0);

  const initialState = {};
  for (let i = 0; i < props.anecdotes.length; i++) {
    initialState[i] = 0;
  }

  const [points, setPoints] = useState(initialState);

  const handleNextAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  }

  const handleVote = (index) => {
    const newArray = { ...points, [index]: points[index] + 1 };
    setPoints(newArray);
  }

  let maxIndex = 0;
  Object.keys(points).forEach((key) => {
    if (points[key] > points[maxIndex]) {
      maxIndex = key;
    }
  });

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]} <br />
      has {points[selected]} votes <br />
      <button onClick={() => handleVote(selected)}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[maxIndex]} <br />
      has {points[maxIndex]} votes <br />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))
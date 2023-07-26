import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [userInput, setUserInput] = useState('');
  const [submitValue, setSubmitValue] = useState('');

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    setSubmitValue(userInput);
    setUserInput('');
  };
  return (
    <div>
      <h1>User Input</h1>
      <div>
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          placeholder="enter your text"
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <div>Submmited Value: {submitValue}</div>
    </div>
  );
}

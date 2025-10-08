import React, { useState } from "react";
import "./App.css";

function App() {
  // Counter state
  const [count, setCount] = useState(0);

  // Name state
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");

  // Counter functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // Increment Five using functional update
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div className="app">
      <h1>Counter App</h1>
      
      {/* Counter Section */}
      <h2>Count: {count}</h2>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={incrementFive}>Increment Five</button>
      </div>

      {/* Input Section */}
      <h2>Enter Your Name</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />

      {/* Display Section */}
      <h3>
        Full Name: {firstName} {surname}
      </h3>
    </div>
  );
}

export default App;

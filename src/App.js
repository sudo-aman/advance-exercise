// FSMComponent.js
import React, { useState } from "react";

// Define the Finite State Automaton class
class FiniteStateAutomaton {
  constructor() {
    // Define the initial configuration of the FSM
    this.states = ["S0", "S1", "S2"];
    this.alphabet = ["0", "1"];
    this.initialState = "S0";
    this.acceptingStates = ["S0", "S1", "S2"];
    this.transitions = {
      S0: { 0: "S0", 1: "S1" },
      S1: { 0: "S2", 1: "S0" },
      S2: { 0: "S1", 1: "S2" },
    };
  }

  // Method to check if a given string is accepted by the FSM
  acceptsString(inputString) {
    let currentState = this.initialState;

    // Traverse the input string and update the current state based on transitions
    for (let symbol of inputString) {
      if (!this.alphabet.includes(symbol)) {
        return false; // Reject if the input contains symbols not in the alphabet
      }
      currentState = this.transitions[currentState][symbol];
    }

    // Accept if the final state is one of the accepting states
    return this.acceptingStates.includes(currentState);
  }
}

// Define the FSMComponent
function App() {
  const [inputString, setInputString] = useState("");
  const [result, setResult] = useState("");

  // Create an instance of the FiniteStateAutomaton class
  const modThreeFSM = new FiniteStateAutomaton();

  // Handler for input change
  const handleInputChange = (event) => {
    setInputString(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const isAccepted = modThreeFSM.acceptsString(inputString);
    setResult(isAccepted ? "Accepted" : "Rejected");
  };

  return (
    <div>
      <h2>Mod-Three Finite State Automaton</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Input String:
          <input type="text" value={inputString} onChange={handleInputChange} />
        </label>
        <button type="submit">Test String</button>
      </form>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;

import { useState } from "react";
import createFiniteAutomaton from "../utility/FiniteAutomaton";
import ComputeButton from "./Button/ComputeButton";
import Text from "./InputControls/Text";

function ModuloThreeFSM() {
    const [inputString, setInputString] = useState('');

    const transitionTable = {
        S0: { '0': 'S0', '1': 'S1' },
        S1: { '0': 'S2', '1': 'S0' },
        S2: { '0': 'S1', '1': 'S2' }
    }

    const [state, setState] = useState('S0');

    const modThreeFSM = createFiniteAutomaton(transitionTable);


    const handleCompute = () => {
        const trimmedInput = inputString.trim();
        const finalState = modThreeFSM.processInput(trimmedInput, 'S0');
        setState(finalState);
    };

    return (
        <div>
            <h2>Modulo Three FSM</h2>
            <label>
                Enter binary string:
                <Text value={inputString} onChange={(e) => setInputString(e.target.value)} />
            </label>
            <ComputeButton onClick={handleCompute} buttonName={"Compute Remainder"} />
            <p>Output: {state}</p>
        </div>
    );
}

export default ModuloThreeFSM;




// class FiniteAutomaton {
//     constructor(states, alphabet, initialState, finalStates, transitionFunction) {
//         this.states = states;
//         this.alphabet = alphabet;
//         this.initialState = initialState;
//         this.finalStates = finalStates;
//         this.transitionFunction = transitionFunction;
//     }

//     // Method to process the input string
//     processInput(inputString) {
//         let currentState = this.initialState;

//         for (let i = 0; i < inputString.length; i++) {
//             const symbol = inputString[i];
//             currentState = this.transitionFunction(currentState, symbol);
//         }

//         return currentState;
//     }

//     // Method to check if a state is final
//     isFinalState(state) {
//         return this.finalStates.includes(state);
//     }
// }

// // Example: Modulo Three FSM
// const modThreeFSM = new FiniteAutomaton(
//     ['S0', 'S1', 'S2'],
//     ['0', '1'],
//     'S0',
//     ['S0', 'S1', 'S2'],
//     function (currentState, symbol) {
//         switch (currentState) {
//             case 'S0':
//                 return symbol === '0' ? 'S0' : 'S1';
//             case 'S1':
//                 return symbol === '0' ? 'S2' : 'S0';
//             case 'S2':
//                 return symbol === '0' ? 'S1' : 'S2';
//             default:
//                 throw new Error('Invalid state');
//         }
//     }
// );

// // Test cases
// const inputString1 = '110';
// let finalState1 = modThreeFSM.processInput(inputString1);
// console.log("Input:", inputString1, "Final State:", finalState1); // Expected output: S0

// const inputString2 = '1010';
// let finalState2 = modThreeFSM.processInput(inputString2);
// console.log("Input:", inputString2, "Final State:", finalState2); // Expected output: S1

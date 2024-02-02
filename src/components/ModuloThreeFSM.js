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
        if (finalState) {
            setState(finalState);
        }
    };

    const handleChange = (value) => {
        setInputString(value)
    }
    return (
        <div>
            <h2>Modulo Three FSM</h2>
            <label>
                Enter binary string:
                <Text value={inputString} onChange={handleChange} />
            </label>
            <ComputeButton onClick={handleCompute} buttonName={"Compute Remainder"} />
            <p>State: {state}</p>
            <p>Output: {state && state.charAt(1)}</p>
        </div>
    );
}

export default ModuloThreeFSM;
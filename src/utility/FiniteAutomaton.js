export default function createFiniteAutomaton(transitionTable) {
    return {
        processInput: (inputString, initialState) => {
            let currentState = initialState;

            for (let i = 0; i < inputString.length; i++) {
                const symbol = inputString[i];
                currentState = transitionTable[currentState][symbol];
            }

            return currentState;
        },
        isFinalState: (state, finalStates) => finalStates.includes(state)
    };
}

import createFiniteAutomaton from '../../utility/FiniteAutomaton';

describe('createFiniteAutomaton', () => {
    it('processes input strings correctly based on transition table', () => {
        const transitionTable = {
            S0: { '0': 'S0', '1': 'S1' },
            S1: { '0': 'S2', '1': 'S0' },
            S2: { '0': 'S1', '1': 'S2' }
        };
        const finiteAutomaton = createFiniteAutomaton(transitionTable);

        expect(finiteAutomaton.processInput('101', 'S0')).toBe('S2');
        expect(finiteAutomaton.processInput('010', 'S1')).toBe('S2');
        expect(finiteAutomaton.processInput('111', 'S2')).toBe('S1');
    });

    it('determines final states correctly', () => {
        const finiteAutomaton = createFiniteAutomaton({});
        const finalStates = ['S2', 'S3', 'S0'];

        expect(finiteAutomaton.isFinalState('S2', finalStates)).toBe(true);
        expect(finiteAutomaton.isFinalState('S4', finalStates)).toBe(false);
        expect(finiteAutomaton.isFinalState('S0', finalStates)).toBe(true);
    });
});

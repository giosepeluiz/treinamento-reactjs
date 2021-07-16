import React from 'react';
import { useCounterContext } from '../CounterContext';

const Heading = () => {
    const [state, actions] = useCounterContext();
    return (
        <h1 className="heading">{state.counter}</h1>
    );
};

export default Heading;
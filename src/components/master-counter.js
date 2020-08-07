import React, { useState } from 'react';
import Counter from './counter';

export default function MasterCounter () {

    const [counter, setCounter] = useState(0);

    const handleIncrementA = () => {
        setCounter(counter + 1);
    }

    const handleDecrementA = () => {
        setCounter(counter - 1);

    }

    const handleIncrementB = () => {
        setCounter(counter + 1);
    }

    const handleDecrementB = () => {
        setCounter(counter - 1);

    }

    return (
        <div>
            <Counter 
            onIncrement={handleIncrementA} 
            onDecrement={handleDecrementA} 
            counter={counter} />
            <Counter 
            onIncrement={handleIncrementB} 
            onDecrement={handleDecrementB} 
            counter={counter} />
            <Counter/>
        </div>
    )
}
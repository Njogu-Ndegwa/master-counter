import React, { useState } from 'react';
import Counter from './counter';

export default function MasterCounter () {

    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);

    const handleIncrementA = () => {
        setCounterA(counterA + 1);
    }

    const handleDecrementA = () => {
        setCounterA(counterA - 1);

    }

    const handleIncrementB = () => {
        setCounterB(counterB + 1);
    }

    const handleDecrementB = () => {
        setCounterB(counterB - 1);

    }

    const handleIncrementAll = () => {
        setCounterA(counterA + 1);
 
        setCounterB(counterB + 1);

    }

    const handleDecrementAll = () => {
        setCounterA(counterA - 1);

        setCounterB(counterB - 1);

    }
  

    return (
        <div>
            <Counter 
            onIncrement={handleIncrementA} 
            onDecrement={handleDecrementA} 
            counter={counterA} />
            <Counter 
            onIncrement={handleIncrementB} 
            onDecrement={handleDecrementB} 
            counter={counterB} />
            {/* <Counter/> */}
            <span><button onClick={handleDecrementAll} >- all</button> <button onClick ={handleIncrementAll} >+ all</button></span>
        </div>
    )
}
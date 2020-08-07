import React from 'react';

export default function Counter ({onIncrement, onDecrement, counter}) {
    // const [counter, setCounter] = useState(0);

    const handleIncrement = (e) => {
        e.preventDefault()
        // setCounter(counter + 1)
        onIncrement()
    }

    const handleDecrement = (e) => {
        e.preventDefault()
        // setCounter(counter - 1)
        onDecrement()
    }
    return (
        <div>
            <span><button onClick = {handleDecrement} >-</button>{counter}<button onClick={handleIncrement} >+</button></span>
        </div>
    )
}
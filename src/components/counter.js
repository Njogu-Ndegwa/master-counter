import React from 'react';

export default function Counter ({onIncrement, onDecrement, counter, index}) {
    // const [counter, setCounter] = useState(0);

    const handleIncrement = (e) => {
        e.preventDefault()
        // setCounter(counter + 1)
        onIncrement(index)
    }

    const handleDecrement = (e) => {
        e.preventDefault()
        // setCounter(counter - 1)
        onDecrement(index)
    }
    return (
        <div>
            <span><button onClick = {handleDecrement} >-</button>{counter}<button onClick={handleIncrement} >+</button></span>
        </div>
    )
}
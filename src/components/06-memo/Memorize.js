import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {

    const { state, increment } = useCounter(10)

    const [show, setShow] = useState(true)
    
    return (
        <div className="container">
            <h1>Memorize</h1>
            <h3>Counter: <Small value={state} /> </h3>
        
            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className="btn btn-warning ml-5"
                onClick={() => setShow(!show)}
            >
                Show / Hide = {JSON.stringify(show)}
            </button>
        
        </div>
    )
}

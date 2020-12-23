import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHooks = () => {

    const { state, decrement, increment, reset } = useCounter(10)

    return (
        <div>
            <h1>Counter With Custom Hooks : {state}</h1>

            <button 
                className="btn btn-primary"
                onClick={decrement}
            >
                -1
            </button>
            
            <button 
                className="btn btn-warning"
                onClick={reset}
            >
                Reset
            </button>

            <button 
                className="btn btn-primary"
                onClick={ () => increment(2) }
            >
                +2
            </button>
        </div>
    )
}

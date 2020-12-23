import React, { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    const increment = useCallback( (num) =>{
        setCounter(c => c + num)
    }, [setCounter])

    return (
        <div className="container">
            <h1>CallbackHook</h1>

            <h3>{counter}</h3>

            <ShowIncrement increment={increment} />

        </div>
    )
}

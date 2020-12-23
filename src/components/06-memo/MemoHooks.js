import React, { useState, useMemo } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { procesoPesado } from '../helpers/procesoPesado'

export const MemoHooks = () => {

    const { state, increment } = useCounter(5000)

    const [show, setShow] = useState(true)

    const memoProcesoPesado = useMemo(() => procesoPesado(state), [state])

    return (
        <div className="container">
            <h1>MemoHooks</h1>
            <h3>Counter: <small>{state}</small> </h3>

            <p>{memoProcesoPesado}</p>
        
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

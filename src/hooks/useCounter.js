import { useState } from 'react'

export const useCounter = (initialState = 0) => {
    
    const [state, setstate] = useState(initialState)

    const decrement = () => setstate(state - 1)
    const reset = () => setstate(initialState)
    const increment = (factor = 1) => setstate(state + factor)

    return{
        state,
        decrement,
        increment,
        reset
    }

}

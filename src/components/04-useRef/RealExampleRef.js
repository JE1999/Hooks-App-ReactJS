import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div className="container">
            <h1>Real Example Ref</h1>

            {show && <MultipleCustomHooks />}

            <button
                className="btn btn-secondary btn-block mt-5"
                onClick={() => setShow(!show)}
            >
                Show / Hidden
            </button>
            
        </div>
    )
}

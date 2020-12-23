import React, { useRef, useLayoutEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

export const Layout = () => {

    const { state, increment } = useCounter(1);

    const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${state}`)

    const { quote } = !!data && data[0]

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <div className="container">
            <h1>LayoutEffect</h1>
    
            <blockquote className="blockquote d-flex">
                <p ref={pTag} className="mb-0">{quote}</p>
            </blockquote>

            <pre>{JSON.stringify(boxSize, null, 3)}</pre>

            <button
                className="btn btn-block btn-primary"
                onClick={() => increment()}
            >
                Siguiente frase
            </button>

        </div>
    )
}

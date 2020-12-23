import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

export const MultipleCustomHooks = () => {

    const { state, increment } = useCounter(1);

    const { loading, data, error} = useFetch(`https://breakingbadapi.com/api/quotes/${state}`)

    return (
        <div className="container">
            <h1>Multiple Custom Hooks</h1>
            
            <h2 className="my-5">BreakingBad</h2>

            {loading &&
                <div className="alert alert-warning text-center">Loading...</div>
            }

            {error &&
                <div className="alert alert-danger text-center">Error...</div>
            }

            {data?.length > 0 &&
                <>    
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">{data[0]?.quote}</p>
                        <footer className="blockquote-footer">{data[0]?.author}</footer>
                    </blockquote>
                    <button
                        className="btn btn-block btn-primary"
                        onClick={() => increment()}
                    >
                        Siguiente frase
                    </button>

                </>
            }


        </div>
    )
}

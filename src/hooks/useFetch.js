import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
    
    const isMounted = useRef(true)

    const [ state, setState ] = useState({data: null, loading: true, error: null})

    useEffect(() =>{
        return () => {
            isMounted.current = false
        }
    },[])

    useEffect(() =>{

        setState({
            loading: true,
            error: false,
            data: null
        })

        fetch(url)
        .then( resp => resp.json())
        .then( data  => {
            if(isMounted.current){
                setState({
                    loading: false,
                    error: null,
                    data
                })
            }else{
                console.log('No se llamo')
            }
        })
        .catch( error => {
            setState({
                loading: false,
                error: true,
                data: null
            })
            console.log(error)
        })

    },[url])

    return state
    
}

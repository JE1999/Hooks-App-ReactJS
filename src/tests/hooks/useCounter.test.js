import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'

describe('Pruebas de useCounter', () =>{

    test('Debe de retornar los valores por defectos', () => {

       const { result } = renderHook(() => useCounter() )
    //    console.log(result.current)
       expect(result.current.state).toBe(0) 
       expect(typeof result.current.decrement).toBe('function') 
       expect(typeof result.current.increment).toBe('function') 
       expect(typeof result.current.reset).toBe('function')

    })

    test('Debe de tener el counter en 100', () => {

        const { result } = renderHook(() => useCounter(100) )
        expect(result.current.state).toBe(100) 
    
    })

    test('Debe de incrementar el counter en 1', () => {
    
        const { result } = renderHook(() => useCounter(100) )
        const { increment } = result.current
    
        act( () => {
            increment()
        })

        const { state } = result.current
        expect(state).toBe(101)
    
    })

    test('Debe de decrementar el counter en 1', () => {
    
        const { result } = renderHook(() => useCounter(100) )
        const { decrement } = result.current
    
        act( () => {
            decrement()
        })

        const { state } = result.current
        expect(state).toBe(99)
    
    })

    test('Debe de resetear el valor de counter', () => {
    
        const { result } = renderHook(() => useCounter(100) )
        const { reset } = result.current
    
        act( () => {
            reset()
        })

        const { state } = result.current
        expect(state).toBe(100)
    
    })
    

})
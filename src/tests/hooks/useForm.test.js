import { renderHook, act } from "@testing-library/react-hooks"
import { useForm } from "../../hooks/useForm"

describe('Pruebas de useForm', () =>{

    const initialForm = {
        name : 'Jose Eduardo',
        email : 'je99alvarez@gmail.com'
    }

    test('Debe de regresar un formulario por defecto', () => {
        
        const { result } = renderHook(() => useForm(initialForm))
        const [ initialState, handleChange, reset ] = result.current

        expect(initialState).toEqual(initialForm)
        expect(typeof handleChange).toBe('function')
        expect(typeof reset).toBe('function')

    })

    test('Debe de cambiar el valor del formulario', () => {
        
        const { result } = renderHook(() => useForm(initialForm))
        const [ , handleChange ] = result.current

        act(() =>{
            handleChange({
                target:{
                    name: 'name',
                    value: 'je'
                }
            })
        })

        const [ initialState ] = result.current
        expect(initialState).toEqual({...initialForm, name: 'je'})

    })

    test('Debe de resetear el valor RESET()', () => {
        
        const { result } = renderHook(() => useForm(initialForm))
        const [ , handleChange, reset ] = result.current

        act(() =>{
            handleChange({
                target:{
                    name: 'name',
                    value: 'je'
                }
            })

            reset()
        })

        const [ initialState ] = result.current
        expect(initialState).toEqual(initialState)

    })
    

})
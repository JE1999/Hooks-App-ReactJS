import { todoReducer } from '../../../components/08-useReducer/todoReducer'
import { demoTodos } from '../../fixtures/demoTodos'

describe('Pruebas en todoReducer', () =>{

    test('Retornar el estado por defecto', () => {
        
        const state = todoReducer(demoTodos, {})
        expect(state).toEqual(demoTodos)
        
    })
    
    test('Agregar un TODO', () => {

        const newTodo = {
            id: 3,
            desc: 'Nuevo TODO',
            done: true
        }
        
        const action = {
            type: 'ADD',
            payload: newTodo
        }
        
        const state = todoReducer(demoTodos, action)
        expect(state).toEqual([...demoTodos, newTodo])

    })

    test('Eliminar un TODO', () => {

        const action = {
            type: 'DELETE',
            payload: 1
        }
        
        const state = todoReducer(demoTodos, action)
        expect(state.length).toBe(1)
        expect(state).toEqual([demoTodos[1]])

    })

    test('Cambiar estado a un TODO', () => {

        const action = {
            type: 'TOGGLE',
            payload: 1
        }
        
        const state = todoReducer(demoTodos, action)
        expect(state[0].done).toBe(true)
        expect(state[1]).toEqual(demoTodos[1])

    })

})
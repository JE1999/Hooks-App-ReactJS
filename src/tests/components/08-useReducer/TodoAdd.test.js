import { shallow } from 'enzyme'
import React from 'react'
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd'

describe('Pruebas en <TodoAdd />', () => {
    
    const handleAddTodo = jest.fn()

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
        />
    )

    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot()

    })

    test('No debe de llamar el handleAddTodo', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit')

        formSubmit({ preventDefault(){} })

        expect ( handleAddTodo ).toHaveBeenCalledTimes(0)        
        
    })
    
    test('Llamar la funcion de handleAddTodo ', () => {
        
        const value = 'Aprender ReactJS'
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'desc'
            }
        })

        const formSubmit = wrapper.find('form').prop('onSubmit')

        formSubmit({ preventDefault(){} })

        expect ( handleAddTodo ).toHaveBeenCalledTimes(1)        
        expect ( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) ); 
        expect ( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        })  
        
        expect(wrapper.find('input').prop('value')).toBe('')

    })
    
})

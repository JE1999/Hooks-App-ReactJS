import React from 'react'
import { shallow } from 'enzyme'
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem'
import { demoTodos } from '../../fixtures/demoTodos'

describe('Pruebas de <TodoListItem />', () =>{

    const handleToggle = jest.fn()
    const handleDelete = jest.fn()

    const wrapper = shallow( 
        <TodoListItem 
            todo={demoTodos[0]}
            index={0}
            handleToggle={ handleToggle }
            handleDelete={ handleDelete }
        /> 
    )

    test('Mostrar componente', () => {
        
        expect(wrapper).toMatchSnapshot()
    
    })

    test('handleDelete();', () => {
        
        wrapper.find('button').simulate('click')
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id )
    
    })

    test('handleToggle();', () => {
        
        wrapper.find('p').simulate('click')
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id )
    
    })

    test('Mostrar text', () => {
        
        const p = wrapper.find('p')
        expect( p.text().trim() ).toBe( `1. ${demoTodos[0].desc}` )
    
    })

    test('Debe de tener la clase text-success si el todo.done = true', () => {
        
        const todo = demoTodos[0]
        todo.done = true

        const wrapper = shallow( 
            <TodoListItem 
                todo={ todo }
            /> 
        )

        expect( wrapper.find('p').hasClass('text-success') ).toBe(true)

    })

})
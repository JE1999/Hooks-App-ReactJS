import React from 'react'
import { shallow } from 'enzyme'
import { TodoApp } from '../../../components/08-useReducer/TodoApp'
// import { act } from '@testing-library/react'
// import { demoTodos } from '../../fixtures/demoTodos'



describe('Pruebas en <TodoApp />', () => {
    
    const wrapper = shallow(<TodoApp />)

    test('Debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot()

    })

    // test('Debe de agregar un TODO', () => {
        
    //     //mount aun no es compatible con react 17
    //     const wrapper = mount(<TodoApp />)

    //     act( () =>{
    //         wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] )
    //     }) 

    // })

})

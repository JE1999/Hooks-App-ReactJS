import React from 'react'
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks'
import { useFetch } from '../../../hooks/useFetch'
import { useCounter } from '../../../hooks/useCounter'
jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks />', () =>{

    useCounter.mockReturnValue({
        state: 1,
        increment: () => {}
    })

    test('Debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: false
        })
        
        const wrapper = shallow( <MultipleCustomHooks /> )
        expect(wrapper).toMatchSnapshot()

    })

    test('Debe retornar información', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'JE',
                quote: 'Working hard'
            }],
            loading: false,
            error: false
        })

        const wrapper = shallow( <MultipleCustomHooks /> )
        
        expect( wrapper.find('.alert').exists() ).toBe(false)
        expect( wrapper.find('footer').text().trim() ).toBe('JE')

    })
    

})
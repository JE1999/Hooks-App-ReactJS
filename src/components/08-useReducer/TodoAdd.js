import React, { memo } from 'react'
import { useForm } from '../../hooks/useForm'


export const TodoAdd = memo(({handleAddTodo}) => {

    const [ {desc}, handleChange, reset ] = useForm({desc: ''});

    const handleSubmit =  e =>{
        e.preventDefault()
        if(desc.trim().length <1){
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: desc,
            done: false
        }

        handleAddTodo(newTodo)
        reset()
    }

    return (
        <>
            <h3>Agregar</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="desc"
                        className="form-control"
                        placeholder="Agregar..."
                        autoComplete="off"
                        value={desc}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-block btn-primary"
                    >
                        AGREGAR
                    </button>
                </form>
        </>
    )
})

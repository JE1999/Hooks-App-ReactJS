import React, { memo } from 'react'

export const TodoListItem = memo(({todo, index, handleToggle, handleDelete}) => {
    return (
        <li 
            key={todo.id}
            className="list-group-item"
        >
            <p onClick={() => handleToggle(todo.id)} className={`${todo.done && 'text-success'}`} style={{cursor: 'pointer'}}>{index + 1}. {todo.desc}</p>
            <button 
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
})

//Esto se incluye para saber cuantas veces este componente es llamado
//Test
//Solo se incluira si el componente esta rodeado por el memo
TodoListItem.displayName="TodoListItem"

import React, { useReducer, useEffect, useCallback } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'App React',
//     done: false
// }];

const init = () =>{
    
    return JSON.parse(localStorage.getItem('todos')) || []
    
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'App React',
    //     done: false
    // }]
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    console.log(todos);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = useCallback(todoId =>{
        const action = {
            type: "DELETE",
            payload: todoId
        }

        dispatch(action)
    },[])

    const handleToggle = useCallback(todoId =>{
        const action = {
            type: "TOGGLE",
            payload: todoId
        }

        dispatch(action)
    },[])

    const handleAddTodo = useCallback(newTodo => {
        dispatch({
            type: 'ADD',
            payload: newTodo
        })
    },[])

    return (
        <div className="container">
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <TodoAdd 
                handleAddTodo={handleAddTodo}
            />

            <hr />

            <TodoList
                todos={todos}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
            />

        </div>
    )
}

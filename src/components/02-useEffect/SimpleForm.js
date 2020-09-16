import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name : '',
        email : ''
    });

    const { name, email } = formState;

    useEffect(() => {
    
    console.log('hey')
    }, []); 

    const handleChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name] : target.value
        })
    }

    return (
        <div className="container">
            <h1>useEffect</h1>

            <div className="form-group">
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name..."
                    autoComplete="on"
                    value={name}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email..."
                    autoComplete="on"
                    value={email}
                    onChange={handleChange}
                />
            </div>

            {name === '123' && <Message />}
            
        </div>
    )
}

import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [ formValues, handleChange, handleSubmit ] = useForm({
        name : '',
        email : '',
        password : '',
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('email cambio a: ', email)
    }, [email])

    return (
        <div className="container">
            
            <form onSubmit={handleSubmit}>
                
                <h1>FormWithCustomHook</h1>

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

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password..."
                        autoComplete="on"
                        value={password}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-block btn-info">Enviar</button>

            </form>

        </div>
    )
}

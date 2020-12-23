import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext)

    const loginUser = {
        id: 123,
        name: 'JE',
        email: 'je99alvarez@gmail.com'
    }

    return (
        <div>
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-danger"
                onClick={() => setUser(loginUser)}
            >
                Login
            </button>
        </div>
    )
}

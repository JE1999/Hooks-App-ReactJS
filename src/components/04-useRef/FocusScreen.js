import React from 'react'

export const FocusScreen = () => {

    const handleClick = () => {
        document.querySelector('input').select()
    }

    return (
        <div className="container">
            <h1>Focus Screen</h1>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre..."
                />
            </div>

            <button 
                className="btn btn-block btn-primary"
                onClick={handleClick}
            >
                Focus
            </button>
            
        </div>
    )
}

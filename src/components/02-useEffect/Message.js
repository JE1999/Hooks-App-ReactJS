import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0})
    const { x, y } = coords;

    useEffect(() => {

        const mouseMove = e => {
            const coors = { x: e.x, y: e.y };
            setCoords(coors)
            console.log(coors)
        }

        window.addEventListener('mousemove', mouseMove)
        console.log('Componente montado')

        return () => {
            window.removeEventListener('mousemove', mouseMove)
            console.log('Componente desmontado')
        }
    }, [])

    return (
        <div>
            <h1>Genial!!</h1>
            <p>X : {x}</p>
            <p>Y : {y}</p>
        </div>
    )
}

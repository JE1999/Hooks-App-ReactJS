import React, { memo } from 'react'

export const Small = memo(({value}) => {
    
    console.log('Mostrandome')

    return (
        <small>{value}</small>
    )
})

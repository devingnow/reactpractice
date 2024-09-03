import React from 'react'

const Input = ({type, refInput, placeholder}) => {
    return (
        <input type={type} ref={refInput} placeholder={placeholder}/>

    )
}

export default Input

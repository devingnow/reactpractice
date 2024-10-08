import React from 'react'

const Label = ({children, htmlFor}) => {
    return (
        <label htmlFor={htmlFor}>{children}</label>
    )
}

export default Label

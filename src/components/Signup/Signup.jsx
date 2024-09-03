import React from 'react'
import SignupForm from './SignupForm'
import { Body, SignupFormStyle } from './Signup.styled'
import FooterAll from '../../atoms/LoginFooter/FooterAll'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <Body>
            <p><Link to='/' style={{ textDecoration: "none", color:'black'}}>React Practice</Link></p>
            <SignupFormStyle>
                <SignupForm />
            </SignupFormStyle>
            <FooterAll />
        </Body>
    )
}

export default Signup

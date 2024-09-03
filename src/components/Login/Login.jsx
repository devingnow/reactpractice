import React from 'react'
import { Body } from '../Signup/Signup.styled'
import { LoginFormStyle } from './Login.styled'
import LoginForm from './LoginForm'
import IDFindUl from '../../atoms/IDFindUl'
import FooterAll from '../../atoms/LoginFooter/FooterAll'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Body>
            <p><Link to='/' style={{ textDecoration: "none", color:'black'}}>React Practice</Link></p>
            <LoginFormStyle>
                <LoginForm />
            </LoginFormStyle>
            <IDFindUl />
            <FooterAll />
        </Body>
    )
}

export default Login

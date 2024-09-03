import React from 'react'
import { Header } from './MainHeader.styled'
import { Link } from 'react-router-dom'

const MainHeader = () => {
    return (
        <Header>
            <p>React Practice</p>
            <Link to={'/login'} class="login" style={{textDecoration:'none', color:'black'}}>로그인</Link>
            <Link to={'/signup'} class='signup' style={{textDecoration:'none', color:'black'}}>회원가입</Link>
        </Header>
    )
}

export default MainHeader

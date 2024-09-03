import React from 'react'
import { Box } from '../components/Login/Login.styled'
import { Link } from 'react-router-dom'

const IDFindUl = () => {
    return (
        <Box>
            <ul>
                <li><p>아이디 찾기</p></li>
                <li><p>비밀번호 찾기</p></li>
                <li><Link to='/signup' style={{textDecoration:'none', color:'#888888'}}><p>회원가입</p></Link></li>
            </ul>
        </Box>
    )
}

export default IDFindUl

import React from 'react'
import Input from './Input'
import Button from './Button'
import { Link } from 'react-router-dom'

const SignupF = ({onSubmit, uidInput, upwInput, upwInputCheck}) => {
    return (
        <form onSubmit={onSubmit}>
            <Input type={'text'} refInput={uidInput} placeholder={'아이디를 입력해주세요'}/>
            <Input type={'password'} refInput={upwInput} placeholder={'비밀번호를 입력해주세요'}/>
            <Input type={'password'} refInput={upwInputCheck} placeholder={'비밀번호를 한번 더 입력해주세요'}/>
            <div class='btnBox'>
                <Button>완료</Button>
                <Link to='/' style={{textDecoration:"none", color:'white' }}><button type='button' class='cancelBtn'>취소</button></Link>
            </div>
        </form>
    )
}

export default SignupF

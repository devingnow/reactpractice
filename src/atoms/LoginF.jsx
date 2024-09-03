import React from 'react'
import Button from './Button'
import Input from './Input'

const LoginF = ({onSubmit, uidInput, upwInput}) => {
    return (
        <form onSubmit={onSubmit}>
            <Input type={'text'} refInput={uidInput} placeholder={'아이디를 입력해주세요'}/>
            <Input type={'password'} refInput={upwInput} placeholder={'비밀번호를 입력해주세요'}/>
            <div class='checkbox'><div class='check'></div><div class="text">로그인 상태 유지</div></div>
            <Button>로그인</Button>
        </form>
    )
}

export default LoginF

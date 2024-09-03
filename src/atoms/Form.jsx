import React from 'react'
import Label from './Label'
import Input from './Input'
import Button from './Button'

const Form = ({onSubmit,uidInput,upwInput}) => {
    return (
            <form onSubmit={onSubmit}>
                <Label htmlFor=''>아이디</Label>
                <Input refInput={uidInput} />
                <Label htmlFor=''>비밀번호</Label>
                <Input refInput={upwInput} />
                <Button>로그인</Button>
            </form>
    )
}

export default Form

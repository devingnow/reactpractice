import { atom } from 'recoil'

export const User = atom(
    {
        key: "user",
        default: {
            uid:'',
            upw:''
        }
    }
)

export const LoginState = atom(
    {
        key:'loginState',
        default:{
            isLogin:false,
            token:'',
        }
    }
)
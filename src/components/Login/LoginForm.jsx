import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginF from '../../atoms/LoginF';
import { useRecoilState } from 'recoil';
import { LoginState, User } from '../Recoil/UserAtom';
import instance from '../../axios/axios';


const LoginForm = () => {
    const [ user, setUser] = useRecoilState(User)
    const [ loginState, setLoginState ] = useRecoilState(LoginState)
    
    const uidInput = useRef(null);
    const upwInput = useRef(null);
    
    const nav = useNavigate();
    
    const loginHandler = async (e) => {
        e.preventDefault();

        setUser({...user, uid:uidInput.current.value, upw:upwInput.current.value});
        console.log(user);
        
        try{
            const response = await instance.post('/user/login', {uid:uidInput.current.value, upw:upwInput.current.value})
            console.log("response: ", response);
            if(response.status === 201){
                console.log(response)
                setLoginState(prevState => ({
                    ...prevState,
                    isLogin: true,
                }))
                alert('로그인 완료')
                nav('/')
            }else{
                alert('로그인 실패')
            }
        }catch(error){
            alert('로그인 실패')
        }


    //     if(users.filter((el) => uidInput.current.value === el.uid && upwInput.current.value === el.upw).length !== 0){

    //         setLoginState(prevState => ({
    //             ...prevState,
    //             isLogin: true,
    //         }))
    //         nav('/')
    //     }else{
    //         alert('로그인 실패')
    //     }
    // }
    }
    useEffect(() => {
        console.log(loginState, '로그인상태 확인')
    },[loginState])

    return (
        <LoginF onSubmit={loginHandler} uidInput={uidInput} upwInput={upwInput} />
        )
    
}
export default LoginForm

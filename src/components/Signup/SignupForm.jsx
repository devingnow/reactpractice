import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import SignupF from '../../atoms/SignupF';
import { useRecoilState } from 'recoil'
import { User } from '../Recoil/UserAtom';
import instance from '../../axios/axios';

const SignupForm = () => {
    const [user, setUser] = useRecoilState(User)

    const uidInput = useRef(null);
    const upwInput = useRef(null);
    const upwInputCheck = useRef(null);

    const nav = useNavigate();


    const signupHandler = async (e) => {
        e.preventDefault();

        if(uidInput.current.value.length < 6) {
            alert('아이디를 잘못 입력하였습니다.');
            return
        }

        if (upwInput.current.value !== upwInputCheck.current.value || upwInput.current.value.length < 6){
            alert('비밀번호를 잘못 입력하였습니다.');
            return
        }

        
        const newUser = { uid: uidInput.current.value, upw: upwInput.current.value }
        
        try{
            const response = await instance.post('/user/signup', newUser);
            
            if (response.status === 201){
                alert('회원가입 완료')
                setUser({...user, uid:response.data.uid, upw:upwInput.current.value});
                nav('/login');
            }else{
                alert('회원가입 실패')
            }
        }catch(error){
            alert('회원가입 에러 발생')
        }
    }

    useEffect(() => {
        console.log(user, 'user 바뀐거 확인')
    }, [user])

    return (
        <SignupF onSubmit={signupHandler} uidInput={uidInput} upwInput={upwInput} upwInputCheck={upwInputCheck} />
    )
}

export default SignupForm

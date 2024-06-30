"use client";
import React from 'react'
import HomePage from '../homePage/HomePage';
import * as S from './styled';
import { useAuthentication } from '@/app/contexts/AuthenticationContext';
import GoogleLoginButton from './GoogleLoginButton';

function LoginPage() {
   const {user, handleLogin} = useAuthentication();
  return (
    <>
    {user ?  <HomePage/> : (
        <S.StyledBody>
            <S.Title>
                D E S T I N A T I O N S
            </S.Title>
             <GoogleLoginButton onPress={() => {handleLogin()}}/>
        </S.StyledBody>

    )}
</>

  )
}

export default LoginPage
// GoogleLoginButton.tsx
import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import * as S from './styled';
import { Google as GoogleIcon } from '@mui/icons-material';



const GoogleLoginButton = ({ onPress }: {onPress: () => void}) => {
  return (
    <S.StyledButton onClick={onPress}>
      <GoogleIcon />
      Login with Google
    </S.StyledButton>
  );
};

export default GoogleLoginButton;

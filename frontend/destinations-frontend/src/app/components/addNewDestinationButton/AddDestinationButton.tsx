'use client'
import React from 'react';
import Fab from '@mui/material/Fab';
import * as S from './styled';
import { HikingOutlined } from '@mui/icons-material';
const AddDestinationButton = ({addDestination} : {addDestination: () => void}) => {
    return (
      <S.StyledFab
        onClick={addDestination}
      >
       
            <HikingOutlined style={{color: "white"}}/>


      </S.StyledFab>
    );
  };
export default AddDestinationButton;
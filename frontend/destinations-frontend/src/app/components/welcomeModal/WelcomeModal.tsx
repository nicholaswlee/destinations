'use client'
import React from 'react'
import ModalBase from '../core/modalBase/ModalBase'
import { LinearProgress, TextField } from '@mui/material'
import * as S from "./styled"
import { FileUploader } from 'react-drag-drop-files'
import useWelcomeModal from '@/app/hooks/useWelcomeModal'


const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

export function WelcomeModal({open, onClose}: {open: boolean, onClose: () => void}){
    const {setName, name, setUsername, username, setProfilePicture,readyToSubmit, profilePicture, isLoading, handleAdd} = useWelcomeModal({onClose})

    return <ModalBase open={open} handleClose={onClose}>
        <S.Body>
            {isLoading ? 
            <>
            <S.StyledHeader>Creating your profile...</S.StyledHeader>
            <LinearProgress/>
            </>
            :
            <>
        <S.StyledHeader>Welcome to Destinations!</S.StyledHeader>
        <S.BodyText>Destinations is a place to keep track of all the places you want to visit. 
            You can add new destinations, upload photos, and keep notes on each place you want to visit.
            Time to get to know you! 
        </S.BodyText>
        <S.StyledTextField 
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
        />
        <S.StyledTextField 
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}/>

      <FileUploader label="Add your profile picture here" handleChange={setProfilePicture} name="file" types={fileTypes} />
      <S.ButtonContainer>
      <S.NewGameButton disabled={isLoading || !readyToSubmit} onClick={handleAdd}>Start Traveling</S.NewGameButton>
      </S.ButtonContainer>
      </>
            }
        </S.Body>
       
    </ModalBase>
}
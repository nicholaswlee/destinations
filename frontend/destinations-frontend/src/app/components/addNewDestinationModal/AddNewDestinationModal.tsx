import React, { use, useEffect, useState } from 'react'
import * as S from './styled'
import { CircularProgress, Modal, TextField } from '@mui/material'
import { FileUploader } from 'react-drag-drop-files';
import FileEntry from '../fileEntry/FileEntry';
import { createDestinationEntryInfo } from '@/app/models/DestinationEntryInfo';
import { randomUUID } from 'crypto';
import useAddNewDestinationModal from '@/app/hooks/useAddNewDestinationModal';
import ModalBase from '../core/modalBase/ModalBase';

interface ModalProps {
    open: boolean;
    onClose: () => void;
  }

const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

function AddNewDestinationModal({open, onClose} : ModalProps) {
    const {
        setDestination, 
        setNotes, 
        setScore, 
        handleChange, 
        tiles,
        handleAdd, 
        handleClose,
        isLoading
    } = useAddNewDestinationModal({onClose})
  return <ModalBase open={open} handleClose={onClose}>
    <S.Body>
      {isLoading ? <CircularProgress size={50}/>: <><S.Title>Add a new destination</S.Title>
      <TextField 
        variant="standard" placeholder="Destination"
        onChange={(e) => setDestination(e.target.value)}    
    />
      <TextField
          placeholder="Notes"
          multiline
          maxRows={10}
          onChange={(e) => setNotes(e.target.value)}
        />
        <TextField
            placeholder="Score"
            type="number"
            onChange={(e) => setScore(parseInt(e.target.value))}
        />
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
        {tiles} </>}
      <S.ButtonContainer>
      <S.NewGameButton disabled={isLoading} onClick={handleAdd}>Add</S.NewGameButton>
        <S.CloseButton onClick={handleClose}
    >Close</S.CloseButton>
      </S.ButtonContainer>
    </S.Body>
  </ModalBase>
}

export default AddNewDestinationModal

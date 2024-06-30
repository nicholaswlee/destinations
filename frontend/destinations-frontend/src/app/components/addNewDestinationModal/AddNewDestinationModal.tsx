import React, { useEffect, useState } from 'react'
import * as S from './styled'
import { Modal } from '@mui/material'
import { FileUploader } from 'react-drag-drop-files';
import FileEntry from '../fileEntry/FileEntry';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    add: (files: File[]) => void;
  }

const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

function AddNewDestinationModal({open, onClose, add} : ModalProps) {
const [files, setFiles] = useState<File[]>([]);
const [tiles, setTiles] = useState<React.ReactElement | React.ReactElement[]>([])
  const handleChange = (file: File) => {
    setFiles([...files || [], file]);
  };
  const deleteFile = (index: number) => {
    setFiles(files?.filter((file, i) => i !== index));
  }
  useEffect(() => {
    const displayFileNames = () => {
        if (files.length === 0) {
          return setTiles([]);
        }
        setTiles(files.map((file, idx) => {
          return <FileEntry filename={file.name} index={idx} key={idx} deleteFile={() => deleteFile(idx)}/>
        }))
      }
    displayFileNames()
    console.log(tiles)
  }, [files])
 
  return <Modal
  style={{ backgroundColor: "rgba(0, 0, 0, 0.25)", zIndex: 1 }}
  open={open}
  onClose={() => {
    setFiles([]) 
    onClose()
  }}>
  <S.ModalWrapper>
    <S.Body>
      <S.Title>Add a new destination</S.Title>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
        {tiles}
      <S.ButtonContainer>
      <S.NewGameButton onClick={() => 
      {add(files)
    setFiles([]) }
    }>Add</S.NewGameButton>
        <S.CloseButton onClick={() => {
            setFiles([]) 
            onClose()
        }}
    >Close</S.CloseButton>
      </S.ButtonContainer>
    </S.Body>
  </S.ModalWrapper>
</Modal>
}

export default AddNewDestinationModal

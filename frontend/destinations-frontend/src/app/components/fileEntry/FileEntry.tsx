import React from 'react'
import * as S from './styled'
import { Icon, IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'

function FileEntry({filename, index, deleteFile} : {filename: string, index: number, deleteFile: () => void}) {
  return (
    <S.StyledRow>
        {filename}
       <IconButton onClick={() => {deleteFile()}}>
        <Delete/>
       </IconButton>
    </S.StyledRow>
  )
}


export default FileEntry

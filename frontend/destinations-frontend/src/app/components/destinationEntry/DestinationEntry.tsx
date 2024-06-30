'use client'
import React, { useEffect } from 'react'
import * as S from "./styled"
import { ButtonBase, CircularProgress, Divider } from '@mui/material'
import Score from '../score/Score'
import { getImageUrl } from '@/app/utils/ImageUtils'

function DestinationEntry({onClick, score} : {onClick: () => void, score: number}) {
  const [imgUrl, setImgUrl] = React.useState<string | null>(null)
  useEffect(() => {
    getImageUrl("images/hawaii.png").then((url) => {setImgUrl(url)})
    }, [])

  return <>

    <S.StyledButtonBase  onClick={onClick}>
    <S.StyledEntry>
    <S.StyledRow>
    <p><b>NAME</b> went to <b>DESTINATION</b> [with <b>PERSON</b>]</p>
    <Score value={score}/>
    </S.StyledRow>
    <Divider style={{backgroundColor: "grey", height: "0.5x", padding: "0px 12px"}}/>
    <S.StyledColumn>
      <S.ImageRow>
        {/* TODO: MAP IMAGES */}
 
      {imgUrl ? (
        <S.StyledImage src={imgUrl} alt="Loaded from Firebase" />
      ) : (
        <CircularProgress size={100} style={{color: "#034472"}}/>
      )}
      {imgUrl ? (
        <S.StyledImage src={imgUrl} alt="Loaded from Firebase" />
      ) : (
        <CircularProgress size={100} style={{color: "#034472"}}/>
      )}
      {imgUrl ? (
        <S.StyledImage src={imgUrl} alt="Loaded from Firebase" />
      ) : (
        <CircularProgress size={100} style={{color: "#034472"}}/>
      )}
      {imgUrl ? (
        <S.StyledImage src={imgUrl} alt="Loaded from Firebase" />
      ) : (
        <CircularProgress size={100} style={{color: "#034472"}}/>
      )}
      {imgUrl ? (
        <S.StyledImage src={imgUrl} alt="Loaded from Firebase" />
      ) : (
        <CircularProgress size={100} style={{color: "#034472"}}/>
      )}
      {imgUrl ? (
        <S.StyledImage src={imgUrl} alt="Loaded from Firebase" />
      ) : (
        <CircularProgress size={100} style={{color: "#034472"}}/>
      )}
      
      </S.ImageRow>
        <p style={{textAlign: "left"}}><b>Notes:</b> BLAH BLAH</p>
    </S.StyledColumn>
    <Divider style={{backgroundColor: "grey", height: "1px"}}/>
    </S.StyledEntry>
    </S.StyledButtonBase>


  </>
}


export default DestinationEntry
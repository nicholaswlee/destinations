import React from 'react'
import * as S from "./styled"
import { Divider } from '@mui/material'
import Score from '../score/Score'

function DestinationEntry({onClick} : {onClick: () => void}) {
  return <>
   <S.StyledEntry onClick={onClick}>
    <S.StyledRow>
    <p>PFP</p>
    <p><b>NAME</b> went to <b>DESTINATION</b> [with <b>PERSON</b>]</p>
    <Score value={2}/>
    </S.StyledRow>
    <Divider style={{backgroundColor: "grey", height: "0.5x", padding: "0px 12px"}}/>
    <S.StyledColumn>
        <p>IMAGES</p>
        <p style={{textAlign: "left"}}><b>Notes:</b> BLAH BLAH</p>
    </S.StyledColumn>
    <Divider style={{backgroundColor: "grey", height: "1px"}}/>
  </S.StyledEntry>

  </>
}


export default DestinationEntry
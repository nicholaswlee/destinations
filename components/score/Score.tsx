import React, {useEffect, useState} from 'react'
import * as S from "./styled"

function Score({value}: {value: number}) {
    const [textColor, setTextColor] = useState("green")
    useEffect(() => {
        if(value >= 7){
            setTextColor("green")
        }else if(value >= 4){
            setTextColor("#ffdd33")
        }else {
            setTextColor("red")
        }
    }, [value])
  return <S.Circle style={{color: textColor}}>
    {value}
  </S.Circle>
}
export default Score
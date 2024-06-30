import React, {useState} from 'react'
import * as S from './styled'
import DestinationEntry from '../destinationEntry/DestinationEntry'

export default function Home({children} : {children?:  JSX.Element[]}) {
    const [currentEntry, setCurrentEntry] = useState<number | null>(null)
    const loadEntries = () => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map( (index) => <DestinationEntry onClick={() => setCurrentEntry(index)}></DestinationEntry>)
    }
  return (
    <S.StyledDivider>
        <S.Container>
          {loadEntries()}
        </S.Container>
        <S.Container>
        {currentEntry == null ? "No entry set" : currentEntry }
        </S.Container>
         {children}

     </S.StyledDivider>

  )
}

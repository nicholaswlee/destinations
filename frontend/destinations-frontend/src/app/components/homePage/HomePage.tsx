'use client'
import React, {useState} from 'react'
import * as S from './styled'
import DestinationEntry from '../destinationEntry/DestinationEntry'
import Header from '../header/Header'
import LeftDrawer from '../leftDrawer/LeftDrawer'
import AddDestinationButton from '../addNewDestinationButton/AddDestinationButton'

export default function HomePage({children} : {children?:  JSX.Element[]}) {
    const [currentEntry, setCurrentEntry] = useState<number | null>(null)
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
    const loadEntries = () => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map( 
          (index) =>  <DestinationEntry 
            onClick={() => setCurrentEntry(index)}
            score={index}

          />
        )
    }
  return (
    <>
    <Header toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}/>
    
   


    <LeftDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>
     <S.StyledDivider>
    <S.Container>
      {loadEntries()}
    </S.Container>
    <S.Container>
    {currentEntry == null ? "No entry set" : currentEntry }
    </S.Container>
    {children}

    </S.StyledDivider>
    <AddDestinationButton addDestination={() => {}}/>
    </>

  )
}

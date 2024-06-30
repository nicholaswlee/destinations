'use client'
import React, {useState} from 'react'
import * as S from './styled'
import DestinationEntry from '../destinationEntry/DestinationEntry'
import Header from '../header/Header'
import LeftDrawer from '../leftDrawer/LeftDrawer'
import AddDestinationButton from '../addNewDestinationButton/AddDestinationButton'
import AddNewDestinationModal from '../addNewDestinationModal/AddNewDestinationModal'
import { useFirebase } from '@/app/contexts/FirebaseContext'
import DestinationEntriesContainer from '../destinationEntriesContainer/DestinationEntriesContainer'
import { DestinationEntryInfo } from '@/app/models/DestinationEntryInfo'

export default function HomePage({children} : {children?:  JSX.Element[]}) {
  const {storage} = useFirebase()
    const [currentEntry, setCurrentEntry] = useState<DestinationEntryInfo | null>(null)
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
    const [isAddOpen, setIsAddOpen] = useState<boolean>(false)

  return (
    <>
    <Header toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}/>    
    <LeftDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>
     <S.StyledDivider>
    <DestinationEntriesContainer
      setCurrentEntry={(entry) => setCurrentEntry(entry)}
    />
    {currentEntry != null && <S.Container>
   {currentEntry.id} 
    </S.Container>}
    {children}

    </S.StyledDivider>
    <AddDestinationButton addDestination={() => {setIsAddOpen(true)}}/>
    <AddNewDestinationModal open={isAddOpen} onClose={() => setIsAddOpen(false)}/>
    </>
  )
}

'use client'
import React, {useState} from 'react'
import * as S from './styled'
import DestinationEntry from '../destinationEntry/DestinationEntry'
import Header from '../header/Header'
import LeftDrawer from '../leftDrawer/LeftDrawer'
import AddDestinationButton from '../addNewDestinationButton/AddDestinationButton'
import AddNewDestinationModal from '../addNewDestinationModal/AddNewDestinationModal'
import { useFirebase } from '@/app/contexts/FirebaseContext'
import { uploadImage } from '@/app/utils/ImageUtils'

export default function HomePage({children} : {children?:  JSX.Element[]}) {
  const {storage} = useFirebase()
    const [currentEntry, setCurrentEntry] = useState<number | null>(null)
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
    const [isAddOpen, setIsAddOpen] = useState<boolean>(false)
    const loadEntries = () => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map( 
          (index) =>  <DestinationEntry 
            key={index}
            onClick={() => setCurrentEntry(index)}
            score={index}

          />
        )
    }

    const uploadFiles = async (files: File[]) => {
      const filePaths = await Promise.all(files.map (async (file) => {
        return await uploadImage(file)
      }))
      return filePaths     
      setIsAddOpen(false)
    }

  return (
    <>
    <Header toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}/>    
    <LeftDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>
     <S.StyledDivider>
    <S.Container>
      {loadEntries()}
    </S.Container>
    {currentEntry != null && <S.Container>
   {currentEntry} 
    </S.Container>}
    {children}

    </S.StyledDivider>
    <AddDestinationButton addDestination={() => {setIsAddOpen(true)}}/>
    <AddNewDestinationModal open={isAddOpen} onClose={() => setIsAddOpen(false)} add={uploadFiles} />
    </>
  )
}

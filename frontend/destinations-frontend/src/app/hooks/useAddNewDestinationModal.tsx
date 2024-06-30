'use client'

import React, { useEffect, useState } from 'react'
import FileEntry from '../components/fileEntry/FileEntry';
import { createDestinationEntryInfo } from '../models/DestinationEntryInfo';
import { useAuthentication } from '../contexts/AuthenticationContext';
import { uploadImage } from '../utils/ImageUtils';
import { ImageInfo, createImageInfo } from '../models/ImageInfo';
import { useFirebase } from '../contexts/FirebaseContext';
import { doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

export default function useAddNewDestinationModal({onClose}: {onClose: () => void}){
    const [files, setFiles] = useState<File[]>([]);
    const [tiles, setTiles] = useState<React.ReactElement | React.ReactElement[]>([])
    const [notes, setNotes] = useState<string>("")
    const [destination, setDestination] = useState<string>("")
    const [score, setScore] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {user} = useAuthentication()
    const {firestore} = useFirebase()
  
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
  
  const uploadFiles = async (files: File[], userId: string, destnationEntryId: string): Promise<ImageInfo[]> => {
    const filePaths = await Promise.all(files.map (async (file) => {
      return createImageInfo("TODO ADD IMAGE DESCRIPTION", await uploadImage(file, userId, destnationEntryId))
    }))
    return filePaths 
  }
  
  const handleAdd = async () => {
    if(destination === "" || score === 0 || files.length === 0) {
        alert("Please fill out all fields")
        return 
    }
    setIsLoading(true)
    if(user){
        const uuid = uuidv4()
        const photoInfo = await uploadFiles(files, user.uid, uuid)
        const destinationEntry = createDestinationEntryInfo(uuid, user.uid, user.displayName ?? "THIS PERSON DOESN'T HAVE A DISPLAY NAME LIKE WHY",photoInfo, notes, score, destination, [])
        await setDoc(doc(firestore, "destinationEntries", uuid), destinationEntry);
        setFiles([])
        onClose()
        setIsLoading(false)
    }   
  
    
  }
  const handleClose = () => {
    () => {
        setFiles([]) 
        onClose()
    }
  }
  return {
    setFiles, 
    tiles,
    handleChange,
    handleAdd,
    handleClose,
    setNotes,
    setScore,
    setDestination,
    isLoading
  }
}

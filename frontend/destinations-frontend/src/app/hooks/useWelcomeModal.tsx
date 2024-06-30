'use client'

import React, { use, useEffect, useState } from 'react'
import { useAuthentication } from '../contexts/AuthenticationContext';
import { uploadProfilePicture } from '../utils/ImageUtils';
import { useFirebase } from '../contexts/FirebaseContext';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { set } from 'firebase/database';
import { createUser } from '../models/User';
import { useGlobalContext } from '../contexts/GlobalContext';

export default function useWelcomeModal({onClose}: {onClose: () => void}){
    const [profilePicture, setProfilePicture] = useState<File | null>(null);
    const [name, setName] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [readyToSubmit, setReadyToSubmit] = useState<boolean>(false)
    const {user} = useAuthentication()
    const {setUserInfo} = useGlobalContext()
    const {firestore} = useFirebase()
  
    useEffect(() => {
        setReadyToSubmit(name != "" && username != "" && profilePicture != null)
        
    }, [name, username, profilePicture])

  const clearData = () => {
    setProfilePicture(null)
    setName("")
    setUsername("")
  }

    const doesUsernameExist = async () => {
        const usernameRef = doc(firestore, 'usernames', username.toLowerCase()); // Use lowercase to ensure case-insensitive uniqueness
        const usernameSnap = await getDoc(usernameRef);
    
        return usernameSnap.exists();
  };

  const handleAdd = async () => {
    if(!readyToSubmit) {
        alert("Please fill out all fields")
        return 
    }
    
    setIsLoading(true)
    if(user){
        if(!(await doesUsernameExist())){
            const photoInfo = await uploadProfilePicture(profilePicture!, user.uid)
            const userInfo = createUser(user.uid, name, username, photoInfo)
            setUserInfo(userInfo)
            await setDoc (doc(firestore, 'usernames', username.toLowerCase()), {uid: user.uid})
            await setDoc(doc(firestore, "users", user.uid), userInfo);
            handleClose()
        }else{
            alert("Username already exists")
        }    
    }
    setIsLoading(false)
    // if(destination === "" || score === 0 || files.length === 0) {
    //     alert("Please fill out all fields")
    //     return 
    // }
    // setIsLoading(true)
    // if(user){
    //     const uuid = uuidv4()
    //     const photoInfo = await uploadFiles(files, user.uid, uuid)
    //     const destinationEntry = createDestinationEntryInfo(uuid, user.uid, user.displayName ?? "THIS PERSON DOESN'T HAVE A DISPLAY NAME LIKE WHY",photoInfo, notes, score, destination, [])
    //     await setDoc(doc(firestore, "destinationEntries", uuid), destinationEntry);
    //     setIsLoading(false)
    //     handleClose()
    // }   
  
    
  }
  const handleClose = () => {
        clearData()
        onClose()
  }
  return {
    profilePicture,
    setProfilePicture,
    name,
    setName,
    username,
    setUsername,
    isLoading,
    handleAdd,
    handleClose,
    readyToSubmit
  }
}


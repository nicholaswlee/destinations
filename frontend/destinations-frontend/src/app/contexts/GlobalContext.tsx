'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { storage, FirebaseApp, firestore, auth } from '../libs/FirebaseApp';
import { FirebaseStorage } from 'firebase/storage';
import { Firestore, doc, getDoc } from 'firebase/firestore';
import { Auth } from 'firebase/auth';
import { useFirebase } from './FirebaseContext';
import { useAuthentication } from './AuthenticationContext';
import { User } from '../models/User';

interface GlobalContextProps {
    userInfo: User | null;
    isNewUser: boolean;
    setUserInfo: (userInfo: User) => void;
  }

  
export const GlobalContext = createContext <GlobalContextProps>({userInfo: null, isNewUser: true, setUserInfo: () => {}});

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const {firestore} = useFirebase()
    const [userInfo, setUserInfo] = useState<User | null>(null)
    const {user} = useAuthentication()
    const[newUser, setNewUser] = useState<boolean>(false)
    useEffect(() =>{
        const loadUserData = async () => {
            if(user){
                const userRef = doc(firestore, 'users', user.uid);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists()) {
                    const userData = userSnap.data() as User;
                    if (userData) {
                        setUserInfo(userData);
                        setNewUser(false)
                    }   
                }else{
                    setNewUser(true)
                }
            
            }
        }
        loadUserData()
    }
    , [user])

    useEffect(() => {
       if(userInfo){
           setNewUser(false)
       }
    }, [userInfo])
   
    return (
        <GlobalContext.Provider value={{isNewUser: newUser, userInfo, setUserInfo}}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

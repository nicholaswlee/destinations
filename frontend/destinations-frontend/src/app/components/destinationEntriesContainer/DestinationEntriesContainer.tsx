'use client'
import React, { useEffect, useState } from 'react'
import * as S from "./styled"
import { DestinationEntryInfo } from '@/app/models/DestinationEntryInfo'
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useFirebase } from '@/app/contexts/FirebaseContext'
import DestinationEntry from '../destinationEntry/DestinationEntry'
import { useAuthentication } from '@/app/contexts/AuthenticationContext'

function DestinationEntriesContainer({setCurrentEntry} : {setCurrentEntry: (entry: DestinationEntryInfo) => void}){
    const [data, setData] = useState<DestinationEntryInfo[]>([])
    const {firestore} = useFirebase()
    const {user} = useAuthentication()
    useEffect(() => {
         // Create a query with a limit of 10 documents
        const q = query(collection(firestore, 'destinationEntries'), orderBy('createdAt', 'desc'), limit(10));

        // Subscribe to real-time updates
        const unsubscribe = onSnapshot(q, (snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
            ...doc.data() as DestinationEntryInfo,
        }));
        setData(newData);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [])
  return <S.Container>
    {data.map((entry, index) => <DestinationEntry 
            key={index}
            onClick={() => setCurrentEntry(entry)}
            destination={entry.destinationId}
            username={entry.username}
            people={entry.withUsers}
            images={entry.images}
            notes={entry.notes} 
            score={entry.score}
          />) }
  </S.Container>
}

export default DestinationEntriesContainer
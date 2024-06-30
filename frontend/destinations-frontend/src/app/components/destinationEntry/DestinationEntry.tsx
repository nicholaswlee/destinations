'use client'
import React, { useEffect } from 'react'
import * as S from "./styled"
import { ButtonBase, CircularProgress, Divider } from '@mui/material'
import Score from '../score/Score'
import { getImageUrl } from '@/app/utils/ImageUtils'
import { ImageInfo } from '@/app/models/ImageInfo'

type DestinationEntryProps = {
  onClick: () => void;
  score: number;
  notes: string;
  destination: string;
  username: string;
  images: ImageInfo[];
  people: string[];
  profilePictureUrl: string;
}
function DestinationEntry({onClick, score, notes, destination, username, profilePictureUrl, images, people} : DestinationEntryProps) {
  const [imgUrls, setImgUrls] = React.useState<string[]>([])
  const [pfpUrl, setPfpUrl] = React.useState<string | null>(null)
  useEffect(() => {
    const fetchImages = async () => {
      const fetchedUrls = await Promise.all(images.map((image) => 
        getImageUrl(image.imagePath)
      ))
      setImgUrls(fetchedUrls)
      if(profilePictureUrl != undefined){
        setPfpUrl(await getImageUrl(profilePictureUrl))
      }
      

    }
    fetchImages()
  }, [])

  const createWithPerson = () => {
    if (people.length === 0) {
      return ""
    }
    return <>with  {people.map((p, idx) => <b key={idx}>{p},</b>)}, </>
  }

  return <>

    <S.StyledButtonBase  onClick={onClick}>
    <S.StyledEntry>
    <S.StyledRow>
      <S.StyledHeader>
      {pfpUrl && <S.ProfilePicture src={pfpUrl} alt="Profile Picture" />}
    <p><b>{username.split(" ")[0]}</b> went to <b>{destination}</b> {createWithPerson()}</p>
      </S.StyledHeader>
    <Score value={score}/>
    </S.StyledRow>
    <Divider style={{backgroundColor: "grey", height: "0.5x", padding: "0px 12px"}}/>
    <S.StyledColumn>
      <S.ImageRow>
      {imgUrls.length > 0 ? (
       imgUrls.map((imgUrl,idx) => <S.StyledImage key={idx} src={imgUrl} alt="Loaded from Firebase" />)
      ) : (
        <CircularProgress size={100} style={{color: "#034472"}}/>
      )}

      </S.ImageRow>
        <p style={{textAlign: "left"}}><b>Notes:</b> {notes === "" ? "This bitch ass user didn't put notes" : notes}</p>
    </S.StyledColumn>
    <Divider style={{backgroundColor: "grey", height: "1px"}}/>
    </S.StyledEntry>
    </S.StyledButtonBase>
  </>
}


export default DestinationEntry
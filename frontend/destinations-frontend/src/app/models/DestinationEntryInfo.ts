import { Timestamp } from "firebase/firestore";
import {ImageInfo} from "./ImageInfo";
import { Comment } from "./Comments";
import { Like } from "./Like";

export type DestinationEntryInfo = {
    id: string, 
    name: string,
    profilePictureUrl: string,
    userId: string,
    images: ImageInfo[],
    notes: string,
    score: number,
    destinationId: string
    withUsers: string[],
    createdAt: Timestamp,
    comments: Comment[],
    likes: Like[]
}

export const createDestinationEntryInfo = (id: string, userId: string, profilePictureUrl: string, name: string, images: ImageInfo[], notes: string, score: number, destinationId: string, withUsers: string[]): DestinationEntryInfo => {
    return {
        id,
        name,
        profilePictureUrl,
        userId,
        images,
        notes,
        score,
        destinationId,
        withUsers,
        comments: [],
        likes: [],
        createdAt: Timestamp.now()
    }
}
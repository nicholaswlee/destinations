import { Timestamp } from "firebase/firestore"

export type User = {
    id: string,
    name: string,
    username: string,
    rankedCount: number,
    profilePictureUrl: string,
    dateJoined: Timestamp,
    following: string[],  // following ids
    followers: string[] // follower ids
}

export const createUser = (id: string, name: string, username: string, profilePictureUrl: string): User => {
    return {
        id,
        name,
        username,
        rankedCount: 0,
        profilePictureUrl,
        dateJoined: Timestamp.now(),
        following: [],
        followers: []
    }
}
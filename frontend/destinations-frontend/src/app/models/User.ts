export type User = {
    id: String,
    firstName: String, 
    lastName: String,
    displayName: String,
    rankedCount: number,
    profilePictureUrl: String,
    dateJoined: Date,
    following: Set<String>,  // following ids
    followers: Set<String> // follower ids
}
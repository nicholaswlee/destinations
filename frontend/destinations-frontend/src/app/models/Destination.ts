import { ImageInfo } from "./ImageInfo"

export type Destination = {
    id: string,
    name: string, 
    longitude: number,
    latitude: number,
    rankedCount: number, 
    avgScore: number,
    images: ImageInfo[]
}

export const createDestination = (id: string, name: string, longitude: number, latitude: number, rankedCount: number, avgScore: number, images: ImageInfo[]): Destination => {
    return {
        id,
        name,
        longitude,
        latitude,
        rankedCount,
        avgScore,
        images
    }
}
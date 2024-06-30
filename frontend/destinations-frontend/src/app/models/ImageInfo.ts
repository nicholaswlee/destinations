export type ImageInfo = {
    description: string,
    imagePath: string
}

export const createImageInfo = (description: string, imagePath: string): ImageInfo => {
    return {
        description,
        imagePath
    }
}
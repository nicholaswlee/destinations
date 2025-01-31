import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../libs/FirebaseApp";

const BUCKET = "gs://destinations-2afdf.appspot.com/"
const IMAGES_FOLDER = "images/"
const PROFILE_PICTURE_FOLDER = "profilePictures/"

export const getImageUrl = async (imagePath: string): Promise<string> => {
  try {
    const reference = ref(storage, `${BUCKET}` + imagePath);
    const url = await getDownloadURL(reference)
    return url;
  } catch (error) {
    console.error('Error fetching image URL:', error);
    throw error;
  }
};

export const uploadProfilePicture = async (file: File, userId: string): Promise<string> => {
  try {
    const storageRef = ref(storage, generateProfilePicturePath(userId, file.name));
    const result = await uploadBytes(storageRef, file)
    return result.ref.fullPath;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}
export const uploadImage = async (file: File, userId: string, destinationEntryId: string): Promise<string> => {
  try {
    const storageRef = ref(storage, generateFilePath(userId, destinationEntryId, file.name));
    const result = await uploadBytes(storageRef, file)
    return result.ref.fullPath;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}

const generateProfilePicturePath = (userId: string, fileName: string): string => {
  return `${PROFILE_PICTURE_FOLDER}/${userId}/${fileName}`
}

const generateFilePath = (userId: string, destinationEntryId: string, fileName: string): string => {
  return `${IMAGES_FOLDER}/${userId}/${destinationEntryId}/${fileName}`
}

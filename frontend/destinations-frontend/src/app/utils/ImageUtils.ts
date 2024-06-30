import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../libs/FirebaseApp";

const BUCKET = "gs://destinations-2afdf.appspot.com/"
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

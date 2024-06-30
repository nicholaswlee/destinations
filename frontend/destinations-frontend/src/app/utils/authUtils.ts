import { auth, provider } from '@/app/libs/FirebaseApp';
import { signInWithPopup, signOut, User, getIdToken } from 'firebase/auth';

export const signInWithGoogle = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google: ", error);
    return null;
  }
};

export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out: ", error);
  }
};

export const getCurrentUserToken = async (): Promise<string | null> => {
  const user = auth.currentUser;
  if (user) {
    return await getIdToken(user);
  } else {
    return null;
  }
};
import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./components/homePage/HomePage";
import { FirebaseProvider } from "./contexts/FirebaseContext";
import LoginPage from "./components/loginPage/LoginPage";
import { AuthenticationContextProvider } from "./contexts/AuthenticationContext";
import { GlobalContextProvider } from "./contexts/GlobalContext";

export default function Home() {
  return <FirebaseProvider>
    <AuthenticationContextProvider>
      <GlobalContextProvider>
      <LoginPage/>
      </GlobalContextProvider>
   
    </AuthenticationContextProvider>

      </FirebaseProvider>
}

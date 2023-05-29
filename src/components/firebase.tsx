// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQgHff_KuQNXiXT8owS5J6IVSRHLanWY0",
  authDomain: "fir-authentication-41bf3.firebaseapp.com",
  projectId: "fir-authentication-41bf3",
  storageBucket: "fir-authentication-41bf3.appspot.com",
  messagingSenderId: "1043689318027",
  appId: "1:1043689318027:web:a2118870e20baf9af9168e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const usersRef = collection(db, "users");

export default app;

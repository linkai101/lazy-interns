import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDE6fXfYuSkiRH4G5HXPLkFyoA3p7cj7Vc",
  authDomain: "lazy-interns.firebaseapp.com",
  projectId: "lazy-interns",
  storageBucket: "lazy-interns.firebasestorage.app",
  messagingSenderId: "43277114225",
  appId: "1:43277114225:web:2322d58d4a7e29455bb4d0"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const firestore = getFirestore(app);
// export const auth = getAuth(app);
export default app;
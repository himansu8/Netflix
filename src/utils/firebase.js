// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnM9Vk_D3y13CcU8BxfIJHmRB3K96gNaA",
  authDomain: "netflix-162c0.firebaseapp.com",
  projectId: "netflix-162c0",
  storageBucket: "netflix-162c0.appspot.com",
  messagingSenderId: "422769382526",
  appId: "1:422769382526:web:51d9b27701455d810bf42f",
  measurementId: "G-T3EQDBG2X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
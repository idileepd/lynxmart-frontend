// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAtO2TVe-jcy_SIiI21k1eG-s6ahApQy_M',
  authDomain: 'lynx-mart.firebaseapp.com',
  projectId: 'lynx-mart',
  storageBucket: 'lynx-mart.appspot.com',
  messagingSenderId: '1058024971087',
  appId: '1:1058024971087:web:4eae43ed32ef276b90033a',
  measurementId: 'G-0Q2JGXQ4B4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

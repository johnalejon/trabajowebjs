// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRMl1wEQ7zdzOvTCuHC5k7et4k4xvx6lk",
  authDomain: "actividad-web-df530.firebaseapp.com",
  projectId: "actividad-web-df530",
  storageBucket: "actividad-web-df530.appspot.com",
  messagingSenderId: "667439675434",
  appId: "1:667439675434:web:cd97d2267b687f707fab53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FirebaseFirestore = getFirestore(app);

export{
  FirebaseFirestore,
}
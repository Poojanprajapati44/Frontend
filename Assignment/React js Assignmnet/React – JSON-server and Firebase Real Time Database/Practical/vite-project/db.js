// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgt64usL1-puSGtS2Ue9_GXdtOR661cOo",
  authDomain: "fir-43bcd.firebaseapp.com",
  projectId: "fir-43bcd",
  storageBucket: "fir-43bcd.firebasestorage.app",
  messagingSenderId: "124511278626",
  appId: "1:124511278626:web:04be18dfa3e37f43359c7b",
  measurementId: "G-JQ57M7TWRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}
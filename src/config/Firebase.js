// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDGGhc8_LIq_DWwh3ZEeGRa72dyJ649chw",
	authDomain: "school-projects-7f9e7.firebaseapp.com",
	projectId: "school-projects-7f9e7",
	storageBucket: "school-projects-7f9e7.firebasestorage.app",
	messagingSenderId: "284411444212",
	appId: "1:284411444212:web:8021c81666c0cc13ffd7a1",
	measurementId: "G-VB21HGY7H8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const userAuth = getAuth(app);
export const userdb = getFirestore(app);

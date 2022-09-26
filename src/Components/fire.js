// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXLX6NF4gXaY_wnYXsjDloZQxcqFknwfU",
  authDomain: "jobportal-24453.firebaseapp.com",
  projectId: "jobportal-24453",
  storageBucket: "jobportal-24453.appspot.com",
  messagingSenderId: "13641821672",
  appId: "1:13641821672:web:083a64b7225db3f097085d"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}
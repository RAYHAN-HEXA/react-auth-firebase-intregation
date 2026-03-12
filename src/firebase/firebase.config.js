// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCxd_zGvKrhN3JfLlVjGvCbTMO9bbo5lGs",
  authDomain: "fir-auth-intregation-bac66.firebaseapp.com",
  projectId: "fir-auth-intregation-bac66",
  storageBucket: "fir-auth-intregation-bac66.firebasestorage.app",
  messagingSenderId: "874755854260",
  appId: "1:874755854260:web:24db8113dfef3dfde46ce1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
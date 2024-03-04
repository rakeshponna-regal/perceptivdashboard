// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-D1erkHJaiHzv37tTQJJnguEywtvN4OY",
  authDomain: "authenticationsample-66ff2.firebaseapp.com",
  projectId: "authenticationsample-66ff2",
  storageBucket: "authenticationsample-66ff2.appspot.com",
  messagingSenderId: "115762314622",
  appId: "1:115762314622:web:082ed233e28fef8344872f",
  measurementId: "G-1597VVCBHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const analytics = getAnalytics(app);

export { app, auth };
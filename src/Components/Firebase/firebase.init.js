// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZUUU3wFHmzQiS9Z7rAcGTskP8ng-D_N0",
  authDomain: "assignment-11-explore-canada.firebaseapp.com",
  projectId: "assignment-11-explore-canada",
  storageBucket: "assignment-11-explore-canada.appspot.com",
  messagingSenderId: "917351526962",
  appId: "1:917351526962:web:d2945f0f89d38ca639022b",
  measurementId: "G-P27JSW03MF"
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId:process.env.REACT_APP_measurementId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
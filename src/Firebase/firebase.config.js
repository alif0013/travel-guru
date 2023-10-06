// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD78BCDE2hnMnvBjmmvneIfdifbeEEnVtA",
  authDomain: "travel-guru-8b8e3.firebaseapp.com",
  projectId: "travel-guru-8b8e3",
  storageBucket: "travel-guru-8b8e3.appspot.com",
  messagingSenderId: "662762037488",
  appId: "1:662762037488:web:b5c7105697da7be1a96235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
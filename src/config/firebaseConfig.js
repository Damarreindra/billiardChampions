// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbyaZjUlebvk2lOB-HpMlGBjYaXHe7fB0",
  authDomain: "billiardchamps-9cc56.firebaseapp.com",
  projectId: "billiardchamps-9cc56",
  storageBucket: "billiardchamps-9cc56.appspot.com",
  messagingSenderId: "808153010478",
  appId: "1:808153010478:web:91ccb1dd1a961523cceabf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
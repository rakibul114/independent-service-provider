import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp87E7lGmqbZGZMYcpPt1DbbSoPosb5qY",
  authDomain: "moon-travel-9bbd5.firebaseapp.com",
  projectId: "moon-travel-9bbd5",
  storageBucket: "moon-travel-9bbd5.appspot.com",
  messagingSenderId: "633603045503",
  appId: "1:633603045503:web:9ae5ddd06cf2f1701d274a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
// Import the necessary Firebase services you need individually
import { initializeApp } from 'firebase/app';
import 'firebase/auth'; // Import other Firebase services you plan to use

const firebaseConfig = {
    apiKey: "AIzaSyCP-ObEGbM2yJwV04pgukSMPkp33H_1Nzc",
    authDomain: "to-do-app-24bac.firebaseapp.com",
    projectId: "to-do-app-24bac",
    storageBucket: "to-do-app-24bac.appspot.com",
    messagingSenderId: "354199606231",
    appId: "1:354199606231:web:ac3326fd9a71aa52c5b192"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services as needed
export const auth = app.auth(); // Example: Export the auth service
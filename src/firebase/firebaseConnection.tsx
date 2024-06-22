import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCea_qFKO310AzSdM8nIchDOZxl_xl81uU",
    authDomain: "projeto-professor-8b2a4.firebaseapp.com",
    projectId: "projeto-professor-8b2a4",
    storageBucket: "projeto-professor-8b2a4.appspot.com",
    messagingSenderId: "186741694181",
    appId: "1:186741694181:web:df3a587e2f0c5786bdfe0c",
    measurementId: "G-9Y58X7C45J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
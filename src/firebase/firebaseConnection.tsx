import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGSrJaT5K3yUvffjIlqocpuJ9tgzGNmrs",
  authDomain: "projeto-escola-c937a.firebaseapp.com",
  projectId: "projeto-escola-c937a",
  storageBucket: "projeto-escola-c937a.appspot.com",
  messagingSenderId: "250579177861",
  appId: "1:250579177861:web:ff1f286293696f390d34ec",
  measurementId: "G-1NRH8MSZYL",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };

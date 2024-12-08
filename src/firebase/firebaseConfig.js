import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzjm-yYZHfEj-IBkl4icCfxOMuDw4SjfU",
  authDomain: "gympro-24aca.firebaseapp.com",
  projectId: "gympro-24aca",
  storageBucket: "gympro-24aca.firebasestorage.app",
  messagingSenderId: "939782192270",
  appId: "1:939782192270:web:12f146d0db2c1ef1885ddf",
  measurementId: "G-G6K5SV30J8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
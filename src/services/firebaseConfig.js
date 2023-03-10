import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzlY091r0Ih8eCt0L2GPIDDMh3h-Rq5F8",
  authDomain: "mealstogo-f520c.firebaseapp.com",
  projectId: "mealstogo-f520c",
  storageBucket: "mealstogo-f520c.appspot.com",
  messagingSenderId: "1092909165400",
  appId: "1:1092909165400:web:532c140027a955b1c7132d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

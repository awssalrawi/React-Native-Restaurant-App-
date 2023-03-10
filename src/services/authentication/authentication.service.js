// import firebase from "firebase/compat/app";
// // const auth = firebase.auth();
// require("firebase/auth");
// export const loginRequest = (email, password) => {
//   firebase.auth().signInWithEmailAndPassword(email, password);
// };

import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

console.log("Im here");
// const auth = getAuth(firebaseApp);

export const loginRequest = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};

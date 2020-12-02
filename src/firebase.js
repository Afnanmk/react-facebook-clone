import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPDRzZN_NtuoSosnqzudiHFkawrhO4Q_g",
  authDomain: "facebook-clone-fda72.firebaseapp.com",
  databaseURL: "https://facebook-clone-fda72.firebaseio.com",
  projectId: "facebook-clone-fda72",
  storageBucket: "facebook-clone-fda72.appspot.com",
  messagingSenderId: "542083760607",
  appId: "1:542083760607:web:cd8f78d7263e71ffeb446a",
  measurementId: "G-PEF5XN015D"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

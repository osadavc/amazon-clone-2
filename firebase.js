import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIRBASE_API_KEY,
  authDomain: "clone-a49fe.firebaseapp.com",
  projectId: "clone-a49fe",
  storageBucket: "clone-a49fe.appspot.com",
  messagingSenderId: "950975958647",
  appId: "1:950975958647:web:e0ed758de6c3ee0b9d0072",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };

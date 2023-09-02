import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYHmdyAN-uVcgP9RjEzOo9wGv94rZ0z5M",
  authDomain: "music-e27f6.firebaseapp.com",
  projectId: "music-e27f6",
  storageBucket: "music-e27f6.appspot.com",
  messagingSenderId: "744671828648",
  appId: "1:744671828648:web:b54f1ef5efd9eeb8f2809d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};

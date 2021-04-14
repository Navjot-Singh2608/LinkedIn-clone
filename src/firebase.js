import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwIldf2VwPFsM5YEkgpMfjq5IsLihhLrM",
  authDomain: "linkedin-clone-9850a.firebaseapp.com",
  projectId: "linkedin-clone-9850a",
  storageBucket: "linkedin-clone-9850a.appspot.com",
  messagingSenderId: "351472443324",
  appId: "1:351472443324:web:06e122ec4996589daf95b9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

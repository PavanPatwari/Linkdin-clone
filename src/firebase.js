import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAFWh1IbPHSRMGjhygmtOD784LuPHMyz4s",
  authDomain: "linkdin-clone-5ea7d.firebaseapp.com",
  projectId: "linkdin-clone-5ea7d",
  storageBucket: "linkdin-clone-5ea7d.appspot.com",
  messagingSenderId: "384240470608",
  appId: "1:384240470608:web:3460b83190f89f52515f55"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA0pHc74Wx_FLpUFXjUIg9hvar1GjN579c",
    authDomain: "slack-clone-74fe0.firebaseapp.com",
    projectId: "slack-clone-74fe0",
    storageBucket: "slack-clone-74fe0.appspot.com",
    messagingSenderId: "807410914819",
    appId: "1:807410914819:web:1342de58a35660e039e036",
    measurementId: "G-4F0B8TNYY2"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {db, auth,provider};
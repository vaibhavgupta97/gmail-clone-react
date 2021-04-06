
import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEMqN1gYA-HVcnBkj0WfbR4GDlNOT-dzU",
    authDomain: "react-slack-clone-9dbdd.firebaseapp.com",
    projectId: "react-slack-clone-9dbdd",
    storageBucket: "react-slack-clone-9dbdd.appspot.com",
    messagingSenderId: "285608733291",
    appId: "1:285608733291:web:399365a8f13bcafa675f2e",
    measurementId: "G-RGCN12MJMT"
  };
const firebaseApp =firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export {db,auth,provider};
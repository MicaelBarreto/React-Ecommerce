import firebase from 'firebase/app';
import 'firebase/filestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD4oR9MoqC1PPPId9LSMUoOXVkx_tzmF_I",
    authDomain: "e-commerce-db-72b1f.firebaseapp.com",
    databaseURL: "https://e-commerce-db-72b1f.firebaseio.com",
    projectId: "e-commerce-db-72b1f",
    storageBucket: "e-commerce-db-72b1f.appspot.com",
    messagingSenderId: "191739421155",
    appId: "1:191739421155:web:6f19172ff9eae817b1c0d6",
    measurementId: "G-CJP9960D3L"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
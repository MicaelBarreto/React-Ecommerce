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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log(error);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
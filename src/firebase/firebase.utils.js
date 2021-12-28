import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBaq7S3wUa6DPW26aj46cDilItbUdsQ4Sg',
  authDomain: 'online-store-79932.firebaseapp.com',
  projectId: 'online-store-79932',
  storageBucket: 'online-store-79932.appspot.com',
  messagingSenderId: '338052714714',
  appId: '1:338052714714:web:aa9b92f492a724f14c55e3',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const useRef = fireStore.doc(`users/${userAuth.uid}`);
  const snapshot = await useRef.get();
  if (!snapshot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await useRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('error creating user', error);
    }
  }
  return useRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

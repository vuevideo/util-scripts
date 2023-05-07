import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig, emailAddress, password } from './keys.js';

const app = initializeApp(firebaseConfig);

const getIdToken = () => {
  const auth = getAuth();

  signInWithEmailAndPassword(auth, emailAddress, password)
    .then((userCredential) => userCredential.user.getIdToken())
    .then((data) => console.log(`AUTH KEY:---- \n${data}\n\n`));
};

getIdToken();


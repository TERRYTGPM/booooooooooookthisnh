import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBJyepk3n590vmYGm_TllzAO7QeRDLlYR8",
  authDomain: "bookdonation-c4a09.firebaseapp.com",
  projectId: "bookdonation-c4a09",
  storageBucket: "bookdonation-c4a09.appspot.com",
  messagingSenderId: "395953423211",
  appId: "1:395953423211:web:dd6476e86a062447f9c22e"
};
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

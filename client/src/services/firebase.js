import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyDh_ww9FtJlFyFFfC_cGh9z6zKyzoi27Cg',
  authDomain: 'stripe-payments-js.firebaseapp.com',
  projectId: 'stripe-payments-js',
  storageBucket: 'stripe-payments-js.appspot.com',
  messagingSenderId: '497061365193',
  appId: '1:497061365193:web:392e89b05c7c7dd4a19418',
  measurementId: 'G-PYEMB5EM4N',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

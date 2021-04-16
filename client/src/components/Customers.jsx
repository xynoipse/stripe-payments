import firebase from 'firebase/app';
import { auth, db } from '../services/firebase';

export const SignIn = () => {
  const signIn = async () => {
    const credential = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const { uid, email } = credential.user;
    db.collection('users').doc(uid).set({ email }, { merge: true });
  };

  return (
    <button className="btn btn-primary" onClick={signIn}>
      Sign In with Google
    </button>
  );
};

export const SignOut = (props) => {
  return (
    props.user && (
      <button className="btn btn-outline-secondary" onClick={() => auth.signOut()}>
        Sign Out User {props.user.uid}
      </button>
    )
  );
};

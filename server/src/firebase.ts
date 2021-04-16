import * as firebaseAdmin from 'firebase-admin';

// Initialize Firebase Admin resources
firebaseAdmin.initializeApp();

export const db = firebaseAdmin.firestore();
export const auth = firebaseAdmin.auth();

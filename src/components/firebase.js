// import firebase from 'firebase';
// import "firebase/auth";
// import "firebase/firestore";

import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const config = {

};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.firestore()
export default firebase;



import app from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";

import firebaseConfig from "./config";

const firebase = app.initializeApp(firebaseConfig);
firebase.db = app.firestore();
firebase.storage = app.storage();

export default firebase;

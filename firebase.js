import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  deleteUser
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    addDoc,
    increment,
    serverTimestamp,
    query,
    where,
    writeBatch
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDF53Ycf5GWoxXCn85G7koiU8xzCD0vw3M",
  authDomain: "trash-bin-incentive-system.firebaseapp.com",
  projectId: "trash-bin-incentive-system",
  storageBucket: "trash-bin-incentive-system.firebasestorage.app",
  messagingSenderId: "62853098914",
  appId: "1:62853098914:web:2c4f2fc944d37b45b6d6fb",
  measurementId: "G-H22NWXSX45"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    collection,
    getDocs,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    addDoc,
    increment,
    serverTimestamp,
    query,
    where,
    writeBatch,
    auth,
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    deleteUser
};  
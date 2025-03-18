// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
    getDatabase,
    ref,
    set,
    push,
    get,
    child,
    query,
    orderByChild,
    equalTo,
    update,
    onValue,
} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCpkvk8RkeheQls2SoRWXp_4lHXOk1QQOc",

    authDomain: "hmif-jamming.firebaseapp.com",

    databaseURL:
        "https://hmif-jamming-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "hmif-jamming",

    storageBucket: "hmif-jamming.appspot.com",

    messagingSenderId: "463524725055",

    appId: "1:463524725055:web:0941eba16b1a796535938a",

    measurementId: "G-6W8BQBJZ07",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export {
    database,
    ref,
    set,
    push,
    get,
    child,
    query,
    orderByChild,
    equalTo,
    update,
    onValue,
};

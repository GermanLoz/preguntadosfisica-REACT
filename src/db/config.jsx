import React from 'react'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDH1Vftd2r_9gI6kLpk3M1p7GAFmikFzkQ",
    authDomain: "app-contactos-react.firebaseapp.com",
    databaseURL: "https://app-contactos-react-default-rtdb.firebaseio.com",
    projectId: "app-contactos-react",
    storageBucket: "app-contactos-react.appspot.com",
    messagingSenderId: "921068584989",
    appId: "1:921068584989:web:fde00559b62ff8d87606f4",
    measurementId: "G-KN5V2N0K47"
  };
const fire = firebase.initializeApp(firebaseConfig);

export {fire}

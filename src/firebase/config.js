import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD3cw0N6EYEfBX9pdI8mzw1wgpbLKxzeh0",
  authDomain: "firegram-631a3.firebaseapp.com",
  databaseURL: "https://firegram-631a3.firebaseio.com",
  projectId: "firegram-631a3",
  storageBucket: "firegram-631a3.appspot.com",
  messagingSenderId: "274299116457",
  appId: "1:274299116457:web:f127c0cc5bc388483442b8"
};

firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

export { projectStorage, projectFirestore }
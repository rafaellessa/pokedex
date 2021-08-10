import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCkPaTebPqjV0uP0Z2RJ7x1Xn6uAJO8TeU",
  authDomain: "pokedex-377e3.firebaseapp.com",
  projectId: "pokedex-377e3",
  storageBucket: "pokedex-377e3.appspot.com",
  messagingSenderId: "207613663219",
  appId: "1:207613663219:web:b8f59f0602dbcb7a086486",
  measurementId: "G-5ZG7ZJP4VQ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyA_NkH0CvI-vnuMFLuGN0AgEdYsx4zp0lI',
  authDomain: 'chat-web-app-cedc8.firebaseapp.com',
  databaseURL: 'https://chat-web-app-cedc8-default-rtdb.firebaseio.com/',
  projectId: 'chat-web-app-cedc8',
  storageBucket: 'chat-web-app-cedc8.appspot.com',
  messagingSenderId: '51507546944',
  appId: '1:51507546944:web:9ee08a0cd9ceca17a188a5',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();

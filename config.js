import firebase from 'firebase';

//initialize your database
var firebaseConfig = {
  apiKey: "AIzaSyBli8Na49kCRwuTNS8nouc3umeO0inF4mA",
  authDomain: "pro-60-e88d8.firebaseapp.com",
  databaseURL: "https://pro-60-e88d8-default-rtdb.firebaseio.com",
  projectId: "pro-60-e88d8",
  storageBucket: "pro-60-e88d8.appspot.com",
  messagingSenderId: "954779601496",
  appId: "1:954779601496:web:dc8fd99f8d0d690e95582d"
};

  firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  
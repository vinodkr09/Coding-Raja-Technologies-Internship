let firebaseConfig = {
    apiKey: "AIzaSyD3c4_SL4ANqESBG9fJ1AX0y5XcQEGFh1o",
    authDomain: "blogging-website-b9e01.firebaseapp.com",
    projectId: "blogging-website-b9e01",
    storageBucket: "blogging-website-b9e01.appspot.com",
    messagingSenderId: "333043968729",
    appId: "1:333043968729:web:3bb19be5e86d49d1b1ecc8"
  };

  
  const app = initializeApp(firebaseConfig);
  

  let db = firebase.firestore();

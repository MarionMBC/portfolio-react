// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsI9yVbtjFXxsX7ra1SkmLyBbEJ5ei2vE",
    authDomain: "portafolioreact-af2d1.firebaseapp.com",
    projectId: "portafolioreact-af2d1",
    storageBucket: "portafolioreact-af2d1.appspot.com",
    messagingSenderId: "760392872032",
    appId: "1:760392872032:web:19837934b3c3b64a83d305"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Reference messages collection
var messagesRef = app.database().ref('messages');


// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
export function submitForm(e){
  e.preventDefault();

  //Get value
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

/*   // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000); */

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
   
    email: email,

    message: message
  });
}


export default app;


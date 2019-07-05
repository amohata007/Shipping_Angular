// Initialize Firebase
var config = {
  apiKey: "AIzaSyAF_ZLTrAA9oOxQnY-z9-8IFQNWSu0GFqs",
  authDomain: "prac-6398b.firebaseapp.com",
  databaseURL: "https://prac-6398b.firebaseio.com",
  projectId: "prac-6398b",
  storageBucket: "",
  messagingSenderId: "17645999972"  
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
window.onload=function(){
var el = document.getElementById('contactForm');
el.addEventListener('submit', submitForm);
}
// Submit form
function submitForm(e){
e.preventDefault();

//Get value
var name = getInputVal('name');
var company = getInputVal('company');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');

// Save message
saveMessage(name, company, email, phone, message);

// Show alert
document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);

// Clear form
document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id){
return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
var newMessageRef = messagesRef.push();
newMessageRef.set({
  name: name,
  company: company,
  email: email,
  phone: phone,
  message: message
});
}

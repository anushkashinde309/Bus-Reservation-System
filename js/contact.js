// =====================================
// SmartBus Bus Reservation System
// Contact Form JavaScript
// =====================================



import {

    database

} from "./firebase-config.js";



import {

    ref,
    push,
    set

} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";





// =====================================
// Contact Form Submit
// =====================================


const contactForm = 
document.getElementById("contactForm");



if(contactForm){



contactForm.addEventListener("submit",(e)=>{


e.preventDefault();





let name =
document.getElementById("name").value;



let email =
document.getElementById("email").value;



let mobile =
document.getElementById("mobile").value;



let message =
document.getElementById("message").value;







// Create New Contact ID


let contactRef = 
push(ref(database,"contacts"));






set(contactRef,{


contactId:contactRef.key,


name:name,


email:email,


mobile:mobile,


message:message,


date:new Date().toLocaleDateString()



})



.then(()=>{


alert("Message Sent Successfully!");



contactForm.reset();



})



.catch((error)=>{


alert(error.message);



});



});



}
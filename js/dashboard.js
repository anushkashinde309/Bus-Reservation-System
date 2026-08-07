// =====================================
// SmartBus Bus Reservation System
// Dashboard JavaScript
// =====================================



import {

    auth,
    database

} from "./firebase-config.js";



import {

    onAuthStateChanged,
    signOut

} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";



import {

    ref,
    get,
    child

} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";





// =====================================
// User Dashboard Data
// =====================================


onAuthStateChanged(auth,(user)=>{


if(user){


loadUserData(user.uid);


loadBookings(user.uid);



}

else{


window.location.href="login.html";


}



});








// =====================================
// Load User Profile
// =====================================


function loadUserData(uid){


const dbRef = ref(database);



get(child(dbRef,"users/"+uid))


.then((snapshot)=>{



if(snapshot.exists()){



let userData = snapshot.val();




let userName =
document.getElementById("userName");

let profileName =
document.getElementById("profileName");

let profileEmail =
document.getElementById("profileEmail");




if(userName){

userName.innerHTML =
userData.name;

}



if(profileName){

profileName.innerHTML =
userData.name;

}



if(profileEmail){

profileEmail.innerHTML =
userData.email;

}



}



})

.catch((error)=>{


console.log(error);


});



}









// =====================================
// Load Booking Data
// =====================================


function loadBookings(uid){



const dbRef = ref(database);



get(child(dbRef,"bookings"))


.then((snapshot)=>{



let count = 0;



let table =
document.getElementById("bookingTable");




if(snapshot.exists()){



let bookings = snapshot.val();



Object.keys(bookings).forEach((id)=>{


let booking = bookings[id];



if(booking.userId === uid){



count++;




if(table){


table.innerHTML += `


<tr>

<td>
${booking.bookingId}
</td>


<td>
${booking.passengerName}
</td>


<td>
${booking.journeyDate}
</td>


<td>
${booking.seat}
</td>


<td>
${booking.fare}
</td>


<td>
${booking.status}
</td>


</tr>


`;



}




}



});



}




let bookingCount =
document.querySelector(".dashboard-card:nth-child(2) h2");



if(bookingCount){


bookingCount.innerHTML=count;


}



})

.catch((error)=>{


console.log(error);


});



}








// =====================================
// Logout
// =====================================


const logoutBtn =
document.getElementById("logoutBtn");



if(logoutBtn){



logoutBtn.addEventListener("click",()=>{


signOut(auth)

.then(()=>{


alert("Logout Successful");


window.location.href="login.html";


})


.catch((error)=>{


alert(error.message);


});



});



}
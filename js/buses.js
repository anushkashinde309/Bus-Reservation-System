// =====================================
// SmartBus Bus Reservation System
// Bus Search JavaScript
// =====================================



import {

    database

} from "./firebase-config.js";



import {

    ref,
    get,
    child

} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";





// =====================================
// Search Bus Function
// =====================================


window.searchBus = function(){



let source = document.getElementById("source").value.trim();


let destination = document.getElementById("destination").value.trim();



if(source === "" || destination === ""){


alert("Please enter Source and Destination");


return;


}



loadBuses(source,destination);



};







// =====================================
// Load Bus Data
// =====================================


function loadBuses(source,destination){



const dbRef = ref(database);



get(child(dbRef,"buses"))



.then((snapshot)=>{



let busContainer = document.getElementById("busContainer");



busContainer.innerHTML = "";





if(snapshot.exists()){



let buses = snapshot.val();


let found = false;



Object.keys(buses).forEach((id)=>{



let bus = buses[id];




if(

bus.source.toLowerCase() === source.toLowerCase()

&&

bus.destination.toLowerCase() === destination.toLowerCase()


){



found = true;



busContainer.innerHTML += `



<div class="bus-card">


<h3>

${bus.name}

</h3>



<div class="bus-info">


<span>
Route:
${bus.source} → ${bus.destination}
</span>


<span>
Time:
${bus.time}
</span>


<span>
Seats:
${bus.seats}
</span>


<span>
Fare:
₹${bus.fare}
</span>



</div>



<a href="booking.html" class="btn">

Book Now

</a>


</div>



`;



}



});






if(!found){


busContainer.innerHTML = `

<div class="card">

<h3>
No Bus Found
</h3>

<p>
No available bus for this route.
</p>

</div>

`;


}




}

else{


busContainer.innerHTML = `

<div class="card">

<h3>
No Data Available
</h3>

<p>
Please add buses in Firebase Database.
</p>


</div>


`;



}



})


.catch((error)=>{


console.log(error);


alert("Unable to load bus data");


});



}








// =====================================
// Default Bus Loading
// =====================================


window.addEventListener("load",()=>{


let container = document.getElementById("busContainer");



if(container){


loadDefaultBuses();


}



});







function loadDefaultBuses(){



const dbRef = ref(database);



get(child(dbRef,"buses"))



.then((snapshot)=>{



if(snapshot.exists()){



let busContainer =
document.getElementById("busContainer");



busContainer.innerHTML="";



let buses = snapshot.val();



Object.keys(buses).forEach((id)=>{



let bus = buses[id];



busContainer.innerHTML += `


<div class="bus-card">


<h3>
${bus.name}
</h3>


<div class="bus-info">


<span>
${bus.source} → ${bus.destination}
</span>


<span>
Time: ${bus.time}
</span>


<span>
Seats Available: ${bus.seats}
</span>


<span>
Fare: ₹${bus.fare}
</span>



</div>



<a href="booking.html" class="btn">

Book Now

</a>


</div>



`;



});



}



});


}
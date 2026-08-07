// =====================================
// SmartBus Booking JavaScript
// =====================================

import { auth, database } from "./firebase-config.js";

import {
    ref,
    push,
    set
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";


// Logged in user
let currentUser = null;

// Selected seat
let selectedSeat = "";


// ==============================
// Check Login
// ==============================

onAuthStateChanged(auth, (user) => {

    if (user) {

        currentUser = user;

    } else {

        alert("Please login first.");

        window.location.href = "mybookings.html";

    }

});


// ==============================
// Seat Selection
// ==============================

window.addEventListener("DOMContentLoaded", () => {

    const seats = document.querySelectorAll(".seat");

    const selectedSeatInput =
        document.getElementById("selectedSeat");

    seats.forEach((seat) => {

        seat.addEventListener("click", () => {

            seats.forEach((s) => {

                s.classList.remove("selected");

            });

            seat.classList.add("selected");

            selectedSeat = seat.textContent.trim();

            if (selectedSeatInput) {

                selectedSeatInput.value = selectedSeat;

            }

        });

    });

});


// ==============================
// Booking Form
// ==============================

const bookingForm =
document.getElementById("bookingForm");

if (bookingForm) {

bookingForm.addEventListener("submit", (e) => {

e.preventDefault();


if (!currentUser) {

alert("Please Login");

return;

}


if (selectedSeat === "") {

alert("Please Select Seat");

return;

}


const passengerName =
document.getElementById("passengerName").value;

const mobile =
document.getElementById("mobile").value;

const email =
document.getElementById("email").value;

const journeyDate =
document.getElementById("journeyDate").value;

const fare =
document.getElementById("fare").value;


const bookingRef =
push(ref(database, "bookings"));


set(bookingRef, {

bookingId: bookingRef.key,

userId: currentUser.uid,

passengerName,

mobile,

email,

journeyDate,

seat: selectedSeat,

fare,

status: "Confirmed",

createdAt: new Date().toISOString()

})

.then(() => {

alert("Booking Successful!");

bookingForm.reset();

window.location.href =
"mybookings.html";

})

.catch((error) => {

console.error(error);

alert(error.message);

});

});

}
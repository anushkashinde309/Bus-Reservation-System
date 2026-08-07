// =====================================
// SmartBus Bus Reservation System
// Firebase Configuration File
// =====================================


// Firebase SDK Import

import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";


import { getAuth } 
from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";


import { getDatabase } 
from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";



// =====================================
// Firebase Configuration
// Replace with your Firebase Project Config
// =====================================


const firebaseConfig = {


  apiKey: "AIzaSyDgqzPkk7xOSzj5po5ElJl3z_q_qXSRXqs",
  authDomain: "bus-reservation-system-72094.firebaseapp.com",
  databaseURL: "https://bus-reservation-system-72094-default-rtdb.firebaseio.com",
  projectId: "bus-reservation-system-72094",
  storageBucket: "bus-reservation-system-72094.firebasestorage.app",
  messagingSenderId: "907551328890",
  appId: "1:907551328890:web:63fc9450907f62f77ac9c3",};




// =====================================
// Initialize Firebase
// =====================================


const app = initializeApp(firebaseConfig);



// Authentication

const auth = getAuth(app);



// Realtime Database

const database = getDatabase(app);




// Export Firebase Services

export {
    app,
    auth,
    database
};
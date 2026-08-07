// =====================================
// SmartBus Bus Reservation System
// Authentication JavaScript
// =====================================

import { auth, database } from "./firebase-config.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import {
    ref,
    set
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";


// =====================================
// Register
// =====================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Password does not match!");
            return;
        }

        try {

            const userCredential =
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

            const user = userCredential.user;

            await set(
                ref(database, "users/" + user.uid),
                {
                    uid: user.uid,
                    name: name,
                    email: email,
                    mobile: mobile,
                    role: "Passenger",
                    createdAt: new Date().toISOString()
                }
            );

            console.log("User data saved successfully");

            alert("Registration Successful!");

            window.location.href = "login.html";

        }

        catch (error) {

            console.error(error);

            alert(error.message);

        }

    });

}


// =====================================
// Login
// =====================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;

        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            alert("Login Successful!");

            window.location.href = "dashboard.html";

        }

        catch (error) {

            console.error(error);

            alert(error.message);

        }

    });

}


// =====================================
// Logout
// =====================================

const logoutBtn =
document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", async () => {

        try {

            await signOut(auth);

            alert("Logged Out Successfully!");

            window.location.href = "login.html";

        }

        catch (error) {

            console.error(error);

            alert(error.message);

        }

    });

}
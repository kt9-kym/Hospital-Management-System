// ==============================
// Hospital Management System
// script.js
// ==============================

// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    // If login form exists
    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            // Validation
            if (email === "" || password === "") {
                alert("Please fill in all fields or continue without login.");
                return;
            }

            // Save user email
            localStorage.setItem("patientEmail", email);

            // Fake login success
            alert("Login Successful!");

            // Open Dashboard
            window.location.href = "dashboard.html";

        });

    }

    const guestBtn = document.getElementById("guestBtn");
    const skipSignup = document.getElementById("skipSignup");

    if (guestBtn) {
        guestBtn.addEventListener("click", function () {
            localStorage.setItem("patientEmail", "Guest");
            window.location.href = "dashboard.html";
        });
    }

    if (skipSignup) {
        skipSignup.addEventListener("click", function (event) {
            event.preventDefault();
            localStorage.setItem("patientEmail", "Guest");
            window.location.href = "dashboard.html";
        });
    }

});
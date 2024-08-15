import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA7543ZekP2qwYAwbWAIq4AbsmOySr7J2c",
    authDomain: "food-web-ff292.firebaseapp.com",
    projectId: "food-web-ff292",
    storageBucket: "food-web-ff292.appspot.com",
    messagingSenderId: "492682208150",
    appId: "1:492682208150:web:b7223f3ed20971bd0133b7",
    measurementId: "G-FNFWZSNSMN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
    const signupButton = document.getElementById('sbtn');
    const showLoginButton = document.getElementById('showLogin');
    const showSignupButton = document.getElementById('showSignup');
    const signupForm = document.getElementById('signupForm');
    const signinForm = document.getElementById('signinForm');
    const signinFormContainer = document.getElementById('signinFormContainer');
    const signupFormContainer = document.querySelector('.form-container');

    if (signupButton) {
        signupButton.addEventListener('click', (event) => {
            event.preventDefault();

            let username = document.getElementById('username').value;
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;

            createUserWithEmailAndPassword(auth, email, password)
                .then((data) => {
                    const user = data.user;
                    Swal.fire({
                        icon: 'success',
                        title: 'Signup Successful',
                        text: `Welcome, ${username}! You have successfully signed up.`,
                    }).then(() => {
                        document.body.style.backgroundColor = "#DFF2BF";
                        signupForm.reset(); // Reset signup form fields
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: error.message,
                    });
                });
        });
    }

    if (showLoginButton) {
        showLoginButton.addEventListener('click', () => {
            signupFormContainer.style.display = 'none';
            signinFormContainer.style.display = 'block';
        });
    }

    if (showSignupButton) {
        showSignupButton.addEventListener('click', () => {
            signinFormContainer.style.display = 'none';
            signupFormContainer.style.display = 'block';
        });
    }

    const signinButton = document.getElementById('lbtn');
    if (signinButton) {
        signinButton.addEventListener('click', (event) => {
            event.preventDefault();

            let email = document.getElementById('signin-email').value;
            let password = document.getElementById('signin-password').value;

            signInWithEmailAndPassword(auth, email, password)
                .then((data) => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Sign In Successful',
                        text: `Welcome back! You have successfully signed in.`,
                    }).then(() => {
                        document.body.style.backgroundColor = "#DFF2BF";
                        signinForm.reset(); // Reset signin form fields
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: error.message,
                    });
                });
        });
    }
});

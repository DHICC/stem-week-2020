const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "binary") {
        alert("You have successfully logged in.");
        window.location.replace("https://www.youtube.com/watch?v=1GSjbWt0c9M");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

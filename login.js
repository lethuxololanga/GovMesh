// Hardcoded credentials for demo purposes
const validUsername = "admin";
const validPassword = "password123";

document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("login-error");

  // Check if the username and password are correct
  if (username === validUsername && password === validPassword) {
    // Store a flag in localStorage to indicate the user is logged in
    localStorage.setItem("isLoggedIn", "true");

    // Redirect to the quiz page
    window.location.href = "index.html";
  } else {
    // Display an error message
    errorMessage.textContent = "Invalid username or password!";
    errorMessage.style.display = "block";
  }
});

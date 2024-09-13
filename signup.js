document.getElementById("signup-form").addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent the form from submitting

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("signup-error");

  try {
    // Use relative URL for both development and production
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }), // Send the data to the backend
    });

    const result = await response.json(); // Get the result as JSON

    if (response.ok) {
      // Store login info and redirect to quiz
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username); // Store the username in localStorage
      window.location.href = "index.html"; // Redirect to quiz page
    } else {
      errorMessage.textContent = result.message; // Display the error message from the server
      errorMessage.style.display = 'block';
    }
  } catch (error) {
    console.error("Signup failed", error);
    errorMessage.textContent = 'Signup failed. Please try again.'; // Display a general error message
    errorMessage.style.display = 'block';
  }
});

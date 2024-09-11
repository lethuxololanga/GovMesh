document.getElementById("signup-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from submitting
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("signup-error");
  
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        // Store login info and redirect to quiz
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", result.username);
        window.location.href = "index.html"; // Redirect to quiz
      } else {
        errorMessage.textContent = result.message;
        errorMessage.style.display = 'block';
      }
    } catch (error) {
      console.error("Signup failed", error);
    }
  });
  
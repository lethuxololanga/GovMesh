let images = []; // To store the loaded JSON data
let currentIndex = 0; // Track the current image/question index
let failedAttempts = 0; // Track the number of failed attempts
const card = document.getElementById('card');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const feedbackElement = document.getElementById('feedback');
const infoListElement = document.getElementById('info-list');
const skipButton = document.createElement('button'); // Create a skip button

skipButton.textContent = 'Skip';
skipButton.style.display = 'none'; // Initially hidden
document.body.appendChild(skipButton); // Append the skip button to the document

// Fetch the data from the JSON file
async function loadData() {
  try {
    const response = await fetch('data.json?nocache=' + new Date().getTime());
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data loaded:", data);
    images = data; // Store the loaded data
    updateCard(); // Display the first question/image
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

// Update the card with the current image, question, and choices
function updateCard() {
  const image = images[currentIndex]; // Get the current image data
  card.innerHTML = `<img src="${image.src}" alt="${image.name}">`; // Display the image
  updateQuiz(image); // Update the quiz choices
  feedbackElement.style.display = 'none'; // Hide feedback initially
  infoListElement.innerHTML = ''; // Clear the info list
  skipButton.style.display = 'none'; // Hide skip button when a new question loads
  failedAttempts = 0; // Reset failed attempts
}

// Update the quiz with the choices for the current question/image
function updateQuiz(image) {
  questionElement.textContent = `Who is this?`;
  choicesElement.innerHTML = ''; // Clear previous choices

  // Display each choice as a radio button
  image.choices.forEach((choice, index) => {
    const choiceId = `choice-${index}`;
    const label = document.createElement('label');
    label.className = 'choice';
    label.innerHTML = `
      <input type="radio" name="answer" id="${choiceId}" value="${choice}">
      ${String.fromCharCode(65 + index)}. ${choice}
    `;
    label.addEventListener('click', () => checkAnswer(choice, image.name, image.info));
    choicesElement.appendChild(label);
  });
}

// Check the user's answer and provide feedback
function checkAnswer(selected, correct, info) {
  if (selected === correct) {
    feedbackElement.textContent = 'Correct!';
    feedbackElement.className = 'feedback correct'; // Set correct feedback style
    feedbackElement.style.display = 'block'; // Show feedback
    setTimeout(() => {
      goToNextImage(); // Move to the next image after a short delay
    }, 1000); // Adjust delay as needed
  } else {
    failedAttempts++; // Increment the number of failed attempts
    feedbackElement.textContent = 'Incorrect!';
    feedbackElement.className = 'feedback incorrect'; // Set incorrect feedback style
    feedbackElement.style.display = 'block'; // Show feedback

    if (failedAttempts === 3) {
      // After two failed attempts, show the skip button
      skipButton.style.display = 'inline-block';
    }

    const hint = generateHint(info[correct]); // Generate a hint for the incorrect answer
    if (hint) {
      showHint(hint); // Show the hint when clicked
    }
  }
}

// Generate a hint from the person's info without revealing their name
function generateHint(description) {
  if (!description) return null;

  const qualificationKeywords = ["minister", "president", "leader"];
  let hint = "";

  qualificationKeywords.forEach(keyword => {
    if (description.toLowerCase().includes(keyword)) {
      const sentences = description.split(".");
      sentences.forEach(sentence => {
        if (sentence.toLowerCase().includes(keyword)) {
          hint = sentence.trim();
        }
      });
    }
  });

  if (!hint) {
    hint = description.split(".")[0].trim();
  }

  return hint;
}

// Show a pop-up with the hint when clicked
function showHint(hint) {
  infoListElement.innerHTML = ''; // Clear previous hints
  const listItem = document.createElement('li');
  listItem.textContent = `Hint: Click for more information`;
  listItem.style.cursor = 'pointer';
  listItem.addEventListener('click', () => alert(hint)); // Show pop-up with the hint
  infoListElement.appendChild(listItem);
}

// Move to the next image/question
function goToNextImage() {
  previousIndex = currentIndex; // Store the current index before changing
  currentIndex = (currentIndex + 1) % images.length; // Move to the next image in the list
  updateCard(); // Update the card with the new image/question
}

// Skip to the next image/question after two failed attempts
skipButton.addEventListener('click', () => {
  goToNextImage();
  skipButton.style.display = 'none'; // Hide skip button after use
});

// Initialize the app by loading the data and setting up the first question/image
document.addEventListener('DOMContentLoaded', loadData);

document.getElementById('logout-button').addEventListener('click', function() {
  // Clear the login status and redirect to login page
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'login.html';
});
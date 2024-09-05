const card = document.getElementById("card");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const infoListElement = document.getElementById("info-list");


const images = [
  {
    src: "https://www.gcis.gov.za/sites/default/files/images/President-Cyril-Ramaphosa.jpg",
    name: "Cyril Ramaphosa",
    choices: [
      "Paul Mashatile",
      "Ramokgopa Kgosientsho",
      "Cyril Ramaphosa",
      "Nomakhosazana Meth",
    ],

    info: {
      "Cyril Ramaphosa": "Cyril Ramaphosa is the President of South Africa",
    },
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/images/Paul-Mashatile.jpg",
    name: "Paul Mashatile",
    choices: [
      "David Masondo",
      "Leon Schreiber",
      "Ronald Lamola",
      "Paul Mashatile",
    ],
    info: { "Paul Mashatile": "Paul Mashatile is the Deputy President of South Africa" },
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/JohnSteenhuisenMinisterAgriculture.jpg",
    name: "John Steenhuisen",
    choices: [
        "Aaron Motsoaledi", 
        "Pieter Groenewald", 
        "John Steenhuisen",
        "Alvin Botes"],
    info: {
      "John Steenhuisen": "John Steenhuisen is the Minister of Agriculture",
    },
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/MzwaneleNyhontsoMinisterLandReformRuralDevelopment.jpg",
    name: "Mzwanele Nyhontso",
    choices: [
        "Mzwanele Nyhontso", 
        "Ramokgopa Kgosientsho", 
        "Solly Malatsi", 
        "Samantha Graham"],
    info: {
      "Mzwanele Nyhontso":
        "Mzwanele Nyhontso is the Minister of Land Reform and Rural Development.",
    },
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/SiviweGwarubeMinisterBasicEducation.jpg",
    name: "Siviwe Gwarube",
    choices: [
        "Mmamoloko Kubayi", 
        "Siviwe Gwarube", 
        "Angie Motshekga", 
        "Thembi Nkadimeng"],
    info: {
      "Siviwe Gwarube":
        "Siviwe Gwarube is the Minister of Basic Education.",
    },
  },
];

let currentIndex = 0;
let previousIndex = null;

function updateCard() {
  const image = images[currentIndex];
  card.innerHTML = `<img src="${image.src}" alt="${image.name}">`;
  updateQuiz(image);
  feedbackElement.style.display = "none"; // Hide feedback initially
  infoListElement.innerHTML = ""; // Clear the info list
}

function updateQuiz(image) {
  questionElement.textContent = `Who is this?`;
  choicesElement.innerHTML = "";

  image.choices.forEach((choice, index) => {
    const choiceId = `choice-${index}`;
    const label = document.createElement("label");
    label.className = "choice";
    label.innerHTML = `
            <input type="radio" name="answer" id="${choiceId}" value="${choice}">
            ${String.fromCharCode(65 + index)}. ${choice}
        `;
    label.addEventListener("click", () =>
      checkAnswer(choice, image.name, image.info || {})
    ); // Handle cases where info might be undefined
    choicesElement.appendChild(label);
  });
}

function checkAnswer(selected, correct, info) {
  if (selected === correct) {
    feedbackElement.textContent = "Correct!";
    feedbackElement.className = "feedback correct"; // Set correct feedback style
    feedbackElement.style.display = "block"; // Show feedback
    setTimeout(() => {
      goToNextImage(); // Move to the next image after a delay
    }, 1000); // Adjust delay as needed
  } else {
    feedbackElement.textContent = "Incorrect!";
    feedbackElement.className = "feedback incorrect"; // Set incorrect feedback style
    feedbackElement.style.display = "block"; // Show feedback
    if (Object.keys(info).length > 0) {
      updateInfo(info); // Show the Did You Know section if info is available
    }
    setTimeout(() => {
      goToNextImage(); // Move to the next image after a delay
    }, 5000); // Wait 5 seconds before moving to the next question
  }
}

function updateInfo(info) {
  infoListElement.innerHTML = "";
  for (const [name, description] of Object.entries(info)) {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    listItem.addEventListener("click", () => alert(description));
    infoListElement.appendChild(listItem);
  }
}

function goToNextImage() {
  previousIndex = currentIndex; // Store the current index before changing
  currentIndex = (currentIndex + 1) % images.length;
  updateCard();
}

function goBack() {
  if (previousIndex !== null) {
    currentIndex = previousIndex; // Restore the previous index
    updateCard();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");
  const appContainer = document.querySelector(".app-container");

  hamburger.addEventListener("click", function () {
      navbar.classList.toggle("open");
      appContainer.classList.toggle("open");
  });
});


updateCard();


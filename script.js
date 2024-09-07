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
      "Ronald Lamola",
      "Pieter Groenewald",
      "Cyril Ramaphosa",
      "Parks Tau",
    ],
    info: {
      "Cyril Ramaphosa":
        "Matamela Cyril Ramaphosa is a South African businessman and politician serving as the 5th and current president of South Africa since 2018. A former anti-apartheid activist and trade union leader, Ramaphosa is also the president of the African National Congress",
    },
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/JohnSteenhuisenMinisterAgriculture.jpg",
    name: "John Steenhuisen",
    choices: [
      "Gayton McKenzie",
      "Leon Schreiber",
      "John Steenhuisen", 
      "Pieter Groenewald"
    ],
    info: { 
      "John Steenhuisen": "John Henry Steenhuisen is a South African politician who has served as the twentieth leader of the Opposition since October 2019 and has been the leader of the Democratic Alliance since November 2020, having served as the interim leader for one year from November 2019." },
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/SiviweGwarubeMinisterBasicEducation.jpg",
    name: "Siviwe Gwarube",
    choices: ["Sindisiwe Chikunga", "Lindiwe Ntshalintshali", "Siviwe Gwarube", "Barbara Creecy"],
    info: {
      "Siviwe Gwarube": "Siviwe Gwarube is a South African politician who is currently serving as Minister of Basic Education since July 2024. A member of the Democratic Alliance, she was the Chief Whip of the Official Opposition between August 2022 and June 2024.",
    },
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/images/Paul-Mashatile.jpg",
    name: "Paul Mashatile",
    choices: [
      "Thembi Nkadimeng",
      "Ramokgopa Kgosientsho",
      "Cyril Ramaphosa",
      "Paul Mashatile",
    ],
    info: {
      "Paul Mashatile": "Paulus Shipokosa Mashatile is a South African politician who is the 9th Deputy President of South Africa. He became Deputy President of the governing African National Congress in December 2022.",
    },
  },
];

let currentIndex = 0;

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
    choicesElement.appendChild(label);

    // Listen for 'change' event on input instead of click on label
    const radioInput = label.querySelector('input[type="radio"]');
    radioInput.addEventListener("change", () => {
      checkAnswer(choice, image.name, image.info || {});
    });
  });
}


function checkAnswer(selected, correct, info) {
  if (selected === correct) {
    feedbackElement.textContent = "Correct!";
    feedbackElement.className = "feedback correct"; // Set correct feedback style
    feedbackElement.style.display = "block"; // Show feedback

    if (currentIndex < images.length - 1) {
      setTimeout(() => {
        goToNextImage(); // Move to the next image after a delay
      }, 1000); // Adjust delay as needed
    } else {
      setTimeout(() => {
        feedbackElement.textContent = "Quiz complete!"; // Show quiz complete message
        feedbackElement.className = "feedback correct";
        feedbackElement.style.display = "block";
      }, 1000);
    }
  } else {
    feedbackElement.textContent = "Incorrect!";
    feedbackElement.className = "feedback incorrect"; // Set incorrect feedback style
    feedbackElement.style.display = "block"; // Show feedback

    if (Object.keys(info).length > 0) {
      updateInfo(info); // Show the Did You Know section if info is available
    }

    if (currentIndex < images.length - 1) {
      setTimeout(() => {
        goToNextImage(); // Move to the next image after a delay
      }, 5000); // Wait 5 seconds before moving to the next question
    } else {
      setTimeout(() => {
        feedbackElement.textContent = "Quiz complete!"; // Show quiz complete message
        feedbackElement.className = "feedback correct";
        feedbackElement.style.display = "block";
      }, 5000);
    }
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
  if (currentIndex < images.length - 1) {
    currentIndex += 1;
    updateCard();
  } else {
    feedbackElement.textContent = "Quiz complete!"; // Display a message when the quiz ends
    feedbackElement.className = "feedback correct";
    feedbackElement.style.display = "block"; // Show completion feedback
  }
}


updateCard();
const card = document.getElementById("card");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const infoListElement = document.getElementById("info-list");


const images = [
  {
    src: "/images/President-Cyril-Ramaphosa.jpg",
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
    src: "/images/Paul-Mashatile.jpg",
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
    src: "/images/JohnSteenhuisenMinister.jpg",
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
    src: "/images/MzwaneleNyhontso.jpg",
    name: "Mzwanele Nyhontso",
    choices: [
        "Mzwanele Nyhontso", 
        "Ramokgopa Kgosientsho", 
        " Solly Malatsi", 
        "Samantha Graham"],
    info: {
      "Mzwanele Nyhontso":
        "Mzwanele Nyhontso is the Minister of Land Reform and Rural Development.",
    },
  },
  {
    src: "/GovMesh/images/VelinkosiHlabisa.jpg",
    name: "Ramokgopa Kgosientsho",
    choices: ["Cat", "Ramokgopa Kgosientsho", "Mountain", "Beach"],
    info: {
      "Ramokgopa Kgosientsho":
        "Ramokgopa Kgosientsho is a South African politician.",
    },
  },
  {
    src: "/GovMesh/images/Ramokgopa-Kgosientsho.jpg",
    name: "Ramokgopa Kgosientsho",
    choices: ["Cat", "Ramokgopa Kgosientsho", "Mountain", "Beach"],
    info: {
      "Ramokgopa Kgosientsho":
        "Ramokgopa Kgosientsho is a South African politician.",
    },
  },
  {
    src: "/GovMesh/images/SiviweGwarube.jpg",
    name: "Siviwe Gwarube",
    choices: [
      "Reginah Mhaule",
      "Ramokgopa Kgosientsho",
      "Siviwe Gwarube",
      "Beach",
    ],
    info: {
      "Siviwe Gwarube": "Siviwe Gwarube is the Minister of Basic Education.",
    },
  },
  {
    src: "/GovMesh/images/Ramokgopa-Kgosientsho.jpg",
    name: "Ramokgopa Kgosientsho",
    choices: ["Cat", "Ramokgopa Kgosientsho", "Mountain", "Beach"],
    info: {
      "Ramokgopa Kgosientsho":
        "Ramokgopa Kgosientsho is a South African politician.",
    },
  },
  {
    src: "/GovMesh/images/Ramokgopa-Kgosientsho.jpg",
    name: "Ramokgopa Kgosientsho",
    choices: ["Cat", "Ramokgopa Kgosientsho", "Mountain", "Beach"],
    info: {
      "Ramokgopa Kgosientsho":
        "Ramokgopa Kgosientsho is a South African politician.",
    },
  },
  {
    src: "/GovMesh/images/Ramokgopa-Kgosientsho.jpg",
    name: "Ramokgopa Kgosientsho",
    choices: ["Cat", "Ramokgopa Kgosientsho", "Mountain", "Beach"],
    info: {
      "Ramokgopa Kgosientsho":
        "Ramokgopa Kgosientsho is a South African politician.",
    },
  },
  {
    src: "/GovMesh/images/Ramokgopa-Kgosientsho.jpg",
    name: "Ramokgopa Kgosientsho",
    choices: ["Cat", "Ramokgopa Kgosientsho", "Mountain", "Beach"],
    info: {
      "Ramokgopa Kgosientsho":
        "Ramokgopa Kgosientsho is a South African politician.",
    },
  },
  {
    src: "/GovMesh/images/NjabuloNzuza-dm-dha.jpg",
    name: "Njabulo Nzuza",
    choices: ["Cat", "Njabulo Nzuza", "Mountain", "Beach"],
    info: { "Njabulo Nzuza": "Njabulo Nzuza is a South African politician." },
  },
  {
    src: "/GovMesh/images/nmathale_small.jpg",
    name: "Nmathale",
    choices: ["Cat", "Nmathale", "Mountain", "Beach"],
    info: { Nmathale: "Nmathale is a South African politician." },
  },
  {
    src: "/GovMesh/images/NobuhleNkabane-dhet.jpg",
    name: "Nobuhle Nkabane",
    choices: ["Cat", "Nobuhle Nkabane", "Mountain", "Beach"],
    info: {
      "Nobuhle Nkabane": "Nobuhle Nkabane is a South African politician.",
    },
  },
  {
    src: "/GovMesh/images/NomakhosazanaMethMinDELabour.jpg",
    name: "Nomakhosazana Meth",
    choices: ["Cat", "Nomakhosazana Meth", "Mountain", "Beach"],
    info: {
      "Nomakhosazana Meth": "Nomakhosazana Meth is a South African politician.",
    },
  },
  {
    src: "/GovMesh/images/Nomalungelo-Jina_DMDST.jpg",
    name: "Nomalungelo Jina",
    choices: ["Cat", "Nomalungelo Jina", "Mountain", "Beach"],
    info: {
      "Nomalungelo Jina": "Nomalungelo Jina is a South African politician.",
    },
  },
  {
    src: "/GovMesh/images/NoncebaMhlauli-dm-pres.jpg",
    name: "Nonceba Mhlauli",
    choices: ["Cat", "Nonceba Mhlauli", "Mountain", "Beach"],
    info: {
      "Nonceba Mhlauli": "Nonceba Mhlauli is a South African politician.",
    },
  },
  {
    src: "/GovMesh/images/ntshavheni-com-110.gif",
    name: "Ntsavheni",
    choices: ["Cat", "Ntsavheni", "Mountain", "Beach"],
    info: { Ntsavheni: "Ntsavheni is a South African politician." },
  },
  {
    src: "/GovMesh/images/oscar-mabuyane-ecape-premier.gif",
    name: "Oscar Mabuyane",
    choices: ["Cat", "Oscar Mabuyane", "Mountain", "Beach"],
    info: { "Oscar Mabuyane": "Oscar Mabuyane is a South African politician." },
  },
  {
    src: "/GovMesh/images/panyaza-lesufi-premier-gauteng.gif",
    name: "Panyaza Lesufi",
    choices: ["Cat", "Panyaza Lesufi", "Mountain", "Beach"],
    info: { "Panyaza Lesufi": "Panyaza Lesufi is a South African politician." },
  },
  {
    src: "/GovMesh/images/paul-small.jpg",
    name: "Paul",
    choices: ["Cat", "Paul", "Mountain", "Beach"],
    info: { Paul: "Paul is a South African politician." },
  },
  {
    src: "/GovMesh/images/PeaceMabe-dm-dsac.jpg",
    name: "Peace Mabe",
    choices: ["Cat", "Peace Mabe", "Mountain", "Beach"],
    info: { "Peace Mabe": "Peace Mabe is a South African politician." },
  },
  {
    src: "/GovMesh/images/PemmyMajodina-dwa.jpg",
    name: "Pemmy Majodina",
    choices: ["Cat", "Pemmy Majodina", "Mountain", "Beach"],
    info: { "Pemmy Majodina": "Pemmy Majodina is a South African politician." },
  },
  {
    src: "/GovMesh/images/PieterGroenewald-dcs.jpg",
    name: "Pieter Groenewald",
    choices: ["Cat", "Pieter Groenewald", "Mountain", "Beach"],
    info: {
      "Pieter Groenewald": "Pieter Groenewald is a South African politician.",
    },
  },
  {
    src: "/GovMesh/images/PinkyKekana-dm-dpsa.jpg",
    name: "Pinky Kekana",
    choices: ["Cat", "Pinky Kekana", "Mountain", "Beach"],
    info: { "Pinky Kekana": "Pinky Kekana is a South African politician." },
  },
  {
    src: "/GovMesh/images/PollyBoshielo-dm-saps.jpg",
    name: "Polly Boshielo",
    choices: ["Cat", "Polly Boshielo", "Mountain", "Beach"],
    info: { "Polly Boshielo": "Polly Boshielo is a South African politician." },
  },
  {
    src: "/GovMesh/images/premier-fs.jpg",
    name: "Premier FS",
    choices: ["Cat", "Premier FS", "Mountain", "Beach"],
    info: { "Premier FS": "Premier FS is a South African politician." },
  },
  {
    src: "/GovMesh/images/premier-kzn.jpg",
    name: "Premier KZN",
    choices: ["Cat", "Premier KZN", "Mountain", "Beach"],
    info: { "Premier KZN": "Premier KZN is a South African politician." },
  },
  {
    src: "/GovMesh/images/premier-lim.jpg",
    name: "Premier LIM",
    choices: ["Cat", "Premier LIM", "Mountain", "Beach"],
    info: { "Premier LIM": "Premier LIM is a South African politician." },
  },
  {
    src: "/GovMesh/images/premier-mpuma.jpg",
    name: "Premier Mpuma",
    choices: ["Cat", "Premier Mpuma", "Mountain", "Beach"],
    info: { "Premier Mpuma": "Premier Mpuma is a South African politician." },
  },
  {
    src: "/GovMesh/images/ramokgopa-kgosientsho-small.gif",
    name: "Ramokgopa Kgosientsho Small",
    choices: ["Cat", "Ramokgopa Kgosientsho Small", "Mountain", "Beach"],
    info: {
      "Ramokgopa Kgosientsho Small":
        "Ramokgopa Kgosientsho Small is a South African politician.",
    },
  },
  {
    src: "/GovMesh/images/ramokgopa-m-small.gif",
    name: "Ramokgopa M Small",
    choices: ["Cat", "Ramokgopa M Small", "Mountain", "Beach"],
    info: {
      "Ramokgopa M Small": "Ramokgopa M Small is a South African politician.",
    },
  },
  {
    src: "/GovMesh/images/ReginahMhaule-dm-dbe.jpg",
    name: "Reginah Mhaule",
    choices: ["Cat", "Reginah Mhaule", "Mountain", "Beach"],
    info: { "Reginah Mhaule": "Reginah Mhaule is a South African politician." },
  },
  {
    src: "/GovMesh/images/RichardMkhungo-dmdod.jpg",
    name: "Richard Mkhungo",
    choices: ["Cat", "Richard Mkhungo", "Mountain", "Beach"],
    info: {
      "Richard Mkhungo": "Richard Mkhungo is a South African politician.",
    },
  },
  {
    src: "/GovMesh/images/RosemaryCapa-dm-agric.jpg",
    name: "Rosemary Capa",
    choices: ["Cat", "Rosemary Capa", "Mountain", "Beach"],
    info: { "Rosemary Capa": "Rosemary Capa is a South African politician." },
  },
  {
    src: "/GovMesh/images/SamanthaGraham-dm-de.jpg",
    name: "Samantha Graham",
    choices: ["Cat", "Samantha Graham", "Mountain", "Beach"],
    info: {
      "Samantha Graham": "Samantha Graham is a South African politician.",
    },
  },
  {
    src: "/GovMesh/images/schreiber-leon-dha.jpg",
    name: "Schreiber Leon",
    choices: ["Cat", "Schreiber Leon", "Mountain", "Beach"],
    info: { "Schreiber Leon": "Schreiber Leon is a South African politician." },
  },
  {
    src: "/GovMesh/images/SeisoMohai-dm-dpme.jpg",
    name: "Seiso Mohai",
    choices: ["Cat", "Seiso Mohai", "Mountain", "Beach"],
    info: { "Seiso Mohai": "Seiso Mohai is a South African politician." },
  },
  {
    src: "/GovMesh/images/SenzoMchunu-dpsa_100.jpg",
    name: "Senzo Mchunu",
    choices: ["Cat", "Senzo Mchunu", "Mountain", "Beach"],
    info: { "Senzo Mchunu": "Senzo Mchunu is a South African politician." },
  },
  {
    src: "/GovMesh/images/SihleZikalala-dm-dpwi.jpg",
    name: "Sihle Zikalala",
    choices: ["Cat", "Sihle Zikalala", "Mountain", "Beach"],
    info: { "Sihle Zikalala": "Sihle Zikalala is a South African politician." },
  },
  {
    src: "/GovMesh/images/sindisiwe_chikunga.gif",
    name: "Sindisiwe Chikunga",
    choices: ["Cat", "Sindisiwe Chikunga", "Mountain", "Beach"],
    info: {
      "Sindisiwe Chikunga": "Sindisiwe Chikunga is a South African politician.",
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


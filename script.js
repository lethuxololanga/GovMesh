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
    choices: [
      "Sindisiwe Chikunga", 
      "Lindiwe Ntshalintshali", 
      "Siviwe Gwarube", 
      "Barbara Creecy"
    ],
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
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/SollyMalatsiMinisterCommunicationsDigitalTechnologies.jpg",
    name: "Solly Malatsi",
    choices: [
      "Senzo Mchunug",
      "Solly Malatsi",
      "Parks Tauv",
      "Stella Ndabeni-Abrahams",
    ],
    info: {
      "Solly Malatsi": "Mmoba Solomon (Solly) Malatsi is a South African politician who is currently serving as Minister of Communications and Digital Technologies since June 2024. He has been a Member of the National Assembly of South Africa since May 2014.",
    },
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/Maropene-Ramokgopa-MinPresPlanningMonitoringEvaluation.jpg",
    name: "Maropene Ramokgopa",
    choices: [
      "Kgosientsho Ramokgopa",
      "Solly Malatsi",
      "Maropene Ramokgopa",
      "Thembi Nkadimeng",
    ],
    info: {
      "Maropene Ramokgopa": "Maropene Ramokgopa is a South African politician who has been the Minister in the Presidency Responsible for Planning, Monitoring and Evaluation since March 2023.",
    },
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/VelinkosiHlabisaCooperativeGovernanceTraditionalAffairs.jpg",
    name: "Velinkosi Hlabisa",
    choices: [
      "Kgosientsho Ramokgopa",
      "Blade Nzimande",
      "Ronald Lamola",
      "Velinkosi Hlabisa",
    ],
    info: {
      "Velinkosi Hlabisa": "Velenkosini Fiki Hlabisa (born 4 January 1965) is a South African politician and former teacher who is currently serving as Minister of Cooperative Governance and Traditional Affairs since June 2024. He has been President of the Inkatha Freedom Party (IFP) since 2019 and a Member of the National Assembly of South Africa since 2023. He is the party's parliamentary leader. He previously served as the Secretary-General of the IFP from 2011 to 2017, as the Mayor of the Big Five Hlabisa Local Municipality from 2016 to 2019 and as the Leader of the Opposition in the KwaZulu-Natal Legislature between 2019 and 2023.",
    },
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/Ramokgopa-Kgosientsho-MinPresidencyElectricity.jpg",
    name: "Kgosientsho Ramokgopa",
    choices: [
      "Kgosientsho Ramokgopa",
      "Siviwe Gwarube",
      "Paul Mashatile",
      "Pemmy Majodina"
    ],
    info: {
      "Kgosientsho Ramokgopa":
        "Kgosientsho Ramokgopa is the current Minister of Electricity and Energy. He has overseen the country’s transition to more sustainable energy sources since his appointment."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/DionGeorgeMinisterForestryFisheriesEnvironment.jpg",
    name: "Dion George",
    choices: [
      "Maropene Ramokgopa",
      "Dion George",
      "Ronald Lamola",
      "Nomakhosazana Meth"
    ],
    info: {
      "Dion George":
        "Dion George is the Minister of Forestry, Fisheries, and the Environment. He has been at the forefront of advocating for environmental sustainability in South Africa."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/RonaldLamolaMinisterInternationalRelationsCooperation.jpg",
    name: "Ronald Lamola",
    choices: [
      "Ronald Lamola",
      "Solly Malatsi",
      "Pieter Groenewald",
      "Siviwe Gwarube"
    ],
    info: {
      "Ronald Lamola":
        "Ronald Lamola is the Minister of International Relations and Cooperation. He plays a key role in shaping South Africa’s foreign policy and international relations."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/GaytonMcKenzieMinisterSportArtsCulture.jpg",
    name: "Gayton McKenzie",
    choices: [
      "Pieter Groenewald",
      "Gayton McKenzie",
      "Paul Mashatile",
      "Kgosientsho Ramokgopa"
    ],
    info: {
      "Gayton McKenzie":
        "Gayton McKenzie is the Minister of Sport, Arts, and Culture. A former mayor, he brings a dynamic approach to promoting sports and cultural activities in South Africa."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/NomakhosazanaMethMinisterEmploymentLabour.jpg",
    name: "Nomakhosazana Meth",
    choices: [
      "Nomakhosazana Meth",
      "Sisisi Tolashe",
      "Paul Mashatile",
      "Dion George"
    ],
    info: {
      "Nomakhosazana Meth":
        "Nomakhosazana Meth is the Minister of Employment and Labour. She has been leading efforts to create jobs and improve working conditions across the country."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/GodongwanaEnochMinisterFinance.jpg",
    name: "Enoch Godongwana",
    choices: [
      "Enoch Godongwana",
      "Ronald Lamola",
      "David Masondo",
      "Leon Schreiber"
    ],
    info: {
      "Enoch Godongwana":
        "Enoch Godongwana is the current Minister of Finance, overseeing the country's economic policies and budgetary framework since his appointment."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/AaronMotsoalediMininisterHealth.jpg",
    name: "Aaron Motsoaledi",
    choices: [
      "Aaron Motsoaledi",
      "Leon Schreiber",
      "John Steenhuisen",
      "Blade Nzimande"
    ],
    info: {
      "Aaron Motsoaledi":
        "Aaron Motsoaledi is the Minister of Health. He has played a key role in improving South Africa’s healthcare system and responding to the nation's health crises."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/NobuhleNkabaneMinisterHigherEducation.jpg",
    name: "Nobuhle Nkabane",
    choices: [
      "Nobuhle Nkabane",
      "Aaron Motsoaledi",
      "Velinkosi Hlabisa",
      "Paul Mashatile"
    ],
    info: {
      "Nobuhle Nkabane":
        "Nobuhle Nkabane is the Minister of Higher Education, responsible for overseeing South Africa's tertiary institutions and ensuring access to quality education for all."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/LeonSchreiberMinisterHomeAffairs.jpg",
    name: "Leon Schreiber",
    choices: [
      "Leon Schreiber",
      "Pieter Groenewald",
      "John Steenhuisen",
      "Mzwanele Nyhontso"
    ],
    info: {
      "Leon Schreiber":
        "Leon Schreiber is the Minister of Home Affairs, managing immigration, citizenship, and related services in South Africa since his appointment."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/gallery/8460_large.jpg",
    name: "Mmamoloko Kubayi",
    choices: [
      "Mmamoloko Kubayi",
      "Stella Ndabeni-Abrahams",
      "Solly Malatsi",
      "Paul Mashatile"
    ],
    info: {
      "Mmamoloko Kubayi":
        "Mmamoloko Kubayi is the Minister of Human Settlements, working towards providing adequate housing and living conditions for all South Africans."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/RonaldLamolaMinisterInternationalRelationsCooperation.jpg",
    name: "Ronald Lamola",
    choices: [
      "Ronald Lamola",
      "Leon Schreiber",
      "Velinkosi Hlabisa",
      "Sisisi Tolashe"
    ],
    info: {
      "Ronald Lamola":
        "Ronald Lamola is the Minister of International Relations and Cooperation, shaping South Africa's foreign policy and diplomatic engagements globally."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/gallery/GwedeMantashe-dme-700.jpg",
    name: "Gwede Mantashe",
    choices: [
      "Gwede Mantashe",
      "John Steenhuisen",
      "Gayton McKenzie",
      "David Masondo"
    ],
    info: {
      "Gwede Mantashe":
        "Gwede Mantashe is the Minister of Mineral and Petroleum Resources. He oversees the country's vast natural resources and their development."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/MaropeneRamokgopaMinisterPresidencyPlanning.jpg",
    name: "Maropene Ramokgopa",
    choices: [
      "Maropene Ramokgopa",
      "Thembi Nkadimeng",
      "Paul Mashatile",
      "Kgosientsho Ramokgopa"
    ],
    info: {
      "Maropene Ramokgopa":
        "Maropene Ramokgopa is the Minister in the Presidency for Planning, Monitoring, and Evaluation, ensuring the effective implementation of government programs."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/gallery/SenzoMchunu-dpsa_700.jpg",
    name: "Senzo Mchunu",
    choices: [
      "Senzo Mchunu",
      "Paul Mashatile",
      "Leon Schreiber",
      "Solly Malatsi"
    ],
    info: {
      "Senzo Mchunu":
        "Senzo Mchunu is the Minister of Police, responsible for maintaining law and order, and ensuring the safety of citizens in South Africa."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/ntshavheni-pres-l.gif",
    name: "Khumbudzo Ntshavheni",
    choices: [
      "Khumbudzo Ntshavheni",
      "David Masondo",
      "Ronald Lamola",
      "Enoch Godongwana"
    ],
    info: {
      "Khumbudzo Ntshavheni":
        "Khumbudzo Ntshavheni is the Minister in the Presidency, coordinating the presidency's strategic activities and overseeing various governmental departments."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/MzamoButheleziMinisterPublicServiceAdministration.jpg",
    name: "Mzamo Buthelezi",
    choices: [
      "Mzamo Buthelezi",
      "Ronald Lamola",
      "Velinkosi Hlabisa",
      "David Masondo"
    ],
    info: {
      "Mzamo Buthelezi":
        "Mzamo Buthelezi is the Minister of Public Service and Administration, overseeing the efficiency and effectiveness of the public service sector."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/DeanMacphersonMinisterPublicWorksInfrastructure.jpg",
    name: "Dean Macpherson",
    choices: [
      "Dean Macpherson",
      "Stella Ndabeni-Abrahams",
      "Pieter Groenewald",
      "Maropene Ramokgopa"
    ],
    info: {
      "Dean Macpherson":
        "Dean Macpherson is the Minister of Public Works and Infrastructure, tasked with managing the country's infrastructure projects and developments."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/SisisiTolasheMinisterSocialDevelopment.jpg",
    name: "Sisisi Tolashe",
    choices: [
      "Sisisi Tolashe",
      "Nomakhosazana Meth",
      "David Masondo",
      "John Steenhuisen"
    ],
    info: {
      "Sisisi Tolashe":
        "Sisisi Tolashe is the Minister of Social Development, working to provide social services and support to vulnerable populations in South Africa."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/docs/resourcecentre/multimedia/faces/ministers/De_Lille_Large.jpg",
    name: "Patricia De Lille",
    choices: [
      "Patricia De Lille",
      "Solly Malatsi",
      "Sisisi Tolashe",
      "Dean Macpherson"
    ],
    info: {
      "Patricia De Lille":
        "Patricia De Lille is the Minister of Tourism, promoting South Africa as a top tourist destination and improving the country's tourism infrastructure."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/Parks-Tau-DepMinCooperativeGovernanceTraditionalAffairs.jpg`",
    name: "Parks Tau",
    choices: [
      "Parks Tau",
      "John Steenhuisen",
      "Pieter Groenewald",
      "Dion George"
    ],
    info: {
      "Parks Tau":
        "Parks Tau is the Minister of Trade, Industry, and Competition, working to enhance South Africa’s economy by fostering innovation and competitive industries."
    }
  },
  {
    src: "https://www.gcis.gov.za/sites/default/files/pictures/cabinet/BarbaraCreecyMinisterTransport.jpg",
    name: "Barbara Creecy",
    choices: [
      "Barbara Creecy",
      "Paul Mashatile",
      "Siviwe Gwarube",
      "Enoch Godongwana"
    ],
    info: {
      "Barbara Creecy":
        "Barbara Creecy is the Minister of Transport, managing the country's transportation systems and promoting sustainable, safe transport networks."
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
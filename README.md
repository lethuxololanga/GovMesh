# GovMesh - Who's Who Quiz

## Introduction
**GovMesh** is an interactive web-based quiz application designed to help users recognize and learn about key political figures in South Africa. The quiz presents an image of a person, and users have to guess who it is from multiple-choice options. Once an answer is selected, users get instant feedback and additional information about the person, making the quiz both educational and fun.

You can play the quiz on your phone or desktop by visiting [GovMesh Quiz](https://gov-mesh.vercel.app/).

---

## Features
- **Image-based Quiz**: Displays an image of a prominent figure and asks users to identify the person from a list of options.
- **Instant Feedback**: Users are immediately notified if their answer is correct or incorrect.
- **Learn More Section**: For incorrect answers, a "Did You Know" section provides more detailed information about the figure.
- **Progression**: After each answer, the quiz moves to the next figure, with a message displayed when all questions are complete.

---

## How It Works

1. **Start the Quiz**: The app begins by showing an image of a political figure.
2. **Answer the Question**: The user selects an answer from four multiple-choice options.
3. **Feedback**: Based on the selection:
   - If correct, the user is shown a "Correct!" message.
   - If incorrect, the user sees a "Did You Know" section with more information about the figure.
4. **Completion**: Once all images have been shown and answered, the quiz displays a "Quiz Complete!" message.

---

## File Structure
- `index.html`: Contains the structure of the app, including the containers for the image, quiz, and feedback sections.
- `style.css`: Defines the layout and styles for the app, including positioning, colors, fonts, and animations.
- `script.js`: Implements the core logic of the quiz, managing the image display, answer validation, feedback, and quiz progression.

---

## Code Breakdown

### HTML
The `index.html` file contains the basic structure of the app:
- **Card Container**: Holds the image of the person.
- **Quiz Container**: Displays the quiz question and multiple-choice options.
- **Feedback Section**: Shows feedback on the user's answer and displays additional info for incorrect responses.

```html
<div class="app-container">
    <div class="card-container">
        <div id="feedback" class="feedback"></div>
        <div class="card" id="card"></div>
    </div>
    <div id="quiz-container">
        <div id="question"></div>
        <div id="choices"></div>
    </div>
    <div id="info-container">
        <h3>Answer</h3>
        <ul id="info-list"></ul>
    </div>
</div>
```

### CSS
The `style.css` file defines the visual aspects of the app, including:
- **Card Layout**: Styles the image card, including size, shadow, and border radius.
- **Feedback**: Displays feedback messages for correct and incorrect answers.
- **Quiz and Info Section**: Styles the question and answer buttons, along with the informational section for additional details.

```css
.card {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: #fff;
    transition: transform 0.4s ease-in-out;
}

.feedback.correct {
    background-color: rgba(0, 255, 0, 0.8);
}

.feedback.incorrect {
    background-color: rgba(255, 0, 0, 0.8);
}
```

### JavaScript
The core functionality of the app is handled in `script.js`:
- **Image and Quiz Setup**: The `updateCard()` function displays each image, and `updateQuiz()` generates the corresponding answer choices.
- **Answer Validation**: The `checkAnswer()` function determines whether the selected answer is correct and provides feedback accordingly.
- **Progression Logic**: After each question, `goToNextImage()` ensures the quiz moves to the next image or completes when all images have been answered.

#### Example JavaScript logic:
```javascript
function checkAnswer(selected, correct, info) {
  if (selected === correct) {
    feedbackElement.textContent = "Correct!";
    setTimeout(() => goToNextImage(), 1000);
  } else {
    feedbackElement.textContent = "Incorrect!";
    setTimeout(() => goToNextImage(), 5000);
    updateInfo(info); // Show additional info for incorrect answers
  }
}

function goToNextImage() {
  currentIndex++;
  if (currentIndex < images.length) {
    updateCard();
  } else {
    feedbackElement.textContent = "Quiz complete!";
  }
}
```

---

## How to Run the Project
1. Clone this repository to your local machine.
2. Ensure all three files (`index.html`, `style.css`, `script.js`) are in the same directory.
3. Open `index.html` in your browser.
4. Alternatively, you can play the quiz by visiting [GovMesh Quiz](https://gov-mesh.vercel.app/).

---

## Future Enhancements
- **User Authentication**: Add login/signup features to track user progress and scores.
- **Scoreboard**: Implement a point system where users can accumulate points for each correct answer.
- **More Content**: Expand the quiz to include more figures from different sectors such as sports, entertainment, and more.

---

## Credits
Developed by Lethuxolo Langa. The app is built using standard HTML, CSS, and JavaScript, focusing on simplicity and user engagement.

---


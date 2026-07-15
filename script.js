const lessons = {
    french: [
        { word: "Bonjour", answer: "Hello" },
        { word: "Chat", answer: "Cat" }
    ],
    german: [
        { word: "Hallo", answer: "Hello" },
        { word: "Hund", answer: "Dog" }
    ]
};

let currentLanguage = '';
let currentWordIndex = 0;

function startLesson(lang) {
    currentLanguage = lang;
    document.getElementById('hero').classList.add('hidden');
    document.getElementById('flashcard-container').classList.remove('hidden');
    showWord();
}

function showWord() {
    const data = lessons[currentLanguage][currentWordIndex];
    document.getElementById('word-to-learn').innerText = data.word;
    document.getElementById('user-input').value = "";
}

function checkAnswer() {
    const input = document.getElementById('user-input').value.toLowerCase();
    const correct = lessons[currentLanguage][currentWordIndex].answer.toLowerCase();
    const feedback = document.getElementById('feedback');

    if (input === correct) {
        feedback.innerText = "Correct! 🎉";
        feedback.style.color = "green";
        currentWordIndex++;
        setTimeout(showWord, 1000);
    } else {
        feedback.innerText = "Try again!";
        feedback.style.color = "red";
    }
}

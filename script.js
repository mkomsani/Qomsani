const words = ["تفاحة", "موزة", "برتقالة", "فراولة", "بطيخ", "أحمد", "مريم", "علي", "ليلى", "حسن", "قطة", "كلب", "فأر", "حمار", "قرد"];
let currentWordIndex;
let scrambledWord;
const wordElement = document.getElementById("word");
const answerInput = document.getElementById("answer");
const resultElement = document.getElementById("result");
const restartButton = document.getElementById("restart-btn");

function initializeGame() {
    currentWordIndex = Math.floor(Math.random() * words.length);
    const currentWord = words[currentWordIndex];
    scrambledWord = scrambleWord(currentWord);
    wordElement.textContent = scrambledWord;
    resultElement.textContent = "";
    answerInput.value = "";
    restartButton.style.display = "none";
}

function scrambleWord(word) {
    const shuffledWord = word.split('').sort(function(){return 0.5-Math.random()}).join('');
    return shuffledWord;
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim();
    if (userAnswer === words[currentWordIndex]) {
        resultElement.textContent = "إجابة صحيحة! 😃"; // رسالة إيجابية
        resultElement.style.color = "#2ecc71"; // لون النص الأخضر
        restartButton.style.display = "inline"; // عرض زر البدء من جديد
    } else {
        resultElement.textContent = "غير صحيح! حاول مرة أخرى."; // رسالة الخطأ الافتراضية
        resultElement.style.color = "#e74c3c"; // لون النص الأحمر للخطأ
    }
}

initializeGame();

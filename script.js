// Typing Effect
const typingText = document.querySelector(".typing-text");
const words = ["your design domain", "Gain Hands on Experience", "Marketing Compitative salary"];
let wordIndex = 0;
let letterIndex = 0;

function typeEffect() {
    if (letterIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex][letterIndex];
        letterIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (letterIndex > 0) {
        typingText.textContent = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(eraseEffect, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 1000);
    }
}

typeEffect();

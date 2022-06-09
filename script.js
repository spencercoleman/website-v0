const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
    "Reticulating splines",
    "Fabricating imaginary infrastructure",
    "Abstracting loading procedures",
    "Reticulating unreticulated splines",
    "Recycling hex decimals",
    "Simulating program execution",
    "Ensuring transplanar synergy",
    "Still reticulating splines",
    "Concatenating vertex nodes",
    "Generating intrigue"
];
const typingDelay = 70;
const erasingDelay = 40;
const newTextDelay = 800; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) {
            cursorSpan.classList.add("typing");
        }
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
  	    setTimeout(erase, newTextDelay);
    }
}

function erase() {
	if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) {
            cursorSpan.classList.add("typing");
        }

        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex  - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        
        if (textArrayIndex>=textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if (textArray.length) {
        setTimeout(type, newTextDelay + 250);
    }
});
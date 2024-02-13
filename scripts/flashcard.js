import { getDeckData } from "../modules/deck.js";

const flashcardFront = document.getElementById("flashcard-front");
const flashcardBack = document.getElementById("flashcard-back");
const showAnswerButton = document.getElementById("show-answer");
const againButton = document.getElementById("again-button");
const hardButton = document.getElementById("hard-button");
const goodButton = document.getElementById("good-button");
const easyButton = document.getElementById("easy-button");

const urlParams = new URLSearchParams(window.location.search);
const deckId = urlParams.get("deckId");
const deck = getDeckData(deckId);

// A helper function for easily hiding and showing elements.
const setDisplay = (elements, display) => elements.forEach(element => element.style.display = display);

/**
 * Updates the website to display the specified card.
 * @param {import("../modules/deck.js").Card} card 
 */
const displayCard = card => {
    setDisplay([flashcardBack, againButton, hardButton, goodButton, easyButton], "none");
    setDisplay([showAnswerButton], "inline");
    flashcardFront.innerHTML = card.front;
    flashcardBack.innerHTML = card.back;
}

/**
 * Shows the answer and displays the "again," "hard," "good," and "easy" buttons.
 */
const showAnswer = () => {
    setDisplay([flashcardBack, againButton, hardButton, goodButton, easyButton], "inline");
    setDisplay([showAnswerButton], "none");
}

// This function is just for testing. It displays a random card.
const displayNextCard = () => {
    // An array of all card ids.
    const cardIds = Object.keys(deck.cards);
    const randomCardId = cardIds[Math.floor(Math.random() * cardIds.length)];

    displayCard(deck.cards[randomCardId]);
}

showAnswerButton.onclick = showAnswer;
easyButton.onclick = displayNextCard;
againButton.onclick = displayNextCard;
hardButton.onclick = displayNextCard;
goodButton.onclick = displayNextCard;
displayNextCard();
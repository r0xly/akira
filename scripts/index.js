import { getAllDecks } from "../modules/deck.js";

const deckButtonsContainer = document.getElementById("deck-buttons");

const createDeckButton = deck => { 
    const button = document.createElement("button");
    button.classList.add("deck-button");
    button.innerHTML = deck.name;
    
    button.onclick = () => window.location.href = `flashcard.html?deckId=${deck.id}`;
    
    deckButtonsContainer.appendChild(button);
}

getAllDecks().forEach(createDeckButton);
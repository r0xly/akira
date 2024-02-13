/**
 * @typedef {Object} Card
 * @property {string} id
 * @property {string} front
 * @property {string} back
 * 
 * @typedef {Object} Deck
 * @property {string} id 
 * @property {string} name 
 * @property {{[cardId: string] : Card}} cards
 */


// These two methods just for testing and will be removed in the future.

const deck = (id, name, cardsArray) => {
    const cardMap = {};

    cardsArray.forEach(card => cardMap[card.id] = card);

    return {
        id: id,
        name: name,
        cards: cardMap,
    }
};  

let totalCardsCreated = 0;

const card = (front, back) => {
    totalCardsCreated ++;
    return {
        id: totalCardsCreated,
        front: front,
        back: back,
    }
};

// Samples decks
const decks = {
    ["HTML"]: deck("HTML", "HTML Tags", [
        card("img", "The img tag is used to embed an image in an HTML page like this one: <br> <img src='https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg' width='100' height='132'>"),
        card("a", "The a tag defines a hyperlink, which is used to link from one page to another. <br> The most important attribute of the a element is the href attribute, which indicates the link's destination."),
        card("hr", "The hr tag defines a thematic break in an HTML page (e.g. a shift of topic)."),
        card("button", "The button tag is used for making buttons."),
        card("u", "The u tag is used for making underlining text."),
        card("i", "The i tag is used for making italicized text."),
        card("p", "The p tag is used for defining paragraphs"),
        card("b", "The b tag is used for making bold text."),
        card("h1 - h6", "These tags are using to define HTML headings."),
        card("meta", "The meta tag provides metadata about the HTML document, such as author, description, and keywords."),
        card("head", "The head tag contains meta-information about the HTML document, such as title, scripts, and styles."),
        card("body", "The body tag defines the main content of the HTML document."),
        card("div", "The div tag is a generic container element used to group other elements."),
        card("span", "The span tag is used to apply styles to inline elements without changing their block nature."),
        card("table", "The table tag is used to create tables in HTML."),
        card("tr", "The tr tag defines a row in an HTML table."),
        card("td", "The td tag defines a cell in an HTML table."),
        card("th", "The th tag defines a header cell in an HTML table."),
        card("ul", "The ul tag defines an unordered (bulleted) list."),
        card("ol", "The ol tag defines an ordered (numbered) list."),
        card("li", "The li tag defines a list item."),
        card("form", "The form tag is used to create an HTML form for user input."),
        card("input", "The input tag defines an input control."),
        card("textarea", "The textarea tag defines a multiline input control."),
        card("label", "The label tag defines a label for an input element."),
        card("select", "The select tag defines a dropdown list."),
        card("option", "The option tag defines an option in a dropdown list."),
        card("header", "The header tag defines a header for a document or a section."),
        card("footer", "The footer tag defines a footer for a document or a section.")
    ]),

    ["Abcs"]: deck("Abcs", "The Alphabet", [
        card("A", "1"),
        card("B", "2"),
        card("C", "3"),
        card("D", "4"),
        card("E", "5"),
        card("F", "6"),
        card("G", "7"),
        card("H", "8"),
        card("I", "9"),
        card("J", "10"),
        card("K", "11"),
        card("L", "12"),
        card("M", "13"),
        card("N", "14"),
        card("O", "15"),
        card("P", "16"),
        card("Q", "17"),
        card("R", "18"),
        card("S", "19"),
        card("T", "20"),
        card("U", "21"),
        card("V", "22"),
        card("W", "23"),
        card("X", "24"),
        card("Y", "25"),
        card("Z", "26"),
    ]),
}

/**
 * @param {string} deckId 
 * @return {Deck}
 */
export const getDeckData = (deckId) => {
    return decks[deckId];
}

/**
 * @returns {Deck[]}
 */
export const getAllDecks = () => Object.values(decks);

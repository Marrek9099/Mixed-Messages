// List containing 10 inspirational quotes

const inspQuotes = ['“The best way to get started is to quit talking and begin doing.” – Walt Disney', '“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.” – Winston Churchill', '“Don’t let yesterday take up too much of today.” – Will Rogers','“You learn more from failure than from success. Don’t let it stop you. Failure builds character.” – Unknown',
'“It’s not whether you get knocked down, it’s whether you get up.” – Inspirational Quote by Vince Lombardi','“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” – Steve Jobs','“People who are crazy enough to think they can change the world, are the ones who do.” – Rob Siltanen','“Failure will never overtake me if my determination to succeed is strong enough.” – Og Mandino','“Failure will never overtake me if my determination to succeed is strong enough.” – Og Mandino','“We may encounter many defeats but we must not be defeated.” – Maya Angelou'];


// Random quote generator

const randomQuote = () => inspQuotes[Math.floor(Math.random() * inspQuotes.length)];

// Random colors picker

const randomColors = () => {
    const colorIndex = Math.floor((Math.random() * 5)+1) ;
    return `colorCombination${colorIndex}`
};

// Access HTML objets to be updated through JavaScript

let msg = document.querySelector('h1');

let body = document.querySelector('body');

let button = document.querySelector('button');


// Update page color and message function 

const updatePage = () => {
    let newMsg = randomQuote();
    let newColor = randomColors();

    while (msg.innerHTML === newMsg) {
        newMsg = randomQuote();
    }
    msg.innerHTML = newMsg;

    while (body.classList[1] === newColor) {
        newColor = randomColors();
    }
    
    body.classList.remove(body.classList[1]);
    body.classList.add(newColor);
}

// On click of button update colors and quote

button.addEventListener('click', () => updatePage());
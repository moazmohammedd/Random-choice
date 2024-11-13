const quoteParentElement = document.getElementById("quote-parent");
const mainBtn = document.querySelector(".main-btn");
let lastIndex;

const quotes =[
    {
        userName : "Elon Musk",
        quote : "Be yourself; everyone else is already taken."
    },
    {
        userName : "Elon Musk",
        quote : "So many books, so little time"
    }, 
    {
        userName : "Robert Kiyosaki",
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    },
    {
        userName : "Dr. Seuss",
        quote : "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    },
    {
        userName : "Elbert Hubbard",
        quote : "A friend is someone who knows all about you and still loves you.",
    },
    {
        userName : " Oscar Wilde",
        quote : "To live is the rarest thing in the world. Most people exist, that is all.",
    },
    {
        userName : "Oscar Wilde",
        quote : "Always forgive your enemies; nothing annoys them so much",
    },
]

function  setRandomQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    if(randomIndex === lastIndex) return setRandomQuote();
    const randomQuote = quotes[randomIndex];
    console.log({randomIndex,randomQuote})
    quoteParentElement.children[0].textContent = randomQuote.quote;
    quoteParentElement.children[1].textContent = `-${randomQuote.userName}`;
    lastIndex = randomIndex;
}

mainBtn.addEventListener("click", () => {
    setRandomQuote();
});

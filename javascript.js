const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const btn = document.querySelector("#new-quote");

let getQuote = () =>  fetch('https://dummyjson.com/quotes/random')
.then(response => response.json())
.then(data => {
    quote.innerHTML = `\"${data.quote}\"`;
    author.innerHTML = data.author;
})
.catch(error => console.error(error));

btn.addEventListener("click", getQuote);
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const reloadButton = document.getElementById("reload-btn");

function fetchRandomQuote() {
    fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => {
            quoteElement.textContent = data.content;
            authorElement.textContent = data.author;
        })
        .catch((error) => {
            console.error("Error fetching a quote:", error);
        });
}

// Initial quote on page load
fetchRandomQuote();

// Reload button click event
reloadButton.addEventListener("click", fetchRandomQuote);

// Array to hold the quotes
let quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "inspiration" },
  { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", category: "life" },
  { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", category: "friendship" }
];

// Function to display a random quote
function displayRandomQuote() {
  // Select a random quote from the array
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Update the DOM with the random quote's text and category
  document.getElementById("quoteText").textContent = randomQuote.text;
  document.getElementById("quoteCategory").textContent = `Category: ${randomQuote.category}`;
}

// Function to add a new quote to the quotes array
function addQuote(text, category) {
  // Push the new quote object to the array
  quotes.push({ text: text, category: category });

  // Optionally, update the DOM to show the new quote
  displayRandomQuote();
}

// Event listener for the "Show New Quote" button
document.getElementById("changeColorButton").addEventListener("click", displayRandomQuote);

// Example: Add a new quote (can be triggered by another action)
addQuote("Life is what happens when you're busy making other plans.", "life");

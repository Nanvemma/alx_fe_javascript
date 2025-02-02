// Array to hold the quotes
let quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "inspiration" },
  { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", category: "life" },
  { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", category: "friendship" }
];

// Function to show a random quote
function showRandomQuote() {
  // Select a random quote from the array
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Update the DOM with the random quote's text and category using innerHTML
  document.getElementById("quoteText").innerHTML = randomQuote.text;
  document.getElementById("quoteCategory").innerHTML = `Category: ${randomQuote.category}`;
}

// Function to add a new quote to the quotes array
function addQuote(text, category) {
  // Push the new quote object to the array
  quotes.push({ text: text, category: category });

  // Optionally, update the DOM to show the new quote
  showRandomQuote();
}

// Function to create the "Add Quote" form
function createAddQuoteForm() {
  // Create form elements
  const form = document.createElement("form");

  const textLabel = document.createElement("label");
  textLabel.setAttribute("for", "quoteTextInput");
  textLabel.innerHTML = "Quote: ";
  form.appendChild(textLabel);

  const textInput = document.createElement("input");
  textInput.setAttribute("type", "text");
  textInput.setAttribute("id", "quoteTextInput");
  form.appendChild(textInput);

  const categoryLabel = document.createElement("label");
  categoryLabel.setAttribute("for", "quoteCategoryInput");
  categoryLabel.innerHTML = "Category: ";
  form.appendChild(categoryLabel);

  const categoryInput = document.createElement("input");
  categoryInput.setAttribute("type", "text");
  categoryInput.setAttribute("id", "quoteCategoryInput");
  form.appendChild(categoryInput);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.innerHTML = "Add Quote";
  form.appendChild(submitButton);

  // Add form to the DOM
  document.body.appendChild(form);

  // Event listener for form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newText = textInput.value;
    const newCategory = categoryInput.value;
    if (newText && newCategory) {
      addQuote(newText, newCategory);
      textInput.value = ''; // Clear the input fields
      categoryInput.value = '';
    }
  });
}

// Event listener for the "Show New Quote" button (now referencing newQuote)
function newQuote() {
  showRandomQuote();
}

document.getElementById("changeColorButton").addEventListener("click", newQuote);

// Call the function to create the "Add Quote" form when the page loads
createAddQuoteForm();

// Example: Add a new quote (can be triggered by another action)
addQuote("Life is what happens when you're busy making other plans.", "life");

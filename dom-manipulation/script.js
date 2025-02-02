// Array to hold the quotes
let quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "inspiration" },
  { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", category: "life" },
  { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", category: "friendship" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "inspiration" }
];

// Function to show a random quote
function showRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteText").innerHTML = randomQuote.text;
  document.getElementById("quoteCategory").innerHTML = `Category: ${randomQuote.category}`;
}

// Function to add a new quote to the quotes array
function addQuote(text, category) {
  quotes.push({ text: text, category: category });
  populateCategories(); // Re-populate categories in the dropdown
  showRandomQuote();
}

// Function to populate categories in the dropdown
function populateCategories() {
  const categoryFilter = document.getElementById("categoryFilter");
  const categories = new Set(quotes.map(quote => quote.category));
  
  // Clear existing options
  categoryFilter.innerHTML = '<option value="all">All Categories</option>';

  // Add categories to the dropdown
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.innerText = category;
    categoryFilter.appendChild(option);
  });

  // Check if there's a saved category filter in localStorage
  const savedCategory = localStorage.getItem("selectedCategory");
  if (savedCategory) {
    categoryFilter.value = savedCategory;
    filterQuotes(); // Apply the saved filter
  }
}

// Function to filter quotes based on selected category
function filterQuotes() {
  const selectedCategory = document.getElementById("categoryFilter").value;

  // Save the selected category to localStorage
  localStorage.setItem("selectedCategory", selectedCategory);

  const filteredQuotes = selectedCategory === "all"
    ? quotes
    : quotes.filter(quote => quote.category === selectedCategory);

  // Display the filtered quotes (Here, we just show one random quote based on filter)
  if (filteredQuotes.length > 0) {
    const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
    document.getElementById("quoteText").innerHTML = randomQuote.text;
    document.getElementById("quoteCategory").innerHTML = `Category: ${randomQuote.category}`;
  } else {
    document.getElementById("quoteText").innerHTML = "No quotes available for this category.";
    document.getElementById("quoteCategory").innerHTML = "";
  }
}

// Event listener for the "Show New Quote" button
document.getElementById("changeColorButton").addEventListener("click", showRandomQuote);

// Initialize categories on page load
populateCategories();

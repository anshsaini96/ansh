// Function to convert text to CamelCase
function convertToCamelCase() {
  let text = document.getElementById("editor").innerText;
  let result = text.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => 
      index === 0 ? match.toLowerCase() : match.toUpperCase()
  ).replace(/\s+/g, '');
  document.getElementById("editor").innerText = result;
}

// Function to convert text to Snake_case
function convertToSnakeCase() {
  let text = document.getElementById("editor").innerText;
  let result = text.replace(/\s+/g, '_').toLowerCase();
  document.getElementById("editor").innerText = result;
}

// Function to convert text to PascalCase
function convertToPascalCase() {
  let text = document.getElementById("editor").innerText;
  let result = text.replace(/\w+/g, (match) => match.charAt(0).toUpperCase() + match.slice(1).toLowerCase()).replace(/\s+/g, '');
  document.getElementById("editor").innerText = result;
}

// Function to toggle Bold formatting
function boldText() {
  document.execCommand("bold");
}

// Function to toggle Italic formatting
function italicText() {
  document.execCommand("italic");
}

// Function to toggle Underline formatting
function underlineText() {
  document.execCommand("underline");
}

// Function to clear formatting
function clearFormatting() {
  document.getElementById("editor").innerHTML = document.getElementById("editor").innerText;
}

// Function to update the text analysis (word count, character count, reading time)
function updateTextAnalysis() {
  let text = document.getElementById("editor").innerText;

  // Word count
  let wordCount = text.trim().split(/\s+/).length;
  if (text.trim() === '') wordCount = 0; // Handle empty input

  // Character count (including spaces)
  let charCount = text.length;

  // Estimated reading time (assuming average reading speed of 200 words per minute)
  let readingTime = Math.ceil(wordCount / 200);

  // Update the UI
  document.getElementById("word-count").innerText = wordCount;
  document.getElementById("char-count").innerText = charCount;
  document.getElementById("reading-time").innerText = readingTime;
}

// Add event listener to automatically update the analysis as the user types
document.getElementById("editor").addEventListener("input", updateTextAnalysis);

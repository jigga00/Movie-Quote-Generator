I created a Movie Quote Generator that displays random movie quotes along with the movie title whenever the user clicks the "Get New Quote" button.


Structure
The application is built using HTML, CSS, and JavaScript.

HTML Defines the structure of the application:
1) A container holds the quote, the movie title, and a button.
2) The <div> elements display the quote and the movie title.
3) A <button> triggers the generation of a new quote when clicked.

CSS Styles the application to make it visually appealing:
1) A clean design with a dark background and light text for better readability.
2) Adds padding, borders, and rounded corners to the container for a sleek look.
3) Buttons are styled with hover effects to improve interactivity.

JavaScript handles the functionality of generating random quotes:
1) A predefined array of objects contains the quotes and their corresponding movie titles.
2) The generateQuote() function is triggered when the button is clicked.
3) This function:
  1. Randomly select a quote from the array using Math.random() and Math.floor().
  2. Updates the text content of the HTML elements displaying the quote and movie title.

const quotes = [
    {
      text: "May the Force be with you.",
      movie: "Star Wars"
    },
    {
      text: "I'm gonna make him an offer he can't refuse.",
      movie: "The Godfather"
    },
    {
      text: "Here's looking at you, kid.",
      movie: "Casablanca"
    },
    {
      text: "Why so serious?",
      movie: "The Dark Knight"
    },
    {
      text: "I see dead people.",
      movie: "The Sixth Sense"
    },
    {
      text: "You can't handle the truth!",
      movie: "A Few Good Men"
    },
    {
      text: "To infinity and beyond!",
      movie: "Toy Story"
    }
  ];

  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    
    document.getElementById("quote").textContent = `"${selectedQuote.text}"`;
    document.getElementById("movie").textContent = `- ${selectedQuote.movie}`;
  }
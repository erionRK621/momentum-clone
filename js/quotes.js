const quotes = [
  {
    quote: "You cannot change what you are, only what you do.",
    author: "-Philip Pullman-",
  },
  {
    quote: "Lay a firm foundation with the bricks that others throw at you.",
    author: "-David Brinkley-",
  },
  {
    quote:
      "Change the way you look at things and the things you look at change.",
    author: "-Wayne Dyer-",
  },
  {
    quote:
      "If you run you stand a chance of losing, but if you don’t run you’ve already lost.",
    author: "-Barack Obama-",
  },
  {
    quote: "If you have always done it that way, it is probably wrong.",
    author: "-Charles Kettering-",
  },
  {
    quote:
      "The greatest mistake you can make in life is to be continually fearing you will make one.",
    author: "-Elbert Hubbard-",
  },
  {
    quote:
      "I cannot say whether things will get better if we change; what I can say is they must change if they are to get better.",
    author: "-Georg C. Lichtenberg-",
  },
  {
    quote:
      "Use what talents you possess, the woods will be very silent if no birds sang there except those that sang best.",
    author: "-Henry van Dyke-",
  },
  {
    quote: "Only I can change my life. No one can do it for me.",
    author: "-Carol Burnett-",
  },
  {
    quote: "Things change. And friends leave. Life doesn’t stop for anybody.",
    author: "-Stephen Chbosky-",
  },
  {
    quote:
      "What you have become is the price you paid to get what you used to want.",
    author: "-Mignon McLaughlin-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

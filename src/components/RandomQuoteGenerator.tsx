// RandomQuoteGenerator.tsx
import React, { useState } from 'react';

const quotes: string[] = [
  'The only way to do great work is to love what you do. - Steve Jobs',
  'Life is what happens when you\'re busy making other plans. - John Lennon',
  'In three words I can sum up everything I\'ve learned about life: it goes on. - Robert Frost',
  // Add more quotes as needed
];

const RandomQuoteGenerator: React.FC = () => {
  const [randomQuote, setRandomQuote] = useState<string>(getRandomQuote);

  function getRandomQuote(): string {
    const randomIndex: number = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function handleNewQuote(): void {
    setRandomQuote(getRandomQuote);
  }

  return (
    <div>
      <blockquote>
        <p>{randomQuote}</p>
      </blockquote>
      <button onClick={handleNewQuote}>New Quote</button>
    </div>
  );
};

export default RandomQuoteGenerator;

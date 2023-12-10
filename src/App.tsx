import React from 'react';
import './assets/styles/style.css';
import RandomQuoteGenerator from './components/RandomQuoteGenerator';
function App() {
  return (
    <div className='centered-div'>
      <h1>Nick's Random Quote Generator</h1>
      <div>
        <RandomQuoteGenerator />
      </div>
    </div>
  );
}

export default App;

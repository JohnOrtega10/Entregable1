
import './App.css';
import QuoteBox from './components/QuoteBox';
import quotes from './quotes.json'
import { useState } from 'react';

function App() {

  const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
  ]
  
  const getNumber = (max) => Math.floor(Math.random() * max);

  const [quote, setQuote] = useState(quotes[getNumber(quotes.length)]);

  const handleQuote = ()=>{
    setQuote(quotes[getNumber(quotes.length)])
  };

  const color = colors[getNumber(colors.length)];
  return (
    <>
      <QuoteBox  quote={quote.quote} author={quote.author} handleQuote={handleQuote} color={color}/>
    </>
  );
}

export default App;

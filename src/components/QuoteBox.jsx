import React from 'react';
import '../App.css'

const QuoteBox = ({quote,author,handleQuote,color}) => {
    return (
        
        <div className={'body'} style={{background:color, color:color}}>
            <div className={'quoteBox'}>
                <div className={'quote'}>
                    <i class="fas fa-quote-left fa-3x"></i>
                    <p>{quote}</p>    
                </div> 
                <div className='author'>
                    <p><i>{author}</i></p>
                    <button onClick={handleQuote} style={{color}}><i class="fas fa-arrow-circle-right fa-3x" ></i></button>
                 </div>
            </div>    
        </div>
    );
};

export default QuoteBox;
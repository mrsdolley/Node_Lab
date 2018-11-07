const quotes = [
        {quote: 'Charnell is tired! ~Nelly'},
        {quote: 'Only thing we have to fear is fear itself. ~FDR'},
        {quote: 'Cant nobody sing like Eddie King, Jr! ~Eddie, Five Heartbeats'},
        {quote: 'Way down in the jungle deep... ~Dolemite'}
        
    ]
    function randomQuote() {
        return quotes[Math.floor(Math.random()*quotes.length)]
    }
    
module.exports = {
    
    randomQuote 
};

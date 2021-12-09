/************************************************
Treehouse Techdegree: 
Project 4 - Random Quote Generator
*************************************************/

// For assistance:  
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/
const quotes = [

  { 

    quote: `Risk more than others think is safe.  Care more than others
            think is practical.  Expect more than others think is possible.`, 

    source: `https://youtu.be/0wQLflDq-yU`,

    citation: `Claude Bissel`,

    year: `1970`

  },

  {

    quote: `Words should be weighed, not counted`, 

    source: `https://youtu.be/0wQLflDq-yU`

  },

  {

    quote: `A happy person is not a person in a certain set of circumstances,
             but rather a person with a certain set of attidues`, 

    source: `https://youtu.be/0wQLflDq-yU`

  },

  {

    quote: `Don't let what you cannot do interfere with what you can do`, 

    source: `https://youtu.be/0wQLflDq-yU`

  },

  {

    quote: `Do not wait to strike till the iron is hot: 
             but make it hot by striking`, 

    source: `https://youtu.be/0wQLflDq-yU`

  }

];

/***
 * `getRandomQuote` function
***/

function getRandomQuote(arr) {

  const randomIndex = Math.floor( Math.random()*arr.length );
  return arr[randomIndex];

}

/***
 * `printQuote` function
***/

function printQuote(arr) {

  let randomQuote = getRandomQuote(arr);
  let html = '';

  /*console.log(randomQuote.quote);
  console.log(randomQuote.citation);*/

  //console.log(randomQuote.hasOwnProperty('citation'));

  if( randomQuote.hasOwnProperty(`citation`) && randomQuote.hasOwnProperty(`year`) ) {

    html = `<p class="quote"> ${randomQuote.quote} </p>
            <p class="source"> ${randomQuote.source} 
              <span class="citation"> ${randomQuote.citation} </span>
              <span class="year"> ${randomQuote.year} </span></p>`;

  }

  else if( randomQuote.hasOwnProperty(`citation`) ) {
    
    html = `<p class="quote"> ${randomQuote.quote} </p> 
            <p class="source"> ${randomQuote.source} 
              <span class="citation"> ${randomQuote.citation} </span></p>`;

  }

  else if( randomQuote.hasOwnProperty(`year`) ) {
    
    html = `<p class="quote"> ${randomQuote.quote} </p>
            <p class="source"> ${randomQuote.source}  
              <span class="year"> ${randomQuote.year} </span></p>`;

  }

  else {

    html = `<p class="quote"> ${randomQuote.quote} </p>
            <p class="source"> ${randomQuote.source} </p>`;

  }
 
  return html;

}

console.log(printQuote(quotes));


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

if (printQuote) {console.log(`not empty`)}
 
document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('quote-box').innerHTML = printQuote(quotes);


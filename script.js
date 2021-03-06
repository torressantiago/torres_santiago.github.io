/* jshint browser: true */
/* jshint esversion: 6 */

//Make sure DOM is ready
document.addEventListener("DOMContentLoaded",function(){
  
// DATA
// 1. dataset of quotes and their authors
  const quotesPool = [["¿De qué te sirve ganar el mundo, si al final pierdes tu alma?", "San Ignacio de Loyola"],
  ["Para aquellos que creen, ninguna prueba es necesaria. Para aquellos que no creen, ninguna cantidad de pruebas es suficiente.", "San Ignacio de Loyola"],
  ["El examen de conciencia es siempre el mejor medio para cuidar bien el alma.", "San Ignacio de Loyola"],
  ["Cuanto más nuestra alma se despegue de las cosas, más cerca estará de nuestro Creador.", "San Ignacio de Loyola"],
  ["Quien evita la tentación evita el pecado.", "San Ignacio de Loyola"],
  ["El amor se ha de poner más en las obras que en las palabras.", "San Ignacio de Loyola"],
  ["En tiempo de desolación nunca hacer mudanza.", "San Ignacio de Loyola"],
  ["Reza como si todo dependiera de Dios. Trabaja como si todo dependiera de ti.", "San Ignacio de Loyola"],
  ["¡Cuán vil me parece la tierra cuando miro al cielo!", "San Ignacio de Loyola"],
  ["No tener moderación muchas veces es causa de que el bien se convierta en mal y la virtud en vicio.", "San Ignacio de Loyola"],
  ["¡Dadme, Señor, vuestro amor y gracia, éstas me bastan!", "San Ignacio de Loyola"],
  ["No el mucho saber harta y satisface al ánima, mas el sentir y gustar de las cosas internamente", "San Ignacio de Loyola"],
  ["No sabes todo lo que Dios haría de ti, si te pusieras enteramente en sus manos", "San Ignacio de Loyola"],
  ["En todo amar y servir", "San Ignacio de Loyola"],
  ["Cuanto el bien es más universal, es más divino.", "San Ignacio de Loyola"],
  ["Todo buen cristiano ha de inclinarse más a salvar la proposición del prójimo que a condenarla", "San Ignacio de Loyola"],
  ["Pedir gracia a Dios nuestro Señor para que todas mis intenciones, acciones y operaciones sean puramente ordenadas en servicio y alabanza de su divina majestad.", "San Ignacio de Loyola"]];

// 2. dataset of color schemes
  const colorsPool = [["#6F6590", "#221C35", "#2D1189"],
  ["#6F6590", "#221C35", "#2D1189"],
  ["#6F6590", "#221C35", "#2D1189"],
  ["#6F6590", "#221C35", "#2D1189"],
  ["#6F6590", "#221C35", "#2D1189"],
  ["#6F6590", "#221C35", "#2D1189"],
  ["#6F6590", "#221C35", "#2D1189"]];

// VARIABLES
  let oldQuoteIndex;
  let oldColorIndex;

//Generate a random number based on argument's length
  function generateNumber(dataPool) {
    return Math.floor(Math.random() * dataPool.length);
  }

//1. Get random number from generateNumber()
//2. check random number to make sure it's not same as last one
//3. Use random number to get new quote from array
//4. Display the quote
  function generateNewQuote() {
    let index = generateNumber(quotesPool);
//While loop so no same quote is generated in a row
    while (index === oldQuoteIndex) {
      index = generateNumber(quotesPool);
    }
    let newQuote = quotesPool[index];
    let quote = document.getElementById("quote");
    let author = document.getElementById("author");
//Show new quote and author on page
    quote.innerHTML = newQuote[0];
    author.innerHTML = newQuote[1];
//Update Tweet href attribute with new quote and author
    let tweet = document.getElementById("tweet-quote");
    tweet.href = 'https://twitter.com/intent/tweet?hashtags=quotes&text="' + newQuote[0] + '" -' + newQuote[1];
//update index checker
    oldQuoteIndex = index;
  }

//1. Get random number from generateNumber()
//2. check random number to make sure it's not same as last one
//3. Use random number to get new color scheme from array
//4. Update page with new color scheme
  function generateNewColor() {
    let index = generateNumber(colorsPool);
// While loop so no same color scheme is generated in a row
    while (index === oldColorIndex) {
      index = generateNumber(colorsPool);
    }
    let colorShade = colorsPool[index];
    let randomQuoteButton = document.querySelectorAll(".btn")[0];
    let twitterButton = document.querySelectorAll(".btn")[1];
    let background = document.body;
    let text = document.querySelector(".container");
    let border = document.querySelector(".border");
    let randomQuoteBorder = document.querySelectorAll(".border-smaller")[0];
    let twitterBorder = document.querySelectorAll(".border-smaller")[1];
//Update page with new color scheme
    randomQuoteButton.style.background = colorShade[0];
    twitterButton.style.background = colorShade[0];
    background.style.background = colorShade[0];
    text.style.color = colorShade[1];
    border.style.borderColor = colorShade[1];
    border.style.boxShadow = "4px 4px 0px 3px " + colorShade[2];
    randomQuoteBorder.style.borderColor = colorShade[1];
    randomQuoteBorder.style.boxShadow = "3px 3px 0px 2px " + colorShade[2];
    twitterBorder.style.borderColor = colorShade[1];
    twitterBorder.style.boxShadow = "3px 3px 0px 2px " + colorShade[2];
//update index checker
    oldColorIndex = index;
  }

//Show new quote and change color scheme on 'Random Quote' button click
  function onQuoteButtonClick() {
    let randomQuoteButton = document.querySelector("#random-quote");
    randomQuoteButton.addEventListener("click", function(){
      generateNewQuote();
      generateNewColor();
    });
  }

  onQuoteButtonClick();

// Get the first quote and color scheme on window load
  window.onload = function () {
    generateNewQuote();
    generateNewColor();
  };
  
});

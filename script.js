
const box = document.getElementById('quote-box');
const text = document.getElementById('quote-text');
const author = document.getElementById('author');


function adjustFontSize() {
   

    let fontSize = parseInt(window.getComputedStyle(text).fontSize);
    
    // Redu dimensiunea fontului până când textul încape în casetă
    while (text.scrollHeight > box.clientHeight || text.scrollWidth > box.clientWidth) {
      fontSize--;
      text.style.fontSize = fontSize + 'px';
    }
  }

  // Apelează funcția pentru a ajusta fontul după ce pagina se încarcă
  window.onload = adjustFontSize;
  // Apelează funcția și când textul este actualizat
  window.onresize = adjustFontSize;
  fetchData();

  async function fetchData() {

    try{
        const response = await fetch("https://stoic-quotes.com/api/quotes");
        if(!response.ok){
            throw new Error("Could not fetch resource.")
        }
        const data = await response.json();
        text.innerHTML = data[0].text;
        author.innerHTML = data[0].author;

    }
    catch(error){
        console.error(error);
    }
  }
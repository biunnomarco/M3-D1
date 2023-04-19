//? EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

/* window.onload = () =>  {
    let twit = document.querySelector("aside div:last-child ol li:nth-child(2)");
    twit.remove();
}
 */

//? EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

/* let links = [];  //* array vuoto
let subLinks = document.getElementsByClassName("stretched-link"); //*secondo e terzo "continua a leggere"
let anotherLink = document.querySelector(".jumbotron .px-0 .lead a");//*primo "continua a leggere" 

links.push(anotherLink); //*push del primo link
for (const subLink of subLinks) { //* push di secondo e terzo
    links.push(subLink);
}
console.log(links)
for (const link of links) { //*per ogni link di links
    link.addEventListener("click", () => { //*al click
        let dad = link.parentNode.parentNode; //*seleziona il parent node
        if (dad===document.querySelector("div.px-0")) { //*se il parent del primo link 
            dad = dad.parentNode; //*allora sali ancora di un livello
        }
        dad.remove(); //*rimuovi il parent node
    })
} */

//? EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

/* let authors = document.querySelectorAll("p.blog-post-meta a");
for (const author of authors) {
    author.addEventListener("mouseover", () => {
        alert(author.innerText);
    })
} */

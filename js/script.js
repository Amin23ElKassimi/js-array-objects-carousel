
// Consegna:
// Dato un array di oggetti letterali con:
// URL dell’immagine
// Titolo della slide
// Descrizione della slide
// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: 
// costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso l'alto o verso il basso, 
// l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Milestone 2: Aggiungere il ciclo infinito del carosello.
// Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto,
//  la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.



// Array
const imagesList = [
    { name : 'spiderman', foto: '01'},
    { name : 'ratchet', foto: '02'},
    { name : 'avatars', foto: '03'},
    { name : 'Acat', foto: '04'},
    { name : 'avengers', foto: '05'},
];

// Element DOM Main Slide
const mainSlide = document.querySelector('#mainSlide');

// ? popoliamo l'html dinamicamente e appendaimo al DOM
imagesList.forEach((element,) => {
    const newImageElement = document.createElement('img');
    newImageElement.src = `./img/${element.foto}.webp`;
    mainSlide.appendChild(newImageElement);
});
console.log(imagesList);

const nextButton = document.querySelector('next');

const prevButton = document.querySelector('prev');













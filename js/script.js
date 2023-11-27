
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
    { title : 'Spiderman Morales',
     description : 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
     foto : '01'},
    { title : 'Ratchet & Clank',
      description : 'Blast your way through an interdimensional adventure. Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality',
      foto: '02'},
    { title : 'avatars',
      description : 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
      foto: '03'},
    { title : 'Fortnite',
      description : 'Create, play, and battle with friends for free in Fortnite.',
      foto: '04'},
    { title : 'avengers',
      description : 'Live out your Super Hero dreams in an epic action-adventure',
      foto: '05'},
];

// Element DOM Main Slide
const mainSlide = document.querySelector('#mainSlide');

// popoliamo l'html dinamicamente e appendaimo al DOM
imagesList.forEach((element,) => {
    const newImageElement = document.createElement('img');
    newImageElement.src = `./img/${element.foto}.webp`;
    mainSlide.appendChild(newImageElement);
});


// POINTER
let activeIndex = 0;
const imageElements = document.querySelectorAll('img');

// Aggiungi la classe active al primo delemento  della lista
imageElements[activeIndex].classList.add('active');
console.log(imageElements[activeIndex]);


const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', function(){

    // # togliere active a chi ce l'ha
    imageElements[activeIndex].classList.remove('active');
    
    // % aggiungo uno all'activeIndex
    // activeIndex++
    if (activeIndex === (imagesList.length - 1)){
        activeIndex =  0;
        console.log('switch');
    }
    else  {
        activeIndex = activeIndex + 1;
    }

    // % aggiungo la classe active al nuovo elemento con activeIndex
    imageElements[activeIndex].classList.add('active');
});


const prevButton = document.querySelector('#prev');
prevButton.addEventListener('click', function(){

    imageElements[activeIndex].classList.remove('active');

    // ? decremento active index
    if (activeIndex === 0){
        activeIndex =  (imagesList.length - 1);
        console.log('switch rewerse');
    }
    else  {
        activeIndex = activeIndex - 1;
    }

    imageElements[activeIndex].classList.add('active');
});











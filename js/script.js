<<<<<<< HEAD
const images = [
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
=======

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
>>>>>>> c61f493b2f69896577a833015bfafc1102cb8ded
];

const slidesWrapperEl =document.querySelector('div.my-carousel-images');
const thumnbailsWrapperEl =document.querySelector('div.my-thumbnails');

<<<<<<< HEAD
let activeIndex = 0;

images.forEach((element, index) => {
    const classesForActiveSlide = (index === activeIndex) ? 'active' : '';
    slidesWrapperEl.innerHTML += generateNewSlide(element.foto, element.title, element.description, index, classesForActiveSlide);

    const newThumbmnailEl = generateNewThumbnail(element.foto, element.title, index, classesForActiveSlide);

    newThumbmnailEl.addEventListener('click', function(){
        changeToSlide(index);
        activeIndex = index;
    })

    thumnbailsWrapperEl.appendChild(newThumbmnailEl);
=======
// popoliamo l'html dinamicamente e appendaimo al DOM
imagesList.forEach((element,) => {
    const newImageElement = document.createElement('img');
    newImageElement.src = `./img/${element.foto}.webp`;
    mainSlide.appendChild(newImageElement);
>>>>>>> c61f493b2f69896577a833015bfafc1102cb8ded
});

let clock;

<<<<<<< HEAD
document.querySelector('#btn-prev').addEventListener('click', function(){
    if (--activeIndex < 0) activeIndex = images.length - 1;
    changeToSlide(activeIndex);
})
=======
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


>>>>>>> c61f493b2f69896577a833015bfafc1102cb8ded

document.querySelector('#btn-next').addEventListener('click', function(){
    if (++activeIndex >= images.length) activeIndex = 0;
    changeToSlide(activeIndex);
})

// clock = setInterval(function(){
//     document.querySelector('#btn-next').click();
// }, 500);


//  dopo tot secondi
//  elemento prev.click()





// Functions

function generateNewSlide(imgSrc, title, description, index, classesToAdd ){
    return `<div class="my-carousel-item ${classesToAdd}" carousel-item="${index}">
        <img class="img-fluid" src="img/${imgSrc}.webp" alt="${title}'s picture">
        <div class="item-description px-3">
            <h2>
                ${title}
            </h2>
            <p>
                ${description}
            </p>
        </div>
    </div>`;
}

function generateNewThumbnail(imgSrc, title, index, classesToAdd){
    const newThumbnailEl = document.createElement('article');
    newThumbnailEl.classList.add('my-thumbnail-item');

    if (classesToAdd.length >= 1){
        newThumbnailEl.classList.add('active');
    }

    newThumbnailEl.setAttribute('thumbnail-item', index)
    newThumbnailEl.innerHTML = `<img src="img/${imgSrc}.webp" alt="${title}'s thumbnail picture">`;

    return newThumbnailEl;
}

function changeToSlide(newIndex){
    document.querySelector('div.my-carousel-item.active').classList.remove('active');
    document.querySelector('article.my-thumbnail-item.active').classList.remove('active');

    document.querySelector('div.my-carousel-item[carousel-item="' + newIndex +'"]').classList.add('active');
    document.querySelector('article.my-thumbnail-item[thumbnail-item="' + newIndex +'"]').classList.add('active');
}



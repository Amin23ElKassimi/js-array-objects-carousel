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
];

const slidesWrapperEl =document.querySelector('div.my-carousel-images');
const thumnbailsWrapperEl =document.querySelector('div.my-thumbnails');

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
});

let clock;

document.querySelector('#btn-prev').addEventListener('click', function(){
    if (--activeIndex < 0) activeIndex = images.length - 1;
    changeToSlide(activeIndex);
})

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



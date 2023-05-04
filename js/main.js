const images = [
    {
        image: "img/01.webp",
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: "img/02.webp",
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: "img/03.webp",
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: "img/04.webp",
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: "img/05.webp",
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
//inizializzazione
let currentSlide = 0;
const primaSlide = `<img class="img-fluid" src="" alt="" id="activeSlide"></img>`
document.getElementById("activeImageWrapper").innerHTML=primaSlide
//thumbnails
let thumbnails="";
for (let i = 0; i < images.length; i++) {
    const element = images[i];
    thumbnails +=  `<img class="img-fluid" src="${images[i].image}" alt="${images[i].title}" ></img>`
}
document.getElementById("thumbnails").innerHTML += thumbnails
document.getElementById("preview").addEventListener("click", function(){
    if(currentSlide > 1){
        cambiaslide(currentSlide-1)
    }
    console.log(currentSlide)
})
document.getElementById("next").addEventListener("click", function(){
    if(currentSlide < images.length){
        cambiaslide(currentSlide+1)
    }
    console.log(currentSlide)
})




function cambiaslide(toSlide) {
    if(toSlide >= 1 && toSlide <= images.length){
        currentSlide = toSlide
        const currentObj = images[toSlide-1]
        document.getElementById("activeSlide").src=currentObj.image
        document.querySelector("#slideText h2").innerText= currentObj.title
        document.querySelector("#slideText h3").innerText= currentObj.text
    }
    else{
        console.error("no ")
    }
} 
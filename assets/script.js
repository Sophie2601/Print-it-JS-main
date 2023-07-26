const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


/* Création bullet points*/
const numberOfSlide = slides.length;
const dots = document.getElementsByClassName("dots");
let index = 0;
for(index = 0; index < slides.length; index++) {
	const dot = document.createElement('span');
	if (index == 0) {
	    dot.classList.add("dot", "dot_selected");
	} else {
		dot.classList.add("dot");
	}
	dots[0].appendChild(dot);
}

/* Carrousel image et texte*/
let i = 0;
const dotsElements = document.querySelectorAll('.dot');
function showSlide() {
	const imageElement = document.querySelector('#banner > img');
    const textElement = document.querySelector('#banner > p');
    imageElement.src = `./assets/images/slideshow/${slides[i].image}`;
    textElement.innerHTML = slides[i].tagLine;
	dotsElements.forEach((dot)=> {
		dot.classList.remove("dot_selected");
	})
	dotsElements[i].classList.add('dot_selected');
}

const left = document.querySelector('.arrow_left');	
left.addEventListener("click", function () {
    if (i == 0) {
        i = numberOfSlide - 1;
    }
    else {
        i--;
    }
        showSlide();
		console.log(left);
});

const right = document.querySelector('.arrow_right');
right.addEventListener("click", function () {
    if (i == numberOfSlide - 1) {
        i = 0;
    } else {
            i++;
    }
        showSlide();
	    console.log(right);
});











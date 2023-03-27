const bannersSlide = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const banner = document.querySelector('#banner');
banner.style.maxWidth = '1440px';
banner.style.margin = '0 auto';

const paragBanner = banner.querySelector('p');
paragBanner.style.position = 'absolute';

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');


const nbrImg = bannersSlide.length;

arrowLeft.addEventListener('click', (e) => {
	curentImg--;
	if(curentImg < 0){
		curentImg = nbrImg - 1;
	}
	displaySlide(curentImg)
})

arrowRight.addEventListener('click', () => {
	curentImg++;
	if(curentImg === nbrImg){
		curentImg = 0;
	}
	displaySlide(curentImg)
})

bulletPointsContainer = document.createElement('div');
banner.appendChild(bulletPointsContainer);
bulletPointsContainer.classList.add('dots')

for(let i=0; i<nbrImg; i++){
	bulletPointsContainer.insertAdjacentHTML('afterbegin', '<div class="dot"></div>');
}

const displaySlide = (nbrImg) => {
	const imgBanner = banner.querySelector('#banner-img');
	if(imgBanner){
		banner.removeChild(imgBanner)
	}
	banner.insertAdjacentHTML('afterbegin', `<img id="banner-img" src="${bannersSlide[nbrImg].image}">`);
	paragBanner.innerHTML = bannersSlide[nbrImg].tagLine;

	const dots = bulletPointsContainer.querySelectorAll('.dot');
	for(let i = 0; i < dots.length; i++) {
		if(i === nbrImg) {
			dots[i].classList.add('dot_selected');
		} else {
			dots[i].classList.remove('dot_selected');
		}
	}
}

let curentImg = 0;
displaySlide(curentImg)
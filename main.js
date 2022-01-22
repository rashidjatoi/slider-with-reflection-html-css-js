const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelectorAll('.slider img');

//getting the number of images
const imagesLength = images.length;  

//defining the slider width according to number of images
slider.style.width = `${imagesLength * 100}%`; 

let currentIndex = 0; //current image index

nextBtn.addEventListener('click',()=>{
	currentIndex += 1;

/* if the current image index is less than or euqal to 1 less than the number of images, we want 	to move the slider to the left */
	if(currentIndex <= imagesLength - 1){
	slider.style.transform = `translateX( -${(100 / imagesLength) * currentIndex }% )`;

/* else set the current image index equal to 0 and move the slider to it's initial position, 	    that is translateX(0) */	
	}else{
		currentIndex = 0;	
		slider.style.transform = 'translateX(0)';
	}
})

prevBtn.addEventListener('click',()=>{
	if(currentIndex > 0){
		currentIndex-=1;
		slider.style.transform = `translateX( -${(100 / imagesLength) * currentIndex }% )`;		
	}else if(currentIndex == 0){
		slider.style.transform = `translateX( -${(100 / imagesLength) * (imagesLength - 1) }% )`
		currentIndex = imagesLength - 1;	
	}
})
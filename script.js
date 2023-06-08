

/*let slides = document.querySelectorAll(".slide_single");
console.log(slides);
let slider = [];
for (let i = 0; i < slides.length; i++) {
	slider[i] =  slides[i].src;
	slides[i].remove();
}
console.log(slides);

let step = 0;
let offset = 0;

function draw() {
	let img = document.createElement('img');
	img.src = slider[step];
	img.classList.add('slide_single');
	img.style.left = offset*250 + 'px';
	document.querySelector('#slide').appendChild(img);
	if(step + 1 == slider.length) {
		step = 0;
	}
	else {
		step++;
	}
	offset = 1;
}
function left() {
	document.onclick = null;
	let slides2 = document.querySelectorAll('.slide_single');
	let offset2 = 0;
	for (let i = 0; i < slides2.length; i++) {
		slides2[i].style.left = offset2*250 - 250 + 'px';
		offset2++;
	}
	setTimeout(function() {
		slides2[0].remove();
		draw();
		document.onclick = left;
	}, 1000);

}
draw();draw();

document.onclick = left;
*/

new Swiper('.image-slider',{
	navigation: {
		nextEl:'.swiper-button-next',
		prevEl:'.swiper-button-prev',
	},
	pagination: {
		  //el: '.swiper-pagination',
		  // clickable:true,
		  // dynamicBullets: true,


		  // type:'fraction',
		  // renderFraction: function (currentClass, totalClass) {
		  // 	return 'Photo <span class="' + currentClass + '"></span>' + 
		  // 	' from' + 
		  // 	'<span class="' + totalClass + '"></span>';
		  //},

		  //type: 'progressbar'


	},
	// scrollbar: {
	// 	el:'.swiper-scrollbar',
	// 	draggable: true,
	// },

	simulateTouch: true,

	touchRatio: 1,

	touchAngle: 45,

	grabCursor:true,

	slideToClickedSlide: true,

	slidesPerView: 3,

	initialSlide: 2,

	loop: true,

	autoplay: {
		delay: 1500,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},

	speed: 1000,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},

});
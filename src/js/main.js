
// $(document).ready(function(){
// 	$('.carusel__inner').slick({
// 		speed: 300,
// 		prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_right.png"></button>',
// 		nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_left.png"></button>',
// 		responsive: [
// 			{
// 				breakpoint: 992,
// 				settings: {
// 					dots: true,
// 					arrows: false
// 				}
// 			 }
// 		]
		
// 	 });
//  });
const slider = tns({
	container: '.carusel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	// navPosition: 'bottom'
	nav: false
});
document.querySelector('.prev').addEventListener('click', function  () {
	slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function  () {
	slider.goTo('next');
});


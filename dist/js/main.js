

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



$(document).ready(function(){
	$('ul.catalog__tabs').on('click', 'li:not(catalog__tab--active)', function() {
		$(this)
			.addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
		  .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
	});

  function toogleSlide(item) {
	  $(item).each(function (i) {
		  $(this).on('click', function (e) {
			  e.preventDefault();
			  $('.catalog-item__content').eq(i).toggleClass('catalog-item__content--active');
			  $('.catalog-item__list').eq(i).toggleClass('catalog-item__list--active');
		  });
	  });
	};
	toogleSlide('.catalog-item__item-link');
	toogleSlide('.catalog-item__link');

	//Modal

	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation ').fadeIn();
	});
	
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation , #thanks, #order').fadeOut();
	});
		
	$('.button--mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay , #order').fadeIn('slow');
		});
	});
	
	function valideForm(form) {
		$(form).validate({
		      rules: {
			       name: "required",
			       phone: "required",
			       email: {
							required: true,
							email: true
		           }
		       },
		   messages: {
			   name: "Будь-ласка, введіть своє ім'я",
			   phone:"Введіть намер телефону",
			   email: {
			            required: "Будь-ласка, введіть адресу своєї пошти",
			            email: "Неправильно введена пошта"
			         }
		 }
	   });
	}

	valideForm('#consultation-form' );
	valideForm('#order form' );
	valideForm('#consultation form' );
	$('input[name=phone]').mask("+380(99) 999-9999");



	$('form').submit(function (e) {
		e.preventDefault();
		if(!$(this).valid()) {
			return;
		}

		$.ajax({
			type: 'POST',
			url: 'mailer/smart.php',
			data: $(this).serialize()
		}).done(function(){
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn();
			$("form").trigger("reset");
		});
		return false;
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	   $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

	new WOW().init();
});




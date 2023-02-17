$(function(){
  

  Fancybox.bind('[data-fancybox="gallery"]', {
    caption: function (fancybox, carousel, slide) {
      return (
        `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
      );
    },
  });

  $('.burger').on('click', function(){
    
    $('.burger').toggleClass('burger--active');
    $('.burger-line').toggleClass('burger-line--active');
    $('.header').toggleClass('header--active');
    $('.menu').toggleClass('menu--active');
   
 
   
  });

  $(window).scroll(function(){
    if ( $(window).scrollTop() >= 300) {
      $('.header__top').addClass('sticky')
    }
    else {
      $('.header__top').removeClass('sticky')
    }
  })

  $(".menu a, .logo, .header__link, .footer__link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  
  var mixer = mixitup('.project__content');


});
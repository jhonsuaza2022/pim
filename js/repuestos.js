window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 992,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 576,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			}
		]
	});
});
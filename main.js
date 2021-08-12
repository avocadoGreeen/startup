$(function(){

	$('.slider__inner').slick({
		slidesToShow: 4,
		infinite: false,
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		responsive: [
                {
                    breakpoint: 1092,
                    settings: {
                    	variableWidth: true,
                        slidesToShow: 3,
                    }
                }
            ]
	});


	function app() {
		const buttons = document.querySelectorAll('.btn')
		const cards = document.querySelectorAll('.card')

		function filter (category, items){
			items.forEach((item) => {
				const isItemFiltered = !item.classList.contains(category)
				const isShowAll = category.toLowerCase() === 'all'
				if (isItemFiltered && !isShowAll){
					item.classList.add('hide')
				} else{
					item.classList.remove('hide')
				}
			})
		}

		buttons.forEach((btn) => {
			btn.addEventListener('click', () => {
				const currentCategory = btn.dataset.filter
				filter(currentCategory, cards)
			})

		})

	}

	app()


	$('.btn').click(function(){
		$('.btn').not(this).removeClass('active');
		$(this).toggleClass('active');

	});

	$('.clients__slider').slick({
		arrows: false,
		dots: true,
	});


	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active-menu');
		$('body').toggleClass('lock');
	});

	$('.header__menu a').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active-menu');
		$('body').toggleClass('lock');
	});

});
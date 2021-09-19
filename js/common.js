(function ($) {

	'use strict'

	$(window).on('load resize', function () {


		function map() {

			const map = $('#map')

			if (map.length > 0) {

				let apiKey = map.attr('data-api-key'),
					apiURL

				if (apiKey) {
					apiURL = 'https://maps.google.com/maps/api/js?key=' + apiKey + '&sensor=false'
				}

				else {
					apiURL = 'https://maps.google.com/maps/api/js?sensor=false'
				}

				$.getScript(apiURL, function (data, textStatus, jqxhr) {
					map.each(function () {

						const current_map = $(this),

							latlng = new google.maps.LatLng(current_map.attr('data-longitude'),

								current_map.attr('data-latitude')),

							point = current_map.attr('data-marker'),

							center = {
								lat: 40.730610,
								lng: -73.935242,
							},

							markerPos = {
								lat: 40.730610,
								lng: -73.935242,
							},

							myOptions = {
								zoom: 13,
								center: center,
								disableDefaultUI: true,
								mapTypeId: google.maps.MapTypeId.ROADMAP,
								mapTypeControl: false,
								scrollwheel: false,
								draggable: true,
								panControl: false,
								zoomControl: false,
								disableDefaultUI: true,
								styles: [
									{
										"featureType": "administrative",
										"elementType": "labels.text.fill",
										"stylers": [
											{
												"color": "#212326",
											}
										]
									},
									{
										"featureType": "administrative.locality",
										"elementType": "labels.text.fill",
										"stylers": [
											{
												"color": "#464646",
											}
										]
									},
									{
										"featureType": "landscape",
										"elementType": "all",
										"stylers": [
											{
												"color": "#F8F8F9",
											}
										]
									},
									{
										"featureType": "poi",
										"elementType": "all",
										"stylers": [
											{
												"visibility": "off",
											}
										]
									},
									{
										"featureType": "road",
										"elementType": "all",
										"stylers": [
											{
												"saturation": -100,
											},
											{
												"lightness": 45,
											}
										]
									},
									{
										"featureType": "road",
										"elementType": "labels",
										"stylers": [
											{
												"visibility": "on",
											}
										]
									},
									{
										"featureType": "road",
										"elementType": "labels.icon",
										"stylers": [
											{
												"visibility": "on",
											}
										]
									},
									{
										"featureType": "transit",
										"elementType": "all",
										"stylers": [
											{
												"visibility": "on",
											}
										]
									},
									{
										"featureType": "road.highway",
										"elementType": "all",
										"stylers": [
											{
												"visibility": "on",
											}
										]
									},
									{
										"featureType": "road.arterial",
										"elementType": "labels.icon",
										"stylers": [
											{
												"visibility": "on",
											}
										]
									},
									{
										"featureType": "transit",
										"elementType": "all",
										"stylers": [
											{
												"visibility": "on",
											}
										]
									},
									{
										"featureType": "water",
										"elementType": "all",
										"stylers": [
											{
												"color": "#E2E3E7",
											},
											{
												"visibility": "on",
											}
										]
									}
								]
							}

						const map = new google.maps.Map(current_map[0], myOptions)

						const marker = new google.maps.Marker({
							map: map,
							icon: {
								size: new google.maps.Size(59, 69),
								origin: new google.maps.Point(0, 0),
								anchor: new google.maps.Point(0, 69),
								url: point,
							},
							position: markerPos
						})

						google.maps.event.addDomListener(window, "resize", function () {
							const center = map.getCenter()
							google.maps.event.trigger(map, "resize")
							map.setCenter(center)
						})
					})
				})
			}
		}

		map()


		function textBox() {

			const textBox = $('.text-box')

			if (!textBox.length) return

			textBox.each(function () {

				const $this = $(this)
				const eachHeight = parseInt($this.find('.text-box__text').css('height'))
				const slideBlock = $this.find('.text-box__details')

				slideBlock.css({'transform':'translateY(' + eachHeight + 'px)'})

			})

		}

		textBox()

	})

	$(window).on('scroll', function () {


		function headerFrontOne () {

			const header = $('.header-common')

			if (!header.length) return

			const lower = $('.header-common .header__lower')
			const scroll = $(window).scrollTop()
	
			if (scroll >= 1) {
				lower.addClass('header__lower--fixed')
			}
	
			else {
				lower.removeClass('header__lower--fixed')
			}

		}

		headerFrontOne ()


		function headerFrontTwo () {

			const header = $('.header-f2')

			if (!header.length) return

			const topSize = parseInt(header.find('.header__lower').css('height'))
			const lower = $('.header-f2 .header__top')
			const scroll = $(window).scrollTop()

			if (scroll >= 1) {
				header.css({'transform':'translate(-50%, -' + topSize + 'px)'})
				lower.addClass('lower--fixed')
			}

			else {
				header.css({'transform':'translate(-50%, -' + 0 + 'px)'})
				lower.removeClass('lower--fixed')
			}

		}

		headerFrontTwo()


		function headerFrontThree () {

			const header = $('.header-f3')

			if (!header.length) return

			const topSize = parseInt(header.find('.header__lower').css('height'))
			const lower = $('.header-f3 .header__top')
			const scroll = $(window).scrollTop()

			if (scroll >= 1) {
				header.css({'transform':'translate(-50%, -' + topSize + 'px)'})
				lower.addClass('lower--fixed')
			}

			else {
				header.css({'transform':'translate(-50%, -' + 0 + 'px)'})
				lower.removeClass('lower--fixed')
			}

		}

		headerFrontThree()


		function headerIntro () {

			const header = $('.header-intro')

			if (!header.length) return

			const scroll = $(window).scrollTop()

			if (scroll >= 1) {
				header.addClass('header--fixed')
			}

			else {
				header.removeClass('header--fixed')
			}

		}

		headerIntro()

	})

	$(document).ready(function () {


		objectFitImages()


		function menuTrigger() {

			const trigger = $('.hamburger')

			if (!trigger.length) return

			$('.hamburger').on('click', function() {

				$('body').toggleClass('body--static')
				$('.menu-dropdown').toggleClass('menu-dropdown--active')
	
			})
			
		}

		menuTrigger()


		function mobileMenu() {

			$('.screen--trigger').on('click', function() {

				const triggerValue = $(this).data('category')

				$('.screen--start').addClass('screen--inactive')

				$('.menu-dropdown__inner').each(function() {

					if ($(this).data('value') === triggerValue) {

						$(this).addClass('menu-dropdown__inner--active')

					}

				})

			})

			$('.screen__back').on('click', function() {

				$('.menu-dropdown__inner').removeClass('menu-dropdown__inner--active')
				$('.screen--start').removeClass('screen--inactive')

			})

			$('.screen__link').on('click', function () {

				$('body').removeClass('body--static')
				$('.menu-dropdown').removeClass('menu-dropdown--active')

			})

			$('.aside-menu .main-menu__item .main-menu__link').on('click', function () {

				$('body').removeClass('body--static')
				$('.menu-dropdown').removeClass('menu-dropdown--active')

			})

		}

		mobileMenu()


		function scrollToId() {

			var scroll = $('a.main-menu__link--scroll')

			if(!scroll.length) return

			scroll.mPageScroll2id({
				highlightClass: 'main-menu__link--highlighted',
			})

		}

		scrollToId()


		$(window).on('scroll', function () {

			const lower = $('.header-common .header__lower')
			const scroll = $(window).scrollTop()

			if (scroll >= 1) {
				lower.addClass('header__lower--fixed')
			}

			else {
				lower.removeClass('header__lower--fixed')
			}

		})


		$('.alert__close').on('click', function () {

			$(this).parent('.alert').fadeOut(300)

		})


		function scrollTo () {

			const scrollTo = $('a.anchor[href^="#"]')

			if (!scrollTo.length) return

			scrollTo.on("click", function (e) {

				const anchor = $(this)

				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top
				}, 600)

				e.preventDefault()
				
			})

		}

		scrollTo()


		function accordion() {

			const accordion = $('.accordion')

			if (!accordion.length) return

			const close = $('.accordion .accordion__close')

			close.on('click', function () {

				$(this).toggleClass('accordion__close--active').parents().children('.accordion__text-block').stop().slideToggle(300)

			})

		}

		accordion()


		function counter() {

			const counter = $('.js-counter')

			if (!counter.length) return

			counter.counterUp({

				delay: 10,
				time: 1500,

			})

		}

		counter()


		function barChart() {

			const barChart = $('#bar-chart')

			if (!barChart.length) return

			const ctx = barChart[0].getContext('2d')
			
			const myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
					datasets: [{
						label: '# of Votes',
						data: [12, 19, 3, 5, 2, 3],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)',
						],
						borderWidth: 1
					}]
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true,
							}
						}]
					}
				}
			})

		}

		barChart()


		function lineChart() {

			const lineChart = $('#line-chart')

			if (!lineChart.length) return

			const ctx = lineChart[0].getContext('2d')

			const myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					datasets: [{
						label: 'Red',
						data: [330, 250, 480, 120, 220, 130, 255],
						backgroundColor: 'rgba(255, 99, 132, 0.2)',
						borderColor: 'rgba(255, 99, 132, 1)',
						borderWidth: 1,
					}, {
						label: 'Blue',
						data: [230, 350, 120, 240, 360, 180, 295],
						backgroundColor: 'rgba(105, 195, 255, 0.2)',
						borderColor: 'rgba(105, 195, 255, 1)',
						borderWidth: 1,
					}, {
						label: 'Yellow',
						data: [450, 290, 123, 332, 439, 222, 340],
						backgroundColor: 'rgba(255, 209, 94, 0.2)',
						borderColor: 'rgba(255, 209, 94, 1)',
						borderWidth: 1,
					}, {
						label: 'Green',
						data: [400, 450, 380, 250, 450, 320, 210],
						backgroundColor: 'rgba(155, 220, 220, 0.2)',
						borderColor: 'rgba(155, 220, 220, 1)',
						borderWidth: 1,
					}, {
						label: 'Purple',
						data: [500, 220, 110, 50, 430, 310, 410],
						backgroundColor: 'rgba(154, 104, 255, 0.2)',
						borderColor: 'rgba(154, 104, 255, 1)',
						borderWidth: 1,
					}, {
						label: 'Orange',
						data: [0, 100, 200, 300, 400, 320, 222],
						backgroundColor: 'rgba(255, 159, 64, 0.2)',
						borderColor: 'rgba(255, 159, 64, 1)',
						borderWidth: 1,
					}]
				}
			})

		}

		lineChart()


		function radarChart() {

			const radarChart = $('#radar-chart')

			if (!radarChart.length) return

			const ctx = radarChart[0].getContext('2d')

			const myChart = new Chart(ctx, {
				type: 'radar',
				data: {
					labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
					datasets: [
						{
							label: 'First',
							data: [100, 44, 55, 90, 55, 80, 100],
							backgroundColor: 'rgba(154, 104, 255, 0.2)',
							borderColor: 'rgba(154, 104, 255, 1)',
							borderWidth: 1,

						}, {
							label: 'Second',
							data: [30, 80, 60, 20, 40, 100, 50],
							backgroundColor: 'rgba(255, 99, 132, 0.2)',
							borderColor: 'rgba(255, 99, 132, 1)',
							borderWidth: 1,
						}]
				}
			})

		}

		radarChart()


		function doughnutChart() {

			const doughnutChart = $('#doughnut-chart')

			if (!doughnutChart.length) return

			const ctx = doughnutChart[0].getContext('2d')

			const myChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ['Red', 'Blue', 'Yellow'],
					datasets: [{
						data: [70, 20, 10],
						backgroundColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(105, 195, 255, 1)',
							'rgba(255, 209, 94, 1)',
						],
					}]
				}
			})

		}

		doughnutChart()


		function tabs() {

			const tabs = $('.tabs')

			if (!tabs.length) return

			tabs.responsiveTabs({

				startCollapsed: 'false',

			})

		}

		tabs()


		function videoTrigger() {

			const trigger = $('.video-trigger')

			if (!trigger.length) return

			trigger.fancybox()

		}

		videoTrigger()


		function photoTrigger() {

			const trigger = $('.photo-trigger')

			if (!trigger.length) return

			trigger.fancybox()

		}

		photoTrigger()


		function masonryGallery() {

			const masonryGallery = $('.gallery-masonry')

			if (!masonryGallery.length) return

			masonryGallery.isotope({
				itemSelector: '.gallery-masonry__item',
				percentPosition: true,
			})

			const filter = $('.filter-panel__item')

			filter.on('click', function () {

				const filterValue = $(this).attr('data-filter')

				masonryGallery.isotope({ 
					filter: filterValue ,
				})

			})

			filter.on('click', function () {

				filter.removeClass('filter-panel__item--active')
				$(this).addClass('filter-panel__item--active')

			})

		}

		masonryGallery()


		function quantity() {

			const count = $('.cart-item__count')

			if (!count.length) return

			const minus = $('.cart-item__minus')
			const plus = $('.cart-item__plus')

			minus.on('click', function () {

				const $input = $(this).parent().find('input')
				let count = parseInt($input.val()) - 1
				count = count < 1 ? 1 : count
				$input.val(count)
				$input.change()
				return false

			})

			plus.on('click', function () {

				const $input = $(this).parent().find('input')
				$input.val(parseInt($input.val()) + 1)
				$input.change()
				return false

			})

		}

		quantity()


		function formQuantity() {

			const count = $('.form__count')

			if (!count.length) return

			const minus = $('.form__minus')
			const plus = $('.form__plus')

			minus.on('click', function () {

				const $input = $(this).parent().find('input')
				let count = parseInt($input.val()) - 1
				count = count < 1 ? 1 : count
				$input.val(count)
				$input.change()
				return false

			})

			plus.on('click', function () {

				const $input = $(this).parent().find('input')
				$input.val(parseInt($input.val()) + 1)
				$input.change()
				return false

			})

		}

		formQuantity()


		function rangeSlider() {

			const rangeSlider = $('.range-slider .range-slider__bar')

			if (!rangeSlider.length) return

			const min = $('.range-slider__min')
			const max = $('.range-slider__max')

			rangeSlider.ionRangeSlider({

				type: 'double',
				min: 0,
				max: 5000,
				from: 0,
				to: 3000,
				skin: 'round',
				step: 10,
				onChange: function (data) {

					min.val(data.from)
					max.val(data.to)

				},

			})

		}

		rangeSlider()


		function select() {

			const select = $('.form__select')

			if (!select.length) return

			select.niceSelect()

		}

		select()


		function asideTrigger() {

			const trigger = $('.shop__aside-trigger')

			if (!trigger.length) return

			trigger.on('click', function () {

				$('body').find('.aside-holder').toggleClass('aside-holder--visible')
				$('body').find('.shop__backdrop').toggleClass('shop__backdrop--visible')

			})

			const close = $('.shop__aside-close')

			close.on('click', function () {

				$('body').find('.aside-holder').removeClass('aside-holder--visible')
				$('body').find('.shop__backdrop').removeClass('shop__backdrop--visible')

			})

			const backdrop = $('.shop__backdrop')

			backdrop.on('click', function () {
				$(this).removeClass('shop__backdrop--visible')
				$('body').find('.aside-holder').removeClass('aside-holder--visible')
			})

		}

		asideTrigger()



		function promoSlider() {

			const slider = $('.slider')

			if (!slider.length) return

			const status = $('.slider__count')

			$('.slider--style-2').on('init afterChange', function (event, slick, currentSlide, nextSlide) {

				let i = (currentSlide ? currentSlide : 0) + 1
				status.text(i + '/' + slick.slideCount)

			})

			slider.slick({

				fade: true,
				adaptiveHeight: true,
				infinite: true,
				speed: 1200,
				arrows: false,
				dots: true,
				appendDots: $('.slider__nav'),

			})

		}

		promoSlider()


		function testimonialsSlider() {

			const testimonials = $('.testimonials-slider')

			if (!testimonials.length) return

			const testimonialsOne = $('.testimonials-slider--style-1')

			testimonialsOne.slick({

				arrows: false,
				dots: true,
				appendDots: $('.testimonials--style-1__dots'),
				adaptiveHeight: true,

			})

			const testimonialsTwo = $('.testimonials-slider--style-2')

			testimonialsTwo.slick({

				arrows: false,
				dots: true,
				fade: true,
				appendDots: $('.testimonials--style-2__dots'),
				adaptiveHeight: true,

			})

			const testimonialsThree = $('.testimonials-slider--style-3')

			testimonialsThree.slick({

				arrows: false,
				dots: true,
				fade: true,
				appendDots: $('.testimonials--style-3__dots'),
				adaptiveHeight: true,

			})

		}

		testimonialsSlider()


		function logosSlider() {

			const slider = $('.logos-slider')

			if (!slider.length) return

			slider.slick({

				arrows: false,
				dots: true,
				appendDots: $('.logos-slider__dots'),
				slidesToShow: 5,
				slidesToScroll: 4,
				responsive: [{
					breakpoint: 992,
					settings: {
						slidesToShow: 4,
					}
				},{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				}, {
					breakpoint: 576,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				}]

			})

		}

		logosSlider()


		function dualSlider() {

			const slider = $('.main-slider')

			if (!slider.length) return

			slider.slick({

				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				asNavFor: '.nav-slider',
				fade: true,

			})

			const navSlider = $('.nav-slider')

			navSlider.slick({

				slidesToShow: 4,
				slidesToScroll: 1,
				asNavFor: '.main-slider',
				focusOnSelect: true,
				arrows: false,

			})

		}

		dualSlider()


		function relatedSlider() {

			const relatedSlider = $('.related-slider')

			if (!relatedSlider.length) return

			relatedSlider.slick({

				slidesToShow: 4,
				slidesToScroll: 2,
				arrows: false,
				dots: true,
				appendDots: $('.related-slider__dots'),

				responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
					}
				}, {
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				}, {
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					}
				}]

			})

		}

		relatedSlider()


		function toursSlider() {

			const slider = $('.tours-slider')

			if (!slider.length) return

			slider.slick({

				arrows: false,
				dots: true,
				appendDots: $('.tours-slider__dots'),
				slidesToShow: 3,
				responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				}, {
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
					}
				}]

			})

		}

		toursSlider()


		function donationSlider() {

			const slider = $('.donation-slider')

			if (!slider.length) return
			
			slider.slick({

				slidesToShow: 2,
				arrows: false,
				dots: true,
				appendDots: $('.donation-slider__dots'),

				responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				}]

			})

		}

		donationSlider()


		function instagramSlider() {

			const slider = $('.instagram-slider')

			if (!slider.length) return

			slider.slick({

				arrows: false,
				dots: false,
				slidesToShow: 6,
				responsive: [{
					breakpoint: 1600,
					settings: {
						slidesToShow: 5,
					}
				}, {
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
					}
				}, {
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				}]

			})

		}

		instagramSlider()


		function destSlider() {

			const slider = $('.destination-slider')

			if (!slider.length) return

			slider.slick({

				arrows: false,
				dots: true,
				appendDots: $('.destination-slider__dots'),
				slidesToShow: 4,
				slidesToScroll: 2,

				responsive: [{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2,
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				}, {
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
					}
				}]

			})

		}

		destSlider()


		function blogsSlider() {

			const slider = $('.blogs-slider')

			if (!slider.length) return

			slider.slick({

				arrows: false,
				dots: true,
				appendDots: $('.blogs-slider__dots'),
				slidesToShow: 2,
				slidesToScroll: 1,

				responsive: [{

					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}

				}]

			})

		}

		blogsSlider()


		function fishesSlider() {

			const slider = $('.fishes-slider')

			if (!slider.length) return

			slider.slick({

				arrows: false,
				dots: true,
				appendDots: $('.fishes-slider__dots'),
				slidesToShow: 5,
				slidesToScroll: 2,

				responsive: [{
					breakpoint: 1830,
					settings: {
						slidesToShow: 4,
					}
				}, {
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				}, {
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					}
				}]

			})

		}

		fishesSlider()


		function pagesSlider() {

			const slider = $('.pages-slider')

			if (!slider.length) return

			const dots  = $('.pages-slider__dots')

			slider.slick({

				slidesToShow: 2,
				arrows: false,
				dots: true,
				appendDots: dots,
				adaptiveHeight: true,
				responsive: [{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				}]

			})

		}

		pagesSlider()


		function form() {

			const jsform = $('#ajax-form')

			if (!jsform.length) return

			$('#ajax-form').validate({

				rules: {
					name: {
						required: true,
						minlength: 2
					},
					email: {
						required: true,
						email: true
					},
					phone: {
						required: true,
					},
					message: {
						required: true,
					}
				},

				messages: {
					name: {
						required: "Please enter your name",
						minlength: "Your name must consist of at least 2 characters"
					},
					email: {
						required: "Please enter your email"
					},
					phone: {
						required: "Please enter your phone number"
					},
					message: {
						required: "Please enter your message"
					}
				},

				submitHandler: function(form) {

					$(form).ajaxSubmit({

						type:"POST",
						data: $(form).serialize(),
						url:"form.php",

						success: function() {

							$('.alert--success').fadeIn()
							$('#ajax-form').each(function(){

								this.reset()

							})

						},

						error: function() {

							$('.alert--error').fadeIn()

						}
					})
				}
			})

		}

		form()

	})

}(jQuery))

StarWars = (function() {
  
  /* 
   * Constructor
   */
  function StarWars(args) {
    // Context wrapper
    this.el = $(args.el);
    
    // Audio to play the opening crawl
    this.audio = this.el.find('audio').get(0);
    
    // Start the animation
    this.start = this.el.find('.start');
    
    // The animation wrapper
    this.animation = this.el.find('.animation');
    
    // Remove animation and shows the start screen
    this.reset();

    // Start the animation on click
    this.start.bind('click', $.proxy(function() {
      this.start.hide();
      this.audio.play();
      this.el.append(this.animation);
    }, this));
    
    // Reset the animation and shows the start screen
    $(this.audio).bind('ended', $.proxy(function() {
      this.audio.currentTime = 0;
      this.reset();
    }, this));
  }
  
  /*
   * Resets the animation and shows the start screen.
   */
  StarWars.prototype.reset = function() {
    this.start.show();
    this.cloned = this.animation.clone(true);
    this.animation.remove();
    this.animation = this.cloned;
  };

  return StarWars;
})();

new StarWars({
  el : '.starwars'
});


/*-------------------------
BVAmbient - VanillaJS Particle Background
https://bmsvieira.github.io/BVAmbient/
Made by: Bruno Vieira
--------------------------- */

var isPaused = false;

class BVAmbient {

    constructor({
        selector = 'defaultId',
        particle_number = "50",
        particle_maxwidth = "30",
        particle_minwidth = "5",
        particle_radius = "50",
        particle_opacity = true,
        particle_colision_change = true,
        particle_background = "#ededed",
        particle_image = {
            image: false,
            src: ""
        },
        responsive = [
            {
              breakpoint: "default"
            }
        ],
        fps = "60",
        max_transition_speed = 12000,
        min_transition_speed = 8000,
        refresh_onfocus = true
    }) 
    {
        // Define Variables
        this.selector = selector.substring(1);
        this.particle_number = particle_number;
        this.fps = fps;
        this.max_transition_speed = max_transition_speed,
        this.min_transition_speed = min_transition_speed,
        this.particle_maxwidth = particle_maxwidth;
        this.particle_minwidth = particle_minwidth;
        this.particle_radius = particle_radius;
        this.particle_colision_change = particle_colision_change;
        this.particle_background = particle_background;
        this.particle_image = particle_image; 
        this.responsive = responsive;
        this.particle_opacity = particle_opacity;
        this.refresh_onfocus = refresh_onfocus;

        // Global Variables
        var randomID = Math.floor(Math.random() * (9999 - 0 + 1)) + 0;
        var selector = this.selector;
        var fps = this.fps;
        var isPlaying = true;
        var particle_maxwidth = this.particle_maxwidth;
        var particle_minwidth = this.particle_minwidth;
        var particle_radius = this.particle_radius;
        var particle_colision_change = this.particle_colision_change;
        var particle_background = this.particle_background;
        var particle_image = this.particle_image;
        var responsive = this.responsive;
        var particle_opacity = this.particle_opacity;
        var trail_count = 0;
        var max_transition_speed = this.max_transition_speed;
        var min_transition_speed = this.min_transition_speed;
        var refresh_onfocus = this.refresh_onfocus;

        var particle_x_ray = [];

        // Add movement to particle
        this.MoveParticle = function(element) {

                var isresting = 1;

                // Moving Directions
                var top_down = ['top', "down"];
                var left_right = ["left", "right"];

                // Random value to decide wich direction follow
                var direction_h = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
                var direction_v = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

                // Direction
                var d_h = left_right[direction_h];
                var d_v = top_down[direction_v];

                var pos = 0, ver = 0, element_width = element.offsetWidth; 
                var rect_main = document.getElementById(selector);

                // Change particle size
                function ChangeParticle(particle)
                {

                    // Check if random color is enabled, change particle color when colides
                    if(particle_background == "random") { particle.style.backgroundColor = getRandomColor(); }

                    // Get random number based on the width and height of main div
                    var RandomWidth = Math.random() * (particle_maxwidth - particle_minwidth) + particle_minwidth;
                    particle.style.width = RandomWidth+"px";
                    particle.style.height = RandomWidth+"px";

                }

                // Set frame to move particle
                function SetFrame() {

                    if (isPlaying) setTimeout(SetFrame, 1000 / fps);

                            // Element offset positioning
                            pos = element.offsetTop; 
                            ver = element.offsetLeft; 

                                // Check colision bounds
                                if(pos == rect_main.offsetHeight-element_width) {
                                    d_v = "top";
                                    pos = rect_main.offsetHeight-element_width;
                                    isresting = 1;
                                    if(particle_colision_change == true) { ChangeParticle(element); } // Change Particle Size on colision
                                } 
                                if(pos <= 0){ 
                                    d_v = "down"; 
                                    pos = 0; 
                                   isresting = 1;
                                    if(particle_colision_change == true) { ChangeParticle(element); } // Change Particle Size on colision
                                }
                                if(ver == rect_main.offsetWidth-element_width){ 
                                    d_h = "left";
                                    ver = rect_main.offsetWidth-element_width; 
                                    isresting = 1;
                                     if(particle_colision_change == true) { ChangeParticle(element); } // Change Particle Size on colision
                                 } 
                                if(ver <= 0){ 
                                    d_h = "right";
                                    ver = 0;
                                    isresting = 1;
                                    if(particle_colision_change == true) { ChangeParticle(element); } // Change Particle Size on colision
                                }
                       
                                // It won add another position until the end of transition
                                if(isresting == 1)
                                {

                                    var RandomTransitionTime = Math.floor(Math.random() * (max_transition_speed - min_transition_speed + 1)) + min_transition_speed;
                                    element.style.transitionDuration = RandomTransitionTime+"ms";

                                    // Check Position
                                    if(d_v == "down" && d_h == 'left')
                                    {
                                        element.style.left = Number(element.offsetLeft) - Number(300) + "px"; 
                                        element.style.top = rect_main.offsetHeight-Number(element_width) + "px"; 
                                        isresting = 0;
                                    }
                                    if(d_v == "down" && d_h == 'right')
                                    {
                                        element.style.left = Number(element.offsetLeft) + Number(300) + "px"; 
                                        element.style.top = rect_main.offsetHeight-Number(element_width) + "px"; 
                                        isresting = 0;
                                       
                                    }
                                    if(d_v == "top" && d_h == 'left')
                                    {
                                        element.style.left = Number(element.offsetLeft)-Number(element_width) - Number(300) + "px"; 
                                        element.style.top = "0px"; 
                                        isresting = 0;
                                      
                                    }
                                    if(d_v == "top" && d_h == 'right') 
                                    {
                                        element.style.left = Number(element.offsetLeft)-Number(element_width) + Number(300) + "px"; 
                                        element.style.top = "0px"; 
                                        isresting = 0;
                                    }  
                                }
                             
                            // Saves particle position to array
                            if(element.offsetLeft != 0 && element.offsetTop != 0) { particle_x_ray[element.id] = ({'id': element.id, 'x': element.offsetLeft, 'y': element.offsetTop}); }
      
                }

                // Call function for the first time
                SetFrame();
        };

        // Set up particles to selector div
        this.SetupParticles = function(number) {

            var resp_particles;
            particle_x_ray = [];

            // Get window viewport inner width
            var windowViewportWidth = window.innerWidth;

            // If functions brings no number, it follow the default
            if(number == undefined)
            {

                // Loop responsive object to get current viewport
                for (var loop = 0; loop < responsive.length; loop++) {
                    if(responsive[loop].breakpoint >= windowViewportWidth) { resp_particles = responsive[loop]["settings"].particle_number; }
                }

                // If there is no result from above, default particles are applied
                if(resp_particles == undefined) { resp_particles = this.particle_number; }

            } else {
                resp_particles = number;
            }

            // Add number of particles to selector div
            for (var i = 1; i <= resp_particles; i++) {

                // Generate random number to particles
                var random_id_particle = Math.floor(Math.random() * (9999 - 0 + 1)) + 0;

                // Check if image source is empty and append particle to main div
                if(this.particle_image['image'] == false)
                {
                    document.getElementById(this.selector).insertAdjacentHTML('beforeend', "<div id='bvparticle_"+random_id_particle+"' class='bvambient_particle' style='display: block;'></div>");  
                } else {
                    document.getElementById(this.selector).insertAdjacentHTML('beforeend', "<img src='"+this.particle_image['src']+"' id='bvparticle_"+random_id_particle+"' class='bvambient_particle' style='display: block;'>");
                }

                var bvparticle = document.getElementById("bvparticle_"+random_id_particle);

                // Add
                particle_x_ray.push("bvparticle_"+random_id_particle);

                // Get Width and Height of main div
                var widthMainDiv = document.getElementById(selector);

                // Get random number based on the width and height of main div
                var RandomTopPosition = Math.floor(Math.random() * (widthMainDiv.offsetHeight - 40 + 1)) + 0;
                var RandomLeftPosition = Math.floor(Math.random() * (widthMainDiv.offsetWidth - 100 + 1)) + 0;

                // Get random number based on the width and height of main div
                var RandomWidth = Math.random() * (this.particle_maxwidth - this.particle_minwidth) + this.particle_minwidth;

                // Get Random Opacity between 0.2 and 1 if active
                if(particle_opacity == true) { var RandomOpacity = Math.random() * (1 - 0.2) + 0.2; } else { var RandomOpacity = 1; }

                // Add random positioning to particle
                bvparticle.style.top = RandomTopPosition+"px"; 
                bvparticle.style.left = RandomLeftPosition+"px"; 
                bvparticle.style.width = RandomWidth+"px";
                bvparticle.style.height = RandomWidth+"px";
                bvparticle.style.opacity = RandomOpacity;                
                bvparticle.style.borderRadius = particle_radius+"px";

                // Check if it has random color enabled
                if(particle_background == "random") { bvparticle.style.backgroundColor = getRandomColor(); } else { bvparticle.style.backgroundColor = particle_background; }

                // Move particle
                this.MoveParticle(bvparticle);
            }
        }

        // ** SETUP SLIDE **
        this.SetupParticles();

        if(refresh_onfocus == true){
        // When user enters tab again refresh position
        document.addEventListener('focus', (e) => {
            document.getElementById(selector).innerHTML = "";
            this.SetupParticles();
        });}

        // Refresh results
        this.particle_x_ray = particle_x_ray;

        // Generates a random hex color
        function getRandomColor() {
              var letters = '0123456789ABCDEF';
              var color = '#';
              for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
              }
              return color;
        }
    }

    // ** METHODS **
    // REFRESH PARTICLES 
    Refresh() {

        // Remove all particles
        document.getElementById(this.selector).innerHTML = "";
        // Setup new Ambient
        this.SetupParticles();
    }

    // DESTROY
    Destroy() {

        // Remove all particles and unbind all its events
        document.getElementById(this.selector).remove();
    }

    // ADD PARTICLES
    Add(number) {
        if(number != undefined)
        {
            // Add new particles
            this.SetupParticles(number);  
        }
    }

    // PAUSE
    Controls(command)
    {
        // Check what type of command is
        switch(command) {
          case "pause": // Pause Particles moviment
            isPaused = true;
            break;
          case "play": // Resume Particles moviment
            isPaused = false;
            break;
          default:
            console.log("BVAmbient | Command not recognized.");
        } 
    }

    // CHANGE PARTICLES
    Change(properties) {

            // Changes particles according to properties available
            if(properties.type == "particle_background")
            {
                document.querySelectorAll('.bvambient_particle').forEach((item) => {
                    // Change to chosen color
                    item.style.backgroundColor = properties.value;
                });
            } else { console.log("BVAmbient | Propertie not recognized."); }
    }
}
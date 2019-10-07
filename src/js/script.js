$(function () {

	$('.services-caro').owlCarousel({
		loop: false,
		margin: 5,
		nav: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	})



	// Скрипт карусели
	$('.reviews-caro').slick({
		speed: 1500,
		autoplay: true,
		adaptiveHeight: true,
		arrows: false,
		dots: true,
	});
	//


	var header = $("#header"),
		introH = $("#about").innerHeight(),
		scrollOffset = $(window).scrollTop();


	/* Fixed Header */
	checkScroll(scrollOffset);

	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


	/* Smooth scroll */
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});


	/* Menu nav toggle */
	$("#nav-toggle").on("click", function (event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});


});
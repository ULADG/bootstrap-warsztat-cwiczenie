$(function () {
	$(window).scroll(function () {
		if ($(document).scrollTop() >= 50) {
			$('#main-nav').addClass('scroll');
			$('#main-nav').css({'transition': 'all 0.3s'});
		} else {
				$('#main-nav').removeClass('scroll');
		}
	});
});

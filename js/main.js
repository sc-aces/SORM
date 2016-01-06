jQuery("document").ready(function ($) {
	var sormNav = $('.sormNav-container');
	$(window).scroll(function () {
		$('.linkSection').each(function () {
			if($(window).scrollTop() < 1200){
				$('.sormNav li').removeClass('active');
				$('.sormNav #sormNavHome').addClass('active');
			}
			else if ($(window).scrollTop() > $(this).position().top - ($(this).height() / 2)) {
				$('.sormNav li').removeClass('active');
				// console.log($(window).scrollTop() + " > " + $(this).position().top + " - " + ($(this).height() / 2));
				// console.log($(window).height());
				$('.sormNav li#sormNav' + $(this).attr('id').split('-')[1]).addClass('active');
			}
		});
	});
});


$(document).ready(function () {
	$("#sormNavHome").click(function () {
		$('html, body').animate({scrollTop: $("#sec-home").offset().top}, 1000);
		$('.sormNav li').removeClass('active');
		$('.sormNav #sormNavHome').addClass('active');
	});

	$("#sormNavStructureRules").click(function () {
		$('html, body').animate({scrollTop: $("#sec-structureRules").offset().top}, 1000);
		$('.sormNav li').removeClass('active');
		$('.sormNav #sormNavStructureRules').addClass('active');
	});

	$("#sormNavCouncillorHandbook").click(function () {
		$('html, body').animate({scrollTop: $("#sec-councillorHandbook").offset().top}, 1000);
		$('.sormNav li').removeClass('active');
		$('.sormNav #sormNavCouncillorHandbook').addClass('active');
	});

	$("#sormNavAdminChecklist").click(function () {
		$('html, body').animate({scrollTop: $("#sec-adminChecklist").offset().top}, 1000);
		$('.sormNav li').removeClass('active');
		$('.sormNav #sormNavAdminChecklist').addClass('active');
	});

	$("#sormNavGeneralRules").click(function () {
		$('html, body').animate({scrollTop: $("#sec-generalRules").offset().top}, 1000);
		$('.sormNav li').removeClass('active');
		$('.sormNav #sormNavGeneralRules').addClass('active');
	});
});
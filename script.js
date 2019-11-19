$(document).ready(function(){
	$("#run3d__left").click(function(){
		$(".models__item--left .models_img").slideToggle("slow");
		$(".models__item--left .dopelessrotate").slideToggle("slow");
		$("#run3d__left").addClass("disabled");
		$("#galleryBtn__left").removeClass("disabled");
		$('#rotateimage__left').tsRotate({
			'pathtophp':'/templates/baltmotors/',
			'zoom':false,
			'reverse': true,
			'disablelogo': true,
			'autorotate': true,
		});
	});
	$("#galleryBtn__left").click(function(){
		$(".models__item--left .dopelessrotate").slideToggle("slow");
		$("#galleryBtn__left").addClass("disabled");
		$(".models__item--left .models_img").slideToggle("slow");
		$("#run3d__left").removeClass("disabled");
	});
	$("#run3d__right").click(function(){
		$(".models__item--right .models_img").slideToggle("slow");
		$("#run3d__right").addClass("disabled");
		$(".models__item--right .dopelessrotate").slideToggle("slow");
		$("#galleryBtn__right").removeClass("disabled");
		$('#rotateimage__right').tsRotate({
			'pathtophp':'/templates/baltmotors/',
			'zoom':false,
			'reverse': true,
			'disablelogo': true,
			'autorotate': true,
		});
	});
	$("#galleryBtn__right").click(function(){
		$(".models__item--right .dopelessrotate").slideToggle("slow");
		$("#galleryBtn__right").addClass("disabled");
		$(".models__item--right .models_img").slideToggle("slow");
		$("#run3d__right").removeClass("disabled");
	});
});

$.fancybox.defaults.loop = true;
$('.play').click(function(){
	$('[data-fancybox="preview"]').fancybox({
	});
});


$('#btn').click(function() {
	$('.img-contain').slideToggle('fast');
});

$('.img-contain img').click(function() {
	// var zMax = 0;
	// console.log($('.panzoom').has('img').length);
	var num = $('#paly').children('img').length;
	console.log(num);
	var newUrl = $(this).attr('src');
	var newImg = "<img src='" + newUrl +"' class='panzoom' z-index= '" + num + "'>";

	// if ($('section').has('img').length == 0) {
		$('section').append(newImg);
	// } else {
		// var opt = $('.panzoom').offset();
		// var x = opt.left;
		// var y = opt.top;
		// var oldUrl = $('.panzoom img').attr('src');
		// var outImg = "<img src='" + oldUrl + "' style='left:" + x +"px; top:" + y + "px;z-index:-1;'>";
		// $('section').append(newImg);
		// $('section').append(outImg);
	// }
	(function() {
		$('.panzoom').panzoom({
		});
  })();
});

$('#paly').click(function(event,zIndex) {
	var x = event.target;
	if ($(x).hasClass('panzoom')) {
		var oldIndex = $(x).css('z-index');
		// console.log('tupian');
		var num = $('#paly').children('img').length - 1;
		// console.log(num);
		$(x).css('z-index', num);
		var otherx = $(x).siblings();
		console.log(otherx)
		var other = $(x).siblings().length;
		for (var i = 0; i < other ; i++) {
			var otherIndex = $(x).siblings()[i];
			var y = $(otherIndex).css('z-index');
			// console.log(otherIndex);
			// console.log(y);
			if (y >= oldIndex ) {
				y--;
				$(otherIndex).css('z-index', y);
			}
		}
	}
});
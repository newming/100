$('#btn').click(function() {
	$('.img-contain').slideToggle('fast');
});

$('.img-contain img').click(function() {
	// console.log($('.panzoom').has('img').length);
	var newUrl = $(this).attr('src');
	var newImg = "<img src='" + newUrl +"' class='panzoom'>";

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
  $(function () {
        $(".panzoom").draggable({            
            stack: ".panzoom"
        });
    });
});

// $('section').click(function(e) {
// 	var img = e.target;
// 	console.log(img);
// 	if (img.className == 'panzoom') {
// 		img.remove();
// 		$('section').append(img);
// 	}


	// var newUrl = $(this).attr('src');
	// var newImg = "<img src='" + newUrl +"' class='panzoom'>";
	// $('section').remove($(this));
// });
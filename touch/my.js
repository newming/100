$('#btn').click(function() {
	console.log('...')
	$('.img-contain').slideToggle('fast');
});

$('.img-contain img').click(function() {
	// var zMax = 0;
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
  // $(function () {
  //   $(".panzoom").draggable({            
  //       stack: ".panzoom"
  //   });
  // });
	// $('.panzoom').click(function() {
	// 	alert('aaa')
	// 	// console.log($(this));
	// 	// var zMax = $('section').children('img').length;
	// 	zMax ++;
	// 	console.log(zMax);
	// 	$(this).css('z-index', zMax);
	// 	// console.log(zMax);
	// 	// var otherImg = $(this).siblings('img');
	// 	// var zNum = $(this).siblings('img').length; 
	// 	// // console.log(zNum);
	// 	// if (zNum == 0) {}else{
	// 	// 	for (var i = 0; i < zNum; i++) {
	// 	// 		otherImg[i].css('z-index', );
	// 	// 	}
	// 	// }
	// 	return zMax;
	// });
});

$('#btn').click(function() {
	$('.img-contain').slideToggle('fast');
});

$('.img-contain img').click(function() {
	// var zMax = 0;
	// console.log($('.panzoom').has('img').length);
	// var num = $('#paly').children('img').length;
	// console.log(num);
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
	// (function() {
	// 	$('.panzoom').panzoom({
	// 	});
 //  })();
  $(function () {
	  $(".panzoom").draggable({            
	      stack: ".panzoom"
	  });
  });
  
	// touch.on('.panzoom', 'touchstart', function(ev){
	// 	ev.preventDefault();
	// });

	var initialScale = 1;
	var currentScale;

	touch.on('.panzoom', 'pinchend', function(ev){
		this.style.webkitTransition = 'all ease 0.05s';
		currentScale = ev.scale - 1;
		currentScale = initialScale + currentScale;
		currentScale = currentScale > 2 ? 2 : currentScale;
		currentScale = currentScale < 1 ? 1 : currentScale;
		this.style.webkitTransform = 'scale(' + currentScale + ')';
		console.log("当前缩放比例为:" + currentScale + ".");
	});

	touch.on('.panzoom', 'pinchend', function(ev){
		initialScale = currentScale;
	});
});

// $('#play').click(function(event) {
// 	var x = event.target;
// 	if ($(x).hasClass('panzoom')) {
// 		var oldIndex = $(x).css('z-index');
// 		// console.log('tupian');
// 		var num = $('#play').children('img').length - 1;
// 		// console.log(num);
// 		$(x).css('z-index', num);
// 		var otherx = $(x).siblings();
// 		console.log(otherx)
// 		var other = $(x).siblings().length;
// 		for (var i = 0; i < other ; i++) {
// 			var otherIndex = $(x).siblings()[i];
// 			var y = $(otherIndex).css('z-index');
// 			// console.log(otherIndex);
// 			// console.log(y);
// 			if (y > oldIndex ) {
// 				y--;
// 				$(otherIndex).css('z-index', y);
// 			}
// 		}
// 	}
// });
// }
// $('#play').on('click touchstart', '.panzoom', function(event) {
// 	event.preventDefault();
// 	/* Act on the event */
// 	console.log('aaa')
// });
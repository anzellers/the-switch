var changeLights = function() {
	$('.on').toggleClass('off');

	if ( $('button').hasClass('off') ) {
		$('body').addClass('dark');
		$('.status').text('Hey who turned off the lights?');
	}
	else {
		$('body').removeClass('dark');
		$('.status').text("It's so bright in here!");
	}
	
}

$('.switch').on('click', changeLights);

// $('.switch').on('click', function () {

// 	$('body').toggleClass('dark');


// 	if ( $('button').hasClass('on') ) {
// 		$('button').removeClass('on');
// 		$('button').addClass('off');
// 		$('.status').text('Hey who turned off the lights?');
// 	}
// 	else {
// 		$('button').removeClass('off');
// 		$('button').addClass('on');
// 		$('.status').text("It's so bright in here!");
// 	}

// });





// var changeLights = function() {
// 	$('body').toggleClass('dark');

// 	$('button').removeClass('on');
// 	$('button').addClass('off');
// 	$('.status').text('Hey who turned off the lights?');
	
// }

// var turnOn = function() {
// 	$('button').removeClass('off');
// 	$('button').addClass('on');
// 	$('.status').text("It's so bright in here!");
// }


// $('.switch').on('click', turnOff);

$('.switch').on('click', function () {

	$('body').toggleClass('dark');


	if ( $('button').hasClass('on') ) {
		$('button').removeClass('on');
		$('button').addClass('off');
		$('.status').text('Hey who turned off the lights?');
	}
	else {
		$('button').removeClass('off');
		$('button').addClass('on');
		$('.status').text("It's so bright in here!");
	}

});





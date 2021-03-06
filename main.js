$(document).ready(() => {
	//Arrow functions does not contain a default value for the variable 'this',
	// and are best-suited for non-method functions
	
	const $window = $(window);
	//alert($window.width() + " " + $window.height());
	
	
	const $body = $('#body');
	const $logo = $('#logo');
	const $logoSVG = $('#logoSVG');
	let isTemplate = false;
	
	//$body.css();
	
	//Math.random() returns a number between 0 (inclusive) and 1 (exclusive),
	// meaning 0 is a possible number for Math.random() to return
	const imgNum = Math.ceil(Math.random() * 8);
	
	let src = '';
	function refreshPicture() {
		if(!isTemplate) {
			src = 'img/logo0' + imgNum + '.svg';
		} else if (isTemplate) {
			src = '../img/logo0' + imgNum + '.svg';
		}
		$logo.attr('src', src);
		$logo.attr('width', $window.width() / 13);
		$logo.attr('height', 'auto');
	}
	refreshPicture();
	
	
	$window.on('resize', () => {
		refreshPicture();
	});
});
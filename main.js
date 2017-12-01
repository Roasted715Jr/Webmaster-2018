$(document).ready(() => {
	//Arrow functions does not contain a default value for the variable 'this', and are best-suited for non-method functions
	
	//Store jQuery object as const
	//const $object = $('nav');
	
	let imgNum = Math.ceil(Math.random() * 8);
	let src = 'img/logo0' + imgNum + '.png';
	$('#logo').attr('src', src);
	
	/*
	
	int number;
	string source;
	number = random.range(1,8)
	source = 'img/logo0' + number + '.png';
	
	*/
	
    $("p").click(function(){
        $(this).hide();
    });
});
$(document).ready(() => {
	//Arrow functions does not contain a default value for the variable 'this', and are best-suited for non-method functions
    $("p").click(function(){
        $(this).hide();
    });
	
	//Store jQuery object as const
	const $object = $('nav');
});
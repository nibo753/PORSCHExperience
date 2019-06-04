$.fn.createDataOffset = function()
{
	var check = document.querySelector('.home');
	if (check) { document.body.setAttribute('data-offset', window.h*0.5); }
}
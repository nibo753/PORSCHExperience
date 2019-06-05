$.fn.createDataOffset = function()
{
	const home = document.querySelector('.home');
	if (home) {
		$('body').scrollspy({target: '#sideNav', offset: window.h*0.62})
	}
}
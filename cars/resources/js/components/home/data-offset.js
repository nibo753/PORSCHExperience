function setDataOffset(){
	var body = document.querySelector('body.home');
	if (body) { body.setAttribute('data-offset', window.h*0.5); }
}

setDataOffset();
//window.addEventListener('resize', setDataOffset);
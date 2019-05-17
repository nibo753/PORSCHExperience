var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
	h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

function setDataOffset(){
	var body = document.querySelector('body.home');
	if (body) { body.setAttribute('data-offset', h*0.5); }
}

setDataOffset();
//window.addEventListener('resize', setDataOffset);
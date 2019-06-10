import * as f from './../../functions';

const check 	= document.querySelector('.models'),
	modelInfo 	= $('.model_info');

if ( check && modelInfo.length ) {
	let imgs = document.querySelectorAll('.dimensions img'),
	lengthDiv = document.querySelectorAll('.dimensions .length'),
	widthDiv = document.querySelectorAll('.dimensions .width'),
	widthTxt = document.querySelectorAll('.dimensions .width_txt'),
	heightDiv = document.querySelectorAll('.dimensions .height');

	for (var i = imgs.length - 1; i >= 0; i--) {
		let offset = imgs[i].offsetWidth,
			height = imgs[i].offsetHeight;

		if (lengthDiv[i]){
			lengthDiv[i].style.width = .9*offset + 'px';
			lengthDiv[i].style.left = .05*offset + 'px';
		}
		if (widthDiv[i]){
			widthDiv[i].style.width = 1.45*offset + 'px';
			widthDiv[i].style.left = .25*offset + 'px';
			widthTxt[i].style.width = .9*offset + 'px';
			widthTxt[i].style.left = .55*offset + 'px';
		}
		if(heightDiv[i]){
			heightDiv[i].style.width = .5*height + 'px';
		}
	}
}
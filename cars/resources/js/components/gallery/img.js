import * as f from './../../functions';

const check = document.querySelector('.gallery');

if ( check && !f.isMobile()) {
    // set all imgs equal height
    let imgs = document.querySelectorAll('.gallery_container img');
    let height = $('.img_container').outerHeight(true);

    for (let i = 0; i < imgs.length; i++){
        imgs[i].style.height = height + 'px';
    }
}
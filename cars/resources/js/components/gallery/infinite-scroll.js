import * as f from './../../functions';

const check = document.querySelector('.gallery');

function fixImgHeight() {
    if ( check && !f.isMobile()) {
        let imgs = document.querySelectorAll('.gallery_container img');
        let height = $('.img_container').outerHeight(true);

        for (let i = 0; i < imgs.length; i++){
            imgs[i].style.height = height + 'px';
        }
    }
}
fixImgHeight();

function placeContentInsideOriginalDiv(){
    let cols = document.querySelectorAll('.jscroll-added .row > div'),
    original = document.querySelector('.jscroll-inner .row:first-child');

    for (let i = 0; i < cols.length; i++){
        let container = document.createElement("div");
        container.appendChild(cols[i].cloneNode(true));
        original.insertAdjacentHTML('beforeend', container.innerHTML);
    }
    $('.jscroll-added').remove();
}


$('ul.pagination').hide();
$(function() {
    $('.gallery_container').jscroll({
        autoTrigger: true,
        loadingHtml: '<span>Loading ...</span>',
        padding: 0,
        nextSelector: '.pagination li.active + li a',
        contentSelector: '.gallery_container .row',
        callback: function() {
            $('ul.pagination').remove();
            fixImgHeight();
            placeContentInsideOriginalDiv();
        }
    });
});
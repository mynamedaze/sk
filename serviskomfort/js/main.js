'use strict';
$(document).ready(function () {
    $('.cases__list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        items: 1,
        dots: false,
        nav: true,
        responsive: {
            1200: {
                mouseDrag: false
            }
        }
    });
});
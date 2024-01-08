document.addEventListener('DOMContentLoaded', function () {

    let myCarousel = new bootstrap.Carousel(document.getElementById('imageSlider'), {
        interval: 3000, 
        pause: 'hover', 
        wrap: true 
    });
});

// js for header carousel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextSlide = document.querySelector('.carousel-right')
const prevSlide = document.querySelector('.carousel-left')

const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

//gets dimentions of slide items
const slideWidth = slides[0].getBoundingClientRect().width;

// named function
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

// slides.forEach((slide, index) => {
//     slide.style.left = slideWidth * index + 'px';
// })

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}


// next button
nextSlide.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;
    if (nextSlide === null) {
        nextSlide = slides[0];
    }
    // move to next slide
    moveToSlide(track, currentSlide, nextSlide);
})

//perv button
prevSlide.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;
    //move to previous slide
    if (prevSlide === null) {
        prevSlide = slides[slides.length - 1];
    }
    moveToSlide(track, currentSlide, prevSlide);
})

// navigator
dotsNav.addEventListener('click', e => {
    // what was clicked
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');;

})


// js for partners carousel
const prtnrTrack = document.querySelector('.partner-track');
const prtnrSlides = Array.from(prtnrTrack.children);

const prtnrDotsNav = document.querySelector('.partner-nav');
const prtnrDots = Array.from(prtnrDotsNav.children);

const prtnrSlideWidth = prtnrSlides[0].getBoundingClientRect().width;

const setPrtnrPosition = (prtnr, index) => {
    prtnr.style.left = prtnrSlideWidth * index + 'px';
}
prtnrSlides.forEach(setPrtnrPosition);

const moveToPrtnr = (prtnrTrack, currentPrtnr, targetPrtnr) => {
    prtnrTrack.style.transform = 'translateX(-' + targetPrtnr.style.left +')';
    currentPrtnr.classList.remove('current-partner');
    targetPrtnr.classList.add('current-partner');
}


prtnrDotsNav.addEventListener('click', e => {
    // what was clicked
    const targetPrtnrDot = e.target.closest('button');

    if(!targetPrtnrDot) return;

    const currentPrtnr = prtnrTrack.querySelector('.current-partner');
    const currentPrtnrDot = prtnrDotsNav.querySelector('.current-partner');
    const targetIndex = prtnrDots.findIndex(dot => dot === targetPrtnrDot);
    const targetPrtnr = prtnrSlides[targetIndex];

    moveToPrtnr(prtnrTrack, currentPrtnr, targetPrtnr);

    currentPrtnrDot.classList.remove('current-partner');
    targetPrtnrDot.classList.add('current-partner');;

})
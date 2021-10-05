
const slidesTitle = new Swiper('.surfaceAndGradients__slides_title', {
    navigation: {
        nextEl: '.button-slide_prev',
        prevEl: '.button-slide_next'
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 40,
    loop: true,

    effect: 'fade',
    fadeEffect: {crossFade: true },

    simulateTouch: false,
});
const slidesText = new Swiper('.surfaceAndGradients__slides_text', {
    // navigation: {
    //     nextEl: '.button-slide_prev',
    //     prevEl: '.button-slide_next'
    // },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 40,
    loop: true,
    effect: 'creative',

    effect: 'fade',
    fadeEffect: {crossFade: true },
    simulateTouch: false,

    controller: {
        control: slidesTitle,
    },
});
const slides = new Swiper('.surfaceAndGradients__slides', {
    navigation: {
        nextEl: '.button-slide_prev',
        prevEl: '.button-slide_next'
    },
    slidesPerView: 1.95,
    slidesPerGroup: 1,
    spaceBetween: 40,
    loop: true,
    breakpoints: {
        420: { slidesPerView: 1.05 },
        720: { slidesPerView: 1.35 },
        1020: { slidesPerView: 1.65 },
        1420: { slidesPerView: 1.95 },
    },
    grabCursor: true,
    slideToClikedSlide: true,
    controller: {
        control: slidesText,
    },
});


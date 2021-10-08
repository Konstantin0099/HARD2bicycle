

const slidesTitle = new Swiper(".surfaceAndGradients__slides_title", {
  navigation: {
    nextEl: ".button-slide_prev",
    prevEl: ".button-slide_next",
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 40,
  loop: true,
  
  effect: "fade",
  fadeEffect: { crossFade: true },
  
  simulateTouch: false,
});
const slidesText = new Swiper(".surfaceAndGradients__slides_text", {
  // navigation: {
    //     nextEl: '.button-slide_prev',
    //     prevEl: '.button-slide_next'
    // },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 100,
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    simulateTouch: false,
    
    controller: {
      control: slidesTitle,
    },
  });

  
  const slides = new Swiper(".surfaceAndGradients__slides", {
    navigation: {
      nextEl: ".button-slide_prev",
      prevEl: ".button-slide_next",
    },
    slidesPerView: 1.95,
    slidesPerGroup: 1,
    spaceBetween: 40,
    // loop: true,
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
  const bikesGroup = ["Шоссе", "Грэвел", "TT"];
  const slidesBikes = new Swiper(".bikes__slides", {
    spaceBetween: 650,
    pagination: {
      el: ".bikes__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + bikesGroup[index] + '</span>';
      },
    },
    effect: "slide",
    // effect: "fade",
    // speed: 700,
    // fadeEffect: { crossFade: true },
    // simulateTouch: false,
    slidesPerView: 1,
    // wateOverflow: true,
    slidesPerGroup: 1,
    // loop: true,
  });
  console.log ('end');




const slidesHighway = new Swiper(".highway-slides", {
  navigation: {
    nextEl: ".highway-slides__prev",
    prevEl: ".highway-slides__next",
  },
  pagination: {
    el: ".highway-slides__swiper-pagination",
    clickable: true,
  },
  
  slidesPerView: 3,
  // wateOverflow: true,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  nested: true,
});
const slidesGravel = new Swiper(".gravel-slides", {
    spaceBetween: 30,
  pagination: {
    el: ".gravel-slides__swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + bikesGroup[index] + "</span>";
    // },
  },
  slidesPerView: 3,
  wateOverflow: true,
  slidesPerGroup: 1,
  loop: true,
});
const slidesTT = new Swiper(".TT-slides", {
    spaceBetween: 30,
  pagination: {
    el: ".TT-slides__swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + bikesGroup[index] + "</span>";
    // },
  },
  slidesPerView: 3,
  wateOverflow: true,
  slidesPerGroup: 1,
  loop: true,
});

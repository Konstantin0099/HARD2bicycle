

  
  const slides = new Swiper(".surfaceAndGradients__slides", {
    navigation: {
      nextEl: ".surfaceAndGradients__button-slide_next",
      prevEl: ".surfaceAndGradients__button-slide_prev",
    },
    slidesPerView: 1.95,
    slidesPerGroup: 1,
    spaceBetween: 40,
    loop: true,
    breakpoints: {
      300: { slidesPerView: 1,
        spaceBetween: 18
      },
      601: { slidesPerView: 1.35 },
      1020: { slidesPerView: 1.65 },
      1420: { slidesPerView: 1.95 },
    },
    grabCursor: true,
    slideToClikedSlide: true,

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
    simulateTouch: false,
    slidesPerView: 1,
    // wateOverflow: true,
    slidesPerGroup: 1,
    // loop: true,
  });
  
  
  
  
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
      
      console.log ('end');
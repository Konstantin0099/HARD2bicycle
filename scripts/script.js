
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
    slidesPerView: 1,
    slidesPerGroup: 1,
  });
  
  const slidesHighway = new Swiper(".highway-slides", {
    pagination: {
      el: ".highway-slides__swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
    wateOverflow: true,
    spaceBetween: 30,
    slidesPerGroup: 1,
    nested: true,
    breakpoints: {
      600: { slidesPerView: 3 },
     
    },
  });
  const slidesGravel = new Swiper(".gravel-slides", {
    spaceBetween: 30,
    pagination: {
      el: ".gravel-slides__swiper-pagination",
      clickable: true,
      },
      slidesPerView: 1,
      wateOverflow: true,
      slidesPerGroup: 1,
      nested: true,
      breakpoints: {
        600: { slidesPerView: 3 },
       
      },
    });
    const slidesTT = new Swiper(".TT-slides", {
      spaceBetween: 30,
      pagination: {
        el: ".TT-slides__swiper-pagination",
        clickable: true,
        },
        slidesPerView: 1,
        wateOverflow: true,
        slidesPerGroup: 1,
        breakpoints: {
          600: { slidesPerView: 3 },
         
        },
      });
      
      console.log ('end');
const header = document.querySelector(".header");
const buttonHeaderMenuOpened = header.querySelector(".header__button");
const headerMenu = header.querySelector(".header__menu");
const buttonHeaderMenuClosed = headerMenu.querySelector(".header__button");
installEventListenerMenuOpeningButton(buttonHeaderMenuOpened)
installEventListenerMenuClosedButton(buttonHeaderMenuClosed)

console.log("начало");

function installEventListenerMenuOpeningButton(button) {
  console.log("installEventListenerMenuOpeningButton()");
button
    .addEventListener("click", function (evt) {
      openedMenu();
    });
}
function installEventListenerMenuClosedButton(button) {
  console.log("installEventListenerMenuClosedButton()");
button
    .addEventListener("click", function (evt) {
      closedMenu();
    });
}

function openedMenu() {
  console.log("openedMenu()");
  headerMenu.classList.remove("header__menu_closed");
  buttonHeaderMenuOpened.classList.add('header__button_closed');
  ;
}
function closedMenu() {
  console.log("closedMenu()");
  headerMenu.classList.add("header__menu_closed");
  buttonHeaderMenuOpened.classList.remove('header__button_closed');
  ;
}

// function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   popup.parentElement.classList.add("popup_opened");
// }
// function closePopup(closePopup) {
//   closePopup.parentElement.classList.add("popup_closed");
//   closePopup.parentElement.classList.remove("popup_opened");
//   closePopup.classList.remove("popup_opened");
// }
// function setPopupCloseButtonEventListener(popup) {
//   popup
//     .querySelector(".popup__click")
//     .addEventListener("click", function (evt) {
//       closePopup(popup);
//     });
// }













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
    300: { slidesPerView: 1, spaceBetween: 18 },
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
      return '<span class="' + className + '">' + bikesGroup[index] + "</span>";
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

console.log("end");

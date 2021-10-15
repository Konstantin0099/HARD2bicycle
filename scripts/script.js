const header = document.querySelector(".header");
const page = document.querySelector(".page");
const buttonHeaderMenuOpened = header.querySelector(".header__button");
const headerMenu = header.querySelector(".header__menu");
const buttonHeaderMenuClosed = headerMenu.querySelector(".header__button");
const bikesBlock = document.querySelector(".bikes");
const bikesPaginationContainer = bikesBlock.querySelector(
  ".bikes__pagination-container"
);
const footer = document.querySelector(".footer");
const themeSwitchFooter = footer.querySelector(".theme-switch__button-container");
const themeSwitchHeader = header.querySelector(".theme-switch__button-container");
const footerInputContainer = footer.querySelector(".footer__input-container");
const footerYourEmail = footerInputContainer.querySelector(".footer__your-email");
const footerInputContainerButton = footerInputContainer.querySelector(".footer__input-container-button");

installEventListenerPaginationOpeningButton(bikesPaginationContainer);
installEventListenerMenuOpeningButton(buttonHeaderMenuOpened);
installEventListenerMenuClosedButton(buttonHeaderMenuClosed);


themeSwitchFooter.addEventListener("click", function (evt) {
  themeSwitchFooter.classList.toggle("theme-switch__button-container_moon-position");
  themeSwitchHeader.classList.toggle("theme-switch__button-container_moon-position");
  page.classList.toggle("page_dark-theme");
  buttonHeaderMenuOpened.classList.toggle("header__button_darkTheme");
});
themeSwitchHeader.addEventListener("click", function (evt) {
  themeSwitchHeader.classList.toggle("theme-switch__button-container_moon-position");
  themeSwitchFooter.classList.toggle("theme-switch__button-container_moon-position");
  page.classList.toggle("page_dark-theme");
  buttonHeaderMenuOpened.classList.toggle("header__button_darkTheme");
});


footerInputContainer.addEventListener("click", function (evt) {
  footerYourEmail.placeholder = ""
footerInputContainerButton.classList.add("footer__input-container-button_show");
});

footerInputContainer.addEventListener("submit", function (evt) {
  evt.preventDefault();
  evt.target.reset(); // очистка формы
  footerInputContainerButton.classList.remove("footer__input-container-button_show");
  footerYourEmail.placeholder = "Круто!"
});

function installEventListenerPaginationOpeningButton(button) {
 button.addEventListener("click", function (evt) {
    openedMenuPagination(button);
  });
}

function installEventListenerMenuOpeningButton(button) {
  console.log("installEventListenerMenuOpeningButton()");
  button.addEventListener("click", function (evt) {
    openedMenu();
  });
}
function installEventListenerMenuClosedButton(button) {
  console.log("installEventListenerMenuClosedButton()");
  button.addEventListener("click", function (evt) {
    closedMenu();
  });
}

function openedMenuPagination(button) {
  console.log("button", button);
  button.classList.toggle(
    "bikes__pagination-container_opened"
  );
}

function openedMenu() {
  console.log("openedMenu()");
  headerMenu.classList.remove("header__menu_closed");
  buttonHeaderMenuOpened.classList.add("header__button_closed");
}
function closedMenu() {
  console.log("closedMenu()");
  headerMenu.classList.add("header__menu_closed");
  buttonHeaderMenuOpened.classList.remove("header__button_closed");
}

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

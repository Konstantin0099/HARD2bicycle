const header = document.querySelector(".header");
const page = document.querySelector(".page");
const intro = document.querySelector(".intro");
const surfaceAndGradients = document.querySelector(".surfaceAndGradients");
const bikes = document.querySelector(".bikes");
const training = document.querySelector(".training");
const footer = document.querySelector(".footer");

const buttonHeaderMenuOpened = header.querySelector(".header__button_openedMenu_lightTheme");
const headerMenu = header.querySelector(".header__nav");
const buttonHeaderMenuClosed = header.querySelector(".header__button_closedMenu_lightTheme");

const descriptionTextIntro = intro.querySelector(".description-text");
const descriptionTextHighway = surfaceAndGradients.querySelector(
  ".description-text_highway"
);
const descriptionTextGrevel = surfaceAndGradients.querySelector(
  ".description-text_grevel"
);
const descriptionTextTT = surfaceAndGradients.querySelector(
  ".description-text_TT"
);
const descriptionTexttraining = training.querySelector(".description-text");

const bikesPaginationArrow = bikes.querySelector(".bikes__pagination-arrow");
const bikesPagination = bikes.querySelector(".bikes__pagination");
const bikesBlock = document.querySelector(".bikes");
const bikesPaginationContainer = bikesBlock.querySelector(
  ".bikes__pagination-container"
);
const bikesSlides = bikesBlock.querySelector(".bikes__slides");

const footerInputContainer = footer.querySelector(".footer__input-container");
const footerYourEmail = footerInputContainer.querySelector(
  ".footer__your-email"
);
const footerInputContainerButton = footerInputContainer.querySelector(
  ".footer__input-container-button"
);
const themeSwitchFooter = footer.querySelector(
  ".theme-switch__button-container"
);
const themeSwitchHeader = header.querySelector(
  ".theme-switch__button-container"
);

installEventListenerPaginationOpeningButton(bikesPaginationContainer);
installEventListenerMenuOpeningButton(buttonHeaderMenuOpened);
installEventListenerMenuClosedButton(buttonHeaderMenuClosed);

themeSwitchFooter.addEventListener("click", function (evt) {
  darkTheme();
});
themeSwitchHeader.addEventListener("click", function (evt) {
  darkTheme();
});

footerInputContainer.addEventListener("click", function (evt) {
  footerYourEmail.placeholder = "";
  footerInputContainerButton.classList.add(
    "footer__input-container-button_show"
  );
});

function darkTheme() {
  themeSwitchHeader.classList.toggle(
    "theme-switch__button-container_moon-position"
  );
  themeSwitchFooter.classList.toggle(
    "theme-switch__button-container_moon-position"
  );
  page.classList.toggle("page_dark-theme");
  buttonHeaderMenuOpened.classList.toggle("header__button_openedMenu_darkTheme");
  buttonHeaderMenuOpened.classList.toggle("header__button_openedMenu_lightTheme");
  buttonHeaderMenuClosed.classList.toggle("header__button_closedMenu_lightTheme");
  buttonHeaderMenuClosed.classList.toggle("header__button_closedMenu_darkTheme");
  descriptionTextIntro.classList.toggle("description-text_darkTheme");
  descriptionTextHighway.classList.toggle("description-text_darkTheme");
  descriptionTextGrevel.classList.toggle("description-text_darkTheme");
  descriptionTextTT.classList.toggle("description-text_darkTheme");
  descriptionTexttraining.classList.toggle("description-text_darkTheme");
  bikesPaginationArrow.classList.toggle("bikes__pagination-arrow_darkTheme");
  bikesPagination.classList.toggle("bikes__pagination_dark");
  footer.classList.toggle("footer_darkTheme");
  footer.classList.toggle("theme-switch__button-container_darkTheme");
  bikesSlides.classList.toggle("bikes__slides_darkTheme");
}

function installEventListenerPaginationOpeningButton(button) {
  button.addEventListener("click", function (evt) {
    openedMenuPagination(button);
  });
}

function installEventListenerMenuOpeningButton(button) {
  button.addEventListener("click", function (evt) {
    clickButtonOpenedClosedMenu()
  });
}
function installEventListenerMenuClosedButton(button) {
  button.addEventListener("click", function (evt) {
    clickButtonOpenedClosedMenu()
  });
}

function openedMenuPagination(button) {
  button.classList.toggle("bikes__pagination-container_opened");
}

function clickButtonOpenedClosedMenu() {
  buttonHeaderMenuOpened.classList.toggle("header__button_mobile_closed");
  buttonHeaderMenuClosed.classList.toggle("header__button_mobile_closed");
  headerMenu.classList.toggle("header__nav_menu_closed");
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
  spaceBetween: 1650,
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

const slidesHighway = new Swiper(".slides", {
  pagination: {
    el: ".slides__swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  wateOverflow: true,
  spaceBetween: 30,
  slidesPerGroup: 1,
  nested: true,
  breakpoints: {
    600: { slidesPerView: 2 },
    900: { slidesPerView: 3 },
  },
});

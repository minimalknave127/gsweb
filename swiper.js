//import Swiper from "swiper";

const swiper = new Swiper(".teamSlider", {
  slidesPerView: "auto",
  spaceBetween: 80,
  centeredSlides: true,
  loop: true,
  effect: "slide",
  speed: 1000,
  navigation: {
    nextEl: ".teamSlider-arrow-next",
    prevEl: ".teamSlider-arrow-back",
  },
});

const swiper2 = new Swiper(".teamSliderInfo", {
  slidesPerView: "auto",
  spaceBetween: 120,
  centeredSlides: true,
  noSwiping: true,
  loop: true,
  speed: 800,
  effect: "slide",
  // navigation: {
  //   nextEl: ".teamSlider-arrow-next",
  //   prevEl: ".teamSlider-arrow-back",
  // },
});

swiper.on("slideNextTransitionStart", () => {
  swiper2.slideNext();
  swiper2.update();
  console.log("next");
});
swiper.on("slidePrevTransitionStart", () => {
  swiper2.slidePrev();
  swiper2.update(true);
});
// swiper2.on("slideNextTransitionStart", () => {
//   swiper.slideNext();
//   swiper.update();
// });
// swiper2.on("slidePrevTransitionStart", () => {
//   swiper.slidePrev();
//   swiper.update(true);
// });

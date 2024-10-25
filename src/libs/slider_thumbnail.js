import Swiper from "swiper";
import {
  Navigation,
  FreeMode,
  Thumbs,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

document.addEventListener("DOMContentLoaded", () => {
  
  const thumbs_swiper = new Swiper(".thumbs", {
    modules: [FreeMode],
    spaceBetween: 3,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const main_swiper = new Swiper(".main", {
    modules: [Navigation, Thumbs, Mousewheel, Autoplay],
    spaceBetween: 4,
    slidesPerView: 2,
    mousewheel: true,
    freeMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1500,
    },
    thumbs: {
      swiper: thumbs_swiper,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 4,
      },
      768: {
        freeMode: false,
        slidesPerView: 3,
        spaceBetween: 4,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 4,
      },
      1280: {
        slidesPerView: 7,
        spaceBetween: 4,
      },
    },
  });
  main_swiper;
});

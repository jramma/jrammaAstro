import Swiper from 'swiper';
import { Navigation, FreeMode, Thumbs, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';


document.addEventListener('DOMContentLoaded', function() {
  console.log('aaa')
    const thumbs_swiper = new Swiper(".thumbs", {
      modules:[FreeMode],
      spaceBetween: 3,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
    const main_swiper = new Swiper(".main", {
      modules: [Navigation,Thumbs, Mousewheel],
      watchSlidesProgress: 3,
      spaceBetween: 3,
      slidesPerView: 4,
      mousewheel: true,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      thumbs: {
        swiper: thumbs_swiper,
      },
    });
});

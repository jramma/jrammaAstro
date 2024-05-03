import Swiper from 'swiper';
import { Navigation, FreeMode, Thumbs, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';


document.addEventListener( 'DOMContentLoaded', function() {

      const thumbs_swiper = new Swiper(".thumbs", {
        modules:[FreeMode],
        spaceBetween: 1,
        slidesPerView: 7,
        freeMode: true,
        watchSlidesProgress: true,
      });
      const main_swiper = new Swiper(".main", {
        modules: [Navigation,Thumbs, Mousewheel],
        spaceBetween: 10,
        slidesPerView: 7,
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

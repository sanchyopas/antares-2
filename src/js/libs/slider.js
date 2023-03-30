// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';


// init Swiper:
const swiper = new Swiper('.reviews__slider', {
    slidesPerView: 2.5,
    spaceBetween: 8,
    allowSlideNext: true,
    allowSlidePrev: true,
    autoHeight: true,
    observer: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 14,
        },
        580: {
            slidesPerView: 2
        },
        921: {
            slidesPerView: 1,
        },
        1060: {
            allowTouchMove: true,
            slidesPerView: 2,
        },
        1260: {
            slidesPerView: 2.5,
            loop: false,
        }
    }
});
const gallery__lider = new Swiper('.gallery__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    allowSlideNext: true,
    allowSlidePrev: true,
    autoHeight: true,
    observer: true,

    freeMode: false,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        425: {
            slidesPerView: 2,
        },
        767: {
            spaceBetween: 10,
            allowTouchMove: true,
            slidesPerView: 2
        },
        1024: {
            allowTouchMove: true,
            slidesPerView: 3,
        },
        1260: {
            spaceBetween: 15,

            slidesPerColumn: 2,
            loop: false,
        }
    }

});
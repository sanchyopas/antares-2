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
const gallery__slider = new Swiper('.gallery__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    allowSlideNext: true,
    allowSlidePrev: true,
    autoHeight: true,
    observer: true,

    freeMode: false,
    allowTouchMove: true,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        426: {
            slidesPerView: 2,
        },
        767: {
            spaceBetween: 10,
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3,
        },
        1260: {
            loop: false,
        }
    }

});

const swiperPrev = document.getElementById('reviews__prev');
const swiperNext = document.getElementById('reviews__next');

if (swiperPrev) {
    swiperPrev.addEventListener('click', () => {
        swiper.slidePrev();
    });
}

if (swiperNext) {
    swiperNext.addEventListener('click', () => {
        swiper.slideNext();
    });
}


const galleryPrev = document.querySelectorAll('#gallery__btn--prev');
const galleryNext = document.querySelectorAll('#gallery__btn--next');

if (galleryPrev.length > 0) {
    galleryPrev.forEach(arrow => {
        arrow.addEventListener('click', () => {
            gallery__slider.slidePrev();
        })
    })
}

if (galleryNext.length > 0) {
    galleryNext.forEach(arrow => {
        arrow.addEventListener('click', () => {
            console.log('2');
            gallery__slider.slideNext();
        })
    })

}
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';


// init Swiper:
const reviews__slider = new Swiper('.reviews__slider', {
    slidesPerView: 2.5,
    spaceBetween: 8,
    // allowSlideNext: true,
    // allowSlidePrev: true,
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

const swiperPrev = document.querySelectorAll('.reviews__prev');
const swiperNext = document.querySelectorAll('.reviews__next');

if (swiperPrev.length > 0) {
    swiperPrev.forEach(btn => {
        btn.addEventListener('click', () => {
            reviews__slider.slidePrev();
            console.log('clikc-prev');
        });
    })
}

if (swiperNext.length > 0) {
    swiperNext.forEach(btn => {
        btn.addEventListener('click', () => {
            reviews__slider.slideNext();
        });
    })
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
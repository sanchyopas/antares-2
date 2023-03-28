// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';


// init Swiper:
const swiper = new Swiper('.swiper', {
    // Подключаем модули слайдера
    // для конкретного случая
    modules: [Navigation],
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 20,
    autoHeight: true,
    speed: 800,

    //touchRatio: 0,
    //simulateTouch: false,
    loop: true,
    // preloadImages: true,
    lazy: true,

    /*
    // Эффекты
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    */

    // Пагинация
    /*
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    */

    // Скроллбар
    /*
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    */

    // Кнопки "влево/вправо"
    navigation: {
        prevEl: '.reviews__slider-prev',
        nextEl: '.reviews__slider-next',
    },

    // Брейкпоинты
    /*
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1268: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    */
    // События
    on: {

    }

});
const gallery__lider = new Swiper('.gallery__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    allowSlideNext: true,
    allowSlidePrev: true,
    autoHeight: true,

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
            // slidesPerView: 'auto',
            allowTouchMove: true,
        },
        1024: {
            allowTouchMove: true,
        },
        1260: {
            allowTouchMove: true,
            spaceBetween: 15,
            slidesPerView: 2,
            slidesPerColumn: 2,
            loop: false,
        }
    }

});
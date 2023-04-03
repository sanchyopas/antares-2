console.log("Работает");

import * as functions from "./modules/functions.js";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";

import './libs/slider.js'
functions.isWebp();

const spollers_item = document.querySelectorAll(".spollers__item");

spollers_item.forEach(function (item) {
    item.addEventListener("click", openSpollers);
});

function openSpollers() {
    if (!this.classList.contains('_init')) {
        this.classList.add('_init');
    } else {
        this.classList.remove('_init');
    }
}


Fancybox.bind("[data-fancybox]", {});

let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

let arrows = document.querySelectorAll('.menu-bottom__arrow');

if (isMobile.any()) {
    document.body.classList.add('_touch');

    if (arrows.length > 0) {
        arrows.forEach(arrow => {
            arrow.addEventListener('click', function (e) {
                arrow.parentElement.classList.toggle('_active');
            })
        })
    }

} else {
    document.body.classList.add('_pc');

}

// new WOW().init();


function openSubMenu(e) {
    console.log('click');

}

// Плавная прокрутка к элементу

const anchorLink = document.querySelectorAll('.menu-link[data-goto]');

if (anchorLink.length > 0) {
    anchorLink.forEach(link => {
        link.addEventListener('click', onMenuLinkClick);
    })

    function onMenuLinkClick(e) {
        console.log(e.target);
        let menuLink = e.target;

        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })

            e.preventDefault();
        }
    }
}


// Всплывающие окна
const popupBtn = document.querySelectorAll('[data-popup]');

if (popupBtn.length > 0) {
    popupBtn.forEach(btn => {
        btn.addEventListener('click', openPopup);
    })

    function openPopup(e) {
        let popupBtn = e.target;
        let popup = document.querySelector(popupBtn.dataset.popup);
        popup.classList.add('popup__show');
        document.documentElement.classList.add('_lock');
    }
}

const closeBtn = document.querySelector('.popup__close');

if (closeBtn) {
    closeBtn.addEventListener('click', closePopup);

    function closePopup(e) {
        let closeBtn = e.target.closest('.popup');
        closeBtn.classList.remove('popup__show');
        document.documentElement.classList.remove('_lock');
    }
}

let popupBody = document.querySelector('.popup');

if (popupBody) {
    popupBody.addEventListener('click', function (e) {
        let event = e.target.closest('.popup__content');
        if (!event) {
            e.target.closest('.popup').classList.remove('popup__show');
            document.documentElement.classList.remove('_lock');
        }
    })

}

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        // e.target.closest('.popup').classList.remove('popup__show');
        document.documentElement.classList.remove('_lock');
    }
})







// let itemMenuList = document.querySelectorAll('.menu-bottom__item');

// if (itemMenuList.length > 0) {
//     itemMenuList.forEach(item => {

//         let child = item.querySelector('.submenu');

//         if (child) {
//             item.innerHTML += `
//             <span class="menu-bottom__arrow" style="background-image: url(../img/icons/arrow-down.svg);"></span>
//             `;
//         }


//     })
// }